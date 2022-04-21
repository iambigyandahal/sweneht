import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="lg:container lg:mx-auto lg:w-[50%]">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App