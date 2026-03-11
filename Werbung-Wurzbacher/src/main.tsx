import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Logo from './logo/logo'
import Navbar from './components/Navbar'
import ContentHome from './components/ContentHome'
import ContentBeschriftungen from './components/ContentBeschriftungen'
import ContentDrucksachen from './components/ContentDrucksachen'
import ContentTextildruck from './components/ContentTextildruck'
import ContentDigitaldruck from './components/ContentDigitaldruck'
import Kontakt from './components/Kontakt'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Logo/>
    <Navbar/>
    <ContentHome/>
    <ContentBeschriftungen/>
    <ContentDrucksachen/>
    <ContentTextildruck/>
    <ContentDigitaldruck/>
    <Kontakt/>
  </StrictMode>,
)
