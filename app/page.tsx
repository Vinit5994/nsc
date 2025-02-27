import Hero from './components/sections/hero'
import About from './components/sections/about'
// import Products from './components/sections/products'
// import ProductTwo from './components/sections/product2'
import Footer from './components/footer/footer'
import WhySteelSection from './components/why-naresh-steel/why-steel-section'
// import { materials } from './productContent.json'
import { materials } from './homeProductContent.json'
import AlternatingProducts from './components/sections/AlternatingProducts'
export default function Home() {
  const oddProducts = materials.filter((_, index) => index % 2 === 0);
  const evenProducts = materials.filter((_, index) => index % 2 === 1);
  return (
    <main>
      <Hero />
      <About />
      {/* <Products products={oddProducts} />
      <ProductTwo products={evenProducts}/> */}
      <AlternatingProducts oddProducts={oddProducts} evenProducts={evenProducts} />
      {/* <Products/> */}
      <WhySteelSection/>
      <Footer/>
    </main>
  )
}