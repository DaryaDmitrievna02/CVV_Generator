import { useContext, } from "react";
import { ThemeContext } from "../../generatorPage";
import { InputContext } from "../../../inputField/inputContext";
import ReactToPrint from 'react-to-print';

function ClassicStyle() {
   
const theme = useContext(ThemeContext);

const about = useContext(InputContext);


  return (
    <>

        <div className="about bg-emerald-500 p-5 w-1/3 break-words" style={{backgroundColor: theme.bg, color: theme.textWhite}}>
          <div className="">
            <img className="object-cover w-full h-56 " src={about.photo} alt="" />
          </div>

            <div className="Name w-full my-2 text-left break-words flex flex-col">
                <div className="flex gap-2 p-1 border-b-2 mb-3" style={{borderColor: theme.lines}}>
                <p className="font-bold">{about.firstName}</p>
                <p className="font-bold">{about.lastName}</p>
                </div>
       
                <div>
                    {about.about}
                    </div>
                    </div>
            <div className="Contacts text-left mb-5 break-words">
                <h2 className="border-b-2 border-black p-1 mb-3" style={{borderColor: theme.lines}}> Контакты</h2>
                <ul>
                    <li>Телефон: {about.contacts.tel}</li>
                    <li>Почта: {about.contacts.mail}</li>
                    <li>Телефон +375 29 843 12 21</li>
                    <li>Телефон +375 29 843 12 21</li>
                </ul>
            </div>

            <div className="Languages text-left mb-5">
                <h2 className="border-b-2 border-black p-1 mb-3" style={{borderColor: theme.lines}}>Знание языков</h2>
                <ul>
                  {about.languages.map(e=>{
                    return (<li>{e}</li>)
                  })}
                </ul>
            </div>

            <div className="Attainments text-left mb-5">
                <h2 className="border-b-2 border-black p-1 mb-3" style={{borderColor: theme.lines}}>Навыки</h2>
                <ul>
                    <li>Телефон +375 29 843 12 21</li>
                    <li>Телефон +375 29 843 12 21</li>
                    <li>Телефон +375 29 843 12 21</li>
                    <li>Телефон +375 29 843 12 21</li>
                </ul>
            </div>
        </div>
        <div className="skills bg-gray-300 p-5 w-2/3" style={{ color: theme.textReverse}}>


        <div className="Contacts text-left mb-5 " >
                <h2 className="font-extrabold text-2xl p-1 mb-3"> Контакты</h2>
                <ul>
                    <li>Телефон +375 29 843 12 21</li>
                    <li>Телефон +375 29 843 12 21</li>
                    <li>Телефон +375 29 843 12 21</li>
                    <li>Телефон +375 29 843 12 21</li>
                </ul>
            </div>

            <div className="Languages text-left mb-5">
                <h2 className="font-extrabold text-2xl p-1 mb-3">Знание языков</h2>
                <ul>
                    <li>Телефон +375 29 843 12 21</li>
                    <li>Телефон +375 29 843 12 21</li>
                    <li>Телефон +375 29 843 12 21</li>
                    <li>Телефон +375 29 843 12 21</li>
                </ul>
            </div>

            <div className="Attainments text-left mb-5">
                <h2 className="font-extrabold text-2xl p-1 mb-3">Навыки</h2>
                <ul>
                    <li>Телефон +375 29 843 12 21</li>
                    <li>Телефон +375 29 843 12 21</li>
                    <li>Телефон +375 29 843 12 21</li>
                    <li>Телефон +375 29 843 12 21</li>
                </ul>
            </div>
        </div>




 
    </>
  );
}

export default ClassicStyle;
