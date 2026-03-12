import { useState } from "react";
import ContentHome from "../components/ContentHome";

const Navbar = ({ onSelect }) => {
    return (
        <nav id="main-nav">
            <ul className="[&>li]:border [&>li]:rounded-sm max-w-3xs my-5 px-6 block w-64 space-y-4 text-center font-medium [&>li]:bg-[#8d1312] text-gray-200 [&>li]:py-2 text-lg">
                <li>
                    <a href="#home" onClick={(event) => {
                        event.preventDefault(); onSelect('home');
                    }}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#beschriftungen" onClick={(event) => {
                        event.preventDefault(); onSelect('beschriftungen');
                    }}>
                        Beschriftungen
                    </a>
                </li>
                <li>
                    <a href="#drucksachen" onClick={(event) => {
                        event.preventDefault(); onSelect('drucksachen');
                    }}>
                        Drucksachen
                    </a>
                </li>
                <li>
                    <a href="#textildruck" onClick={(event) => {
                        event.preventDefault(); onSelect('textildruck');
                    }}>
                        Textildruck
                    </a>
                </li>
                <li>
                    <a href="#digitaldruck" onClick={(event) => {
                        event.preventDefault(); onSelect('digitaldruck');
                    }}>
                        Digitaldruck
                    </a>
                </li>
                <li>
                    <a href="#kontakt" onClick={(event) => {
                        event.preventDefault(); onSelect('kontakt');
                    }}>
                        Kontakt
                    </a>
                </li>
                <li>
                    <a href="#gaestezimmer" onClick={(event) => {
                        event.preventDefault(); onSelect('gaestezimmer');
                    }}>
                        Gästezimmer
                    </a>
                </li>
                <li>
                    <a href="#ferienwohnung" onClick={(event) => {
                        event.preventDefault(); onSelect('ferienwohnung');
                    }}>
                        Ferienwohnung
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar

