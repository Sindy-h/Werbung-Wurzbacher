import { useState } from 'react'
import Logo from './logo/logo'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import ContentHome from './components/ContentHome'
import ContentBeschriftungen from './components/ContentBeschriftungen'
import ContentDrucksachen from './components/ContentDrucksachen'
import ContentTextildruck from './components/ContentTextildruck'
import ContentDigitaldruck from './components/ContentDigitaldruck'
import Kontakt from './components/Kontakt'
import ContentGaestezimmer from './components/ContentGaestezimmer'
import ContentFerienwohnung from './components/ContentFerienwohnung'
import backgroundImage from './images/Backgroundimage.jpg'

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className='max-w-screen-2xl mx-auto min-h-screen flex flex-col'
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
      
      <header className="p-6">
        <Logo />
      </header>

      <div className="flex flex-col md:flex-row flex-grow px-6 pb-6 gap-6 md:gap-12 items-center">
        <aside className="w-64 flex-shrink-0">
          <Navbar onSelect={(page: string) => setActivePage(page)} />
        </aside>

        <main className="flex-1 flex justify-center items-center py-10 content-area bg-white/70 rounded-xl">
          <div className="w-full max-w-3xl text-black px-6 md:px-12 leading-relaxed min-h-[500px]">
            {activePage === 'home' && <ContentHome />}
            {activePage === 'beschriftungen' && <ContentBeschriftungen/>}
            {activePage === 'drucksachen' && <ContentDrucksachen/>}
            {activePage === 'textildruck' && <ContentTextildruck/>}
            {activePage === 'digitaldruck' && <ContentDigitaldruck/>}
            {activePage === 'kontakt' && <Kontakt/>}
            {activePage === 'gaestezimmer' && <ContentGaestezimmer/>}
            {activePage === 'ferienwohnung' && <ContentFerienwohnung/>}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;