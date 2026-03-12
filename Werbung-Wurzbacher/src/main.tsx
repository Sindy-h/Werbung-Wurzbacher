import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
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

const App = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className='max-w-screen-2xl mx-auto px-6 py-10 min-h-screen bg-gray-200'>
      <header className="p-6">
        <Logo />
      </header>

      <div className="flex px-6 pb-6 gap-12 items-start">

        <aside className="w-64 flex-shrink-0">
          <Navbar onSelect={(page:string) => setActivePage(page)} />
        </aside>

        <main className="flex-1 flex justify-center pt-5">
            <div className="w-full max-w-3xl bg-white text-black p-12 rounded-xl shadow-xl leading-relaxed min-h-[500px]">
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
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)