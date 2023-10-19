import "./home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card";
import starbucks from "./assets/imgs/starbucks.png";
import xbox from "./assets/imgs/xbox.svg";
import ebay from "./assets/imgs/ebay.png";
import addidas from "./assets/imgs/addidas.svg";
import Hero from "./components/Hero/Hero";

const Home = () => {
  return (
    <>
      <SearchBar />
      <Hero/>
      <div className="px-6">
        <h2 className="cards__section__heading">Featured Cards</h2>
        <div className="flex justify-between items-center mb-3">
          <Card color={"#FFA800"} source={starbucks} background={"#FAD388"} />
          <Card color={"#2DAB49"} source={xbox} background={"#000"} />
        </div>

        <h2 className="cards__section__heading">Most Seller Cards</h2>
        <div className="flex justify-between items-center mb-8">
          <Card color={"#fff"} source={addidas} background={"#000"} />
          <Card color={"#F9D24A"} source={ebay} background={"#fff"} />
        </div>
      </div>
    </>
  );
};

export default Home;
