import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Logo from './logo/logo'
import Navbar from './layout/Navbar'
import ContentHome from './components/ContentHome'
import ContentBeschriftungen from './components/ContentBeschriftungen'
import ContentDrucksachen from './components/ContentDrucksachen'
import ContentTextildruck from './components/ContentTextildruck'
import ContentDigitaldruck from './components/ContentDigitaldruck'
import Kontakt from './components/Kontakt'
import ContentGaestezimmer from './components/ContentGaestezimmer'
import ContentFerienwohnung from './components/ContentFerienwohnung'
import Footer from './layout/Footer'




createRoot(document.getElementById('root')!).render(
  <div className='max-w-4xl mx-auto px-6 border'>
  <StrictMode>
    <Logo/>
    <Navbar/>
    <ContentHome/>
    <ContentBeschriftungen/>
    <ContentDrucksachen/>
    <ContentTextildruck/>
    <ContentDigitaldruck/>
    <Kontakt/>
    <ContentGaestezimmer/>
    <ContentFerienwohnung/>
    <Footer/>
  </StrictMode>,
  </div>
)
