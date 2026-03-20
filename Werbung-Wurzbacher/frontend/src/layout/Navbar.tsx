import { useState } from 'react';

const Navbar = ({ onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (id:string) => {
        onSelect(id);
        setIsOpen(false); // Schließt das Menü auf dem Handy nach dem Klick
    };

    return (
        <nav id="main-nav" className="p-6">
            {/* 1. Der Burger-Button: NUR auf kleinen Bildschirmen sichtbar (hidden ab md) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden bg-[#8d1312] text-white p-2 rounded-sm mb-4 w-full text-center font-bold"
            >
                {isOpen ? '✕' : '☰'}
            </button>

            {/* 2. Deine Liste: Auf 'md' (Desktop) immer sichtbar, mobil nur wenn isOpen wahr ist */}
            <ul className={`
                ${isOpen ? 'block' : 'hidden'} 
                md:block 
                max-w-3xs my-5 pr-12 w-64 space-y-4 text-center font-medium 
                text-gray-200 text-lg [&>li:nth-last-child(-n+2)]:text-[#8d1312] [&>li:nth-last-child(2)]:mt-10
                [&>li]:bg-[#8d1312] [&>li:nth-last-child(-n+2)]:bg-orange-100 [&>li]:rounded-sm [&>li]:py-2 [&>li]:shadow-md [&>li]:border [&>li]:border-Black/10
                [&>li]:hover:bg-[#a31a19] [&>li:nth-last-child(-n+2)]:hover:bg-[#fce9c5]
            `}>
                <li>
                    <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
                </li>
                <li>
                    <a href="#beschriftungen" onClick={(e) => { e.preventDefault(); handleNavClick('beschriftungen'); }}>Beschriftungen</a>
                </li>
                <li>
                    <a href="#drucksachen" onClick={(e) => { e.preventDefault(); handleNavClick('drucksachen'); }}>Drucksachen</a>
                </li>
                <li>
                    <a href="#textildruck" onClick={(e) => { e.preventDefault(); handleNavClick('textildruck'); }}>Textildruck</a>
                </li>
                <li>
                    <a href="#digitaldruck" onClick={(e) => { e.preventDefault(); handleNavClick('digitaldruck'); }}>Digitaldruck</a>
                </li>
                <li>
                    <a href="#kontakt" onClick={(e) => { e.preventDefault(); handleNavClick('kontakt'); }}>Kontakt</a>
                </li>
                <li>
                    <a href="#gaestezimmer" onClick={(e) => { e.preventDefault(); handleNavClick('gaestezimmer'); }}>Gästezimmer</a>
                </li>
                <li>
                    <a href="#ferienwohnung" onClick={(e) => { e.preventDefault(); handleNavClick('ferienwohnung'); }}>Ferienwohnung</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
