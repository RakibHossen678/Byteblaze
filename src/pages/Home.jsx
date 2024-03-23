import Hero from "../Components/Hero";
import wave from '../assets/wave.svg'
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
      <Hero></Hero>
      <img className="absolute bottom-[52px] left-0 w-full" src={wave} alt="" />
    </div>
  );
};

export default Home;
