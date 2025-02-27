// import { NavHeader } from '@/components/about/nav-header'
import  HeroSection  from '../components/aboutSection/hero-section'
import Footer from '../components/footer/footer'
// import { AboutContent } from '../components/aboutSection/about-content'
import About from '../components/sections/about'
// import { StatsSection } from '@/components/stats-section'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* <NavHeader /> */}
      <HeroSection />
      {/* <AboutContent /> */}
      <About/>
      <Footer />
      {/* <StatsSection /> */}
    </main>
  )
}

