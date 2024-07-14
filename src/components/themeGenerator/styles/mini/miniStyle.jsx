import { useContext } from "react";
import { InputContext } from "../../../inputField/inputContext";
import { ThemeContext } from "../../generatorPage";

function MiniStyle() {

    const about = useContext(InputContext).about;

    const theme = useContext(ThemeContext).theme;

    return (<>
    
<div className="flex flex-col py-4 h- w-full"  >
    <div className="flex flex-col w-full h-52 justify-center items-center p-6" style={{ backgroundColor: theme.bg, color: theme.textWhite, borderColor: theme.textWhite }}>
        <div className="flex gap-2 justify-center text-4xl py-2 mb-5 tracking-wider w-full" style={{ borderBottom: `2px solid  ${theme.textWhite}`}}>
        <h2 className="font-bold py-2">{about.firstName}</h2>
        <h2 className="font-bold py-2">{about.lastName}</h2>
        </div>
        <div className="flex items-center">
        {Object.keys(about.contacts).map((key,index, array) => {

              return about.contacts[key] == "" ? null : (
                <div key={key} className=" px-5 py-5" style={{ 
                    width: about.contacts[array[2]] == "" ? "50%" : "33%",
                    wordBreak: "break-word", 
                    borderRight:index === array.length - 1 || about.contacts[array[index+1]] == "" ? "none" : `2px solid  ${theme.textWhite}`

                  }}>{key + " " + about.contacts[key]}</div>
              );
            })}
        </div>
       
    </div>
    <div className="flex justify-between h-full  bg-gray-200 w-full" style={{  color: theme.textWhite }}>
       <div className="p-5 h-full">
        <div>
          
        </div>
       </div>

       <div className="p-5" style={{backgroundColor:theme.bg80}}>
       <img className="object-cover w-full h-56" src={about.photo} alt="" srcset="" />
       <div className="mt-4 text-left">
       {Object.keys(about.about).map((key) => {
              return about.about[key] == "" ? (
                ""
              ) : (
                <div className="break-words">{key + " " + about.about[key]}</div>
              );
            })}
       </div>
       </div>
    </div>
</div>
    
    </>)

};


export default  MiniStyle;