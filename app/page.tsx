import Hero from './components/sections/hero'
import About from './components/sections/about'
import Products from './components/sections/products'
import ProductTwo from './components/sections/product2'
import Footer from './components/footer/footer'
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <ProductTwo/>
      <Products/>
      <Footer/>
    </main>
  )
}