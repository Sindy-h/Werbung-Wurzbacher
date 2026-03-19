import Auto1 from '../images/Auto1.jpg'
import Bus1 from '../images/Bus1.jpg'

import React from 'react'
import EmblaCarousel from '../Carousel/EmblaCarousel' // Pfad zu deiner fertigen Datei
import type { EmblaOptionsType } from 'embla-carousel'

// 1. Hier deine 24 Bilder sammeln (oder der Vite-Trick von vorhin)
const BILDER_LISTE = [
    Auto1, 
    Bus1, 
    // ... alle 24 Pfade
];

const ContentBeschriftungen = () => {
    // 2. Einstellungen für das Karussell (3 Bilder am Desktop, 1 mobil)
    const OPTIONS: EmblaOptionsType = { 
        align: 'start', 
        loop: true,
        slidesToScroll: 'auto' 
    }

    return (
        <section className="leading-8 space-y-6">
            <div>
                <p>Ob Kfz-, Fassaden- oder Planenbeschriftung, Werbung Wurzbacher bietet Ihnen immer das auf Sie bestens abgestimmte Produkt.</p>
                <p>Von smart bis kräftig, von Kleinwagen bis LKW, von Einzelwagen bis Fuhrpark.</p>
                <p>Wir planen, designen und realisieren, was Ihnen gefällt.</p>
            </div>

            {/* 3. HIER rufst du dein fertiges Karussell auf */}
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