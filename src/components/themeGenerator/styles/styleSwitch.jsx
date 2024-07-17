import { useContext } from "react";
import ClassicStyle from "./classic/classicStyle";
import { ThemeContext } from "../generatorPage";

import MiniStyle from "./mini/miniStyle";

function StyleSwitch() {
  const setStyle = useContext(ThemeContext).setStyle;

  return (
    <>
    <div className="flex flex-col items-start"> 
    <h2 className="mb-5 font-bold text-gray-600">Стиль:</h2>
      <div className="flex gap-5">
        <button
          className="w-10 h-10 bg-gray-800 text-white font-bold"
          onClick={() => setStyle(<ClassicStyle></ClassicStyle>)}
        >С</button>

        <button
          className="w-10 h-10 bg-gray-800 text-white font-bold"
          onClick={() => setStyle(<MiniStyle></MiniStyle>)}
        >M</button>


      </div>
      </div>
    </>

   
  );
}

export default StyleSwitch;
