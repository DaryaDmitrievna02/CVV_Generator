import { useContext } from "react";
import { InputContext } from "../../../inputField/inputContext";
import { ThemeContext } from "../../generatorPage";

function MiniStyle() {

    const about = useContext(InputContext).about;

    const theme = useContext(ThemeContext).theme;

    return (<>
    
<div className="w-full py-4"  style={{ backgroundColor: theme.bg, color: theme.textWhite }}>
    <div className="flex flex-col w-full h-52 justify-center items-center p-6">
        <div className="flex gap-2 justify-center text-4xl py-2 mb-5 tracking-wider border-b-2 w-full">
        <h2 className="font-bold py-2">{about.firstName}</h2>
        <h2 className="font-bold py-2">{about.lastName}</h2>
        </div>
        <div className="flex items-center">
        {Object.keys(about.contacts).map((key) => {
              return about.contacts[key] == "" ? null : (
                <div key={key} className="border-r-2 px-5 py-5 last:border-none" style={{ wordBreak: "break-word"}}>{key + " " + about.contacts[key]}</div>
              );
            })}
        </div>
       
    </div>
    <div className="flex bg-slate-400">
       <div>
        
       </div>

       <div>
        <p>Mini Style</p>
       </div>
    </div>
</div>
    
    </>)

};


export default  MiniStyle;