import {useState , useEffect} from "react"
import Background from "./Components/Background/Background/Background";
import Navbar from "./Components/Background/Navbar/navbar";
 import Hero from "./Components/Background/Hero/hero";
const App=()=>{
  let heroData=[
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]
  const[heroCount,setHeroCount]=useState(2);
  const[playStatus,setPlayStatus]=useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000);

  },[])
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar/>
      <Hero 
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
          />

      {/* <button
        onClick={() => {
          setHeroCount((p) => {
            if (p > 1) {
              return 0;
            } else {
              return p + 1;
            }
          });
        }}
      >
        Click me
      </button> */}
    </div>
  );
};

export default App