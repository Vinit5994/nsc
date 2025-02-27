import ProductDetails from "@/app/components/specificProduct/productDetail";
import ProductPage from "../../components/specificProduct/productPage";
// import QuoteForm from "@/app/components/specificProduct/QuoteForm";
import Footer from "@/app/components/footer/footer";

export default function Page() {
  return<>
  <ProductPage />
  <ProductDetails />
  {/* <QuoteForm/> */}
  <Footer/>
  </> 

}
