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

      <div className="flex flex-col md:flex-row flex-grow px-6 pb-6 gap-6 md:gap-12 items-start md:items-start">
        <aside className="w-64 flex-shrink-0">
          <Navbar onSelect={(page: string) => setActivePage(page)} />
        </aside>

        <main className="flex-1 bg-white/70 rounded-xl min-h flex flex-col overflow-hidden mr-8 text-center">
          <div className="flex-1 overflow-y-auto p-20 md:p-16 custom-scrollbar">
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