import { createContext, useState, useRef } from "react";
import DarkTheme from "./themes/dark/darkTheme";
import ClassicStyle from "./styles/classic/classicStyle";
import FirstPage from "../inputField/firstPage";
import { InputContext } from "../inputField/inputContext";
import ReactToPrint from 'react-to-print';

export const ThemeContext = createContext();

function GeneratorPage() {
  const [theme, setTheme] = useState({
    bg: "#156481",
    textWhite: "rgb(209 213 219 / var(--tw-bg-opacity))",
    lines: "rgb(209 213 219 / var(--tw-bg-opacity))",
    textReverse: "#156481",
  });

  const [page, setPage] = useState(1);

  const [style, setStyle] = useState(1);

  const [about, setAbout] = useState({
    photo:"../examplePhotos/User.jpg",
    firstName:"Иван",
    lastName: "Иванов",
    about: "О себе",
    contacts: {
        tel: "+375 29 860 17 38", 
        mail: "ivanivanov@gmail.com"
    },
    languages:["Русский язык C2"],
    skills: "html, js, css, react"
  })

const componentRef = useRef()

console.log(about)

  function renderSwitch(style) {
    switch (style) {
      case 1:
        return (
          <>
            <ClassicStyle ref={componentRef}></ClassicStyle>
          </>
        );
      default:
        return "error renderSwitch";
    }
  }

  function renderStage(page) {
    switch (page) {
      case 1:
        return (
          <>
            <DarkTheme Theme={setTheme}></DarkTheme>
          </>
        );
        case 2: 
        return(
            <>
            <FirstPage Input={setAbout} About={about}></FirstPage>
            </>
        )
      default:
        return "error renderStage";
    }
  }

  return (
    <>
    <InputContext.Provider value={about}>
    <div className="flex-auto ">
        <div className="flex px-5 bg-slate-500 h-full w-full justify-between">
          <div className="py-5">

            {renderStage(page)}

            <div className="flex justify-between">
              <button
                onClick={page < 2 ? false : () => setPage(page - 1)}
                className="bg-slate-300 p-2 border-2 border-black"
              >
                prev
              </button>
              <button
                onClick={page > 4 ? false : () => setPage(page + 1)}
                className="bg-slate-300 p-2 border-2 border-black"
              >
                next
              </button>
            </div>
          </div>

          <div className="w-1/2 py-5 flex">
            <ThemeContext.Provider value={theme}>
              {renderSwitch(style)}
            </ThemeContext.Provider>
          </div>
        </div>
      </div>
    </InputContext.Provider>
   
 

    <ReactToPrint
    
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />


      <div className="h-10">footer</div>
    </>
  );
}

export default GeneratorPage;
