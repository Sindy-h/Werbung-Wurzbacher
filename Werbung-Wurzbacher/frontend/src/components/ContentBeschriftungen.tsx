import Auto1 from '../images/Auto1.jpg'
import Bus1 from '../images/Bus1.jpg'
import Euronics from '../images/Euronics.jpg'
import BN from '../images/BN_Werk.jpg'

import EmblaCarousel from '../Carousel/EmblaCarousel' 
import type { EmblaOptionsType } from 'embla-carousel'

const BILDER_LISTE = [
    Auto1, 
    Bus1, 
    Euronics,
    BN


];

const ContentBeschriftungen = () => {
    const OPTIONS: EmblaOptionsType = { 
        align: 'start', 
        loop: true,
        slidesToScroll: 'auto' 
    }

    return (
        <section className="leading-8 space-y-6">
            <h2>Beschriftungen</h2>
            <div>
                <p>Ob Kfz-, Fassaden- oder Planenbeschriftung, Werbung Wurzbacher bietet Ihnen immer das auf Sie bestens abgestimmte Produkt.</p>
                <p>Von smart bis kräftig, von Kleinwagen bis LKW, von Einzelwagen bis Fuhrpark.</p>
                <p>Wir planen, designen und realisieren, was Ihnen gefällt.</p>
            </div>

            <div className="my-10">
                <EmblaCarousel slides={BILDER_LISTE} options={OPTIONS} />
            </div>

            <p className="border-t pt-4 italic text-gray-700">
                Wir setzen ausschließlich hochwertige Folien verschiedener Hersteller ein, um ein möglichst breites Farbspektrum abzudecken.
            </p>
        </section>
    )
}

export default ContentBeschriftungen