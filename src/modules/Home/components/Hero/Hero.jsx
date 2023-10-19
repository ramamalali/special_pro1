import "./hero.css";
import heroImage from "./../../assets/imgs/heroImage.png";
import star from "./../../assets/imgs/star.svg";
import smallCircle from "./../../assets/imgs/circleSmall.svg";
import bigCircle from "./../../assets/imgs/circleBig.svg";
import twoCircles from "./../../assets/imgs/twoCircles.svg";

const Hero = () => {
  return (
    <div className="px-6">
      <div className="relative my-10">
        <img src={heroImage} alt="" className="pt-4 pb-6"/>
        <img src={bigCircle} alt="" className="absolute top-0 left-1/2" />
        <img src={twoCircles} alt="" className="absolute top-0 left-side" />
        <img src={bigCircle} alt="" className="absolute bottom-10 left-8" />
        <img src={bigCircle} alt="" className="absolute bottom-4 left-1/2" />
        <img src={smallCircle} alt="" className="absolute bottom-0 left-side" />

      </div>
      <div className="flex justify-start items-center">
        <h1 className="hero__heading pb-3 text-lg font-bold mr-2">
          World Of <span className="hero__heading-focus">Smart</span> Cards
        </h1>
        <div className="flex items-center h-8">
          <img src={star} alt="" />
          <img src={star} alt="" className="self-start" />
        </div>
      </div>
      <p className="text-white text-base font-semibold">
        Life is like a game of cards , so let yourself enjoy winning!
        <br /> Also we offer awesome graphic and web design services.
      </p>
    </div>
  );
};

export default Hero;
