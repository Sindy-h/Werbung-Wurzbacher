import React from 'react'
import type { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props
  // emblaRef kommt an den Viewport, emblaApi wird für die Buttons/Dots benötigt
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  // Nutzt deine korrigierten Hooks für die Navigation
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla max-w-full">
      {/* Viewport: Versteckt die Bilder, die "draußen" liegen */}
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        
        {/* Container: Hält die Bilder per 'flex' nebeneinander */}
        <div className="embla__container flex">
          {slides.map((src, index) => (
            <div 
              className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3%] min-w-0 px-2" 
              key={index}
            >
              <div className="h-64 w-full overflow-hidden rounded-xl shadow-md border border-white/20 bg-transparent">
                <img 
                  src={src} 
                  alt={`Referenz ${index + 1}`} 
                  className="w-full h-full object-contain block transition-transform duration-500 hover:scale-105" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Steuerung: Pfeile und Punkte */}
      <div className="embla__controls mt-6 flex flex-col items-center gap-4">
        <div className="embla__buttons flex gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots flex flex-wrap justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                ? 'bg-[#8d1312] w-6' // Aktueller Punkt ist rot und breiter
                : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel