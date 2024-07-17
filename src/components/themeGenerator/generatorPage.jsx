import { createContext, useState, useRef } from "react";
import ClassicStyle from "./styles/classic/classicStyle";
import FirstPage from "../inputField/firstPage";
import { InputContext } from "../inputField/inputContext";
import ReactToPrint from "react-to-print";
import SecondPage from "../inputField/secondPage";
import ThemeSwitch from "./themes/themeSwitch";
import StyleSwitch from "./styles/styleSwitch";

export const ThemeContext = createContext();
export const EducationsContext = createContext();




function GeneratorPage() {
  const [theme, setTheme] = useState({
    bg: "#156481",
    bg80: "rgb(3 105 161 / 0.8)",
    textWhite: "rgb(209 213 219 / var(--tw-bg-opacity))",
    lines: "rgb(209 213 219 / var(--tw-bg-opacity))",
    textReverse: "#156481",
  });

  const [page, setPage] = useState(1);

  const [style, setStyle] = useState(<ClassicStyle></ClassicStyle>);

  const [about, setAbout] = useState({
    photo: "./examplePhotos/User.jpg",
    firstName: "Иван",
    lastName: "Иванов",
    about: {
      "Возраст:": "20 лет",
      "Город:": "Минск",
      "Адресс:": "Ул. Ежи гедройца 12",
    },
    contacts: {
      "Тел:": "+375 29 860 17 38",
      "Почта:": ["ivanivanov@gmail.com"],
      "GitHub:": "",
    },
    languages: ["Русский язык C2"],
    skills: "html, js, css, react",
  });

  const [education, setEducation] = useState({
    education: ["sd", "aaa"],
    courses: ["coursera"],
    experience: ["sdfsdsdfsdfsdf"],
  });

  const componentRef = useRef();

  function renderStage(page) {
    switch (page) {
      case 1:
        return (
          <>
            <ThemeSwitch></ThemeSwitch>
            <StyleSwitch></StyleSwitch>

            <div>
     
    </div>
          



          </>
        );
      case 2:
        return (
          <>
            <FirstPage Input={setAbout} About={about}></FirstPage>
          </>
        );

      case 3:
        return (
          <>
            <SecondPage Input={setEducation} Education={education}></SecondPage>
          </>
        );
        case 4:
          return (
            <>
            <div className="flex items-center gap-3">
              <h2>Печать резюме: </h2>
            <ReactToPrint
        trigger={() => <button className="w-18 h-10">Печать</button>}
        content={() => componentRef.current}
      />
            </div>
  
            </>
          )
      default:
        return "error renderStage";
    }
  }

  return (
    <>
      <InputContext.Provider value={{ about, education }}>
        <ThemeContext.Provider value={{ theme, setTheme, style, setStyle }}>
          <div className="flex-auto ">
            <div className="flex px-5 bg-slate-50 h-full w-full justify-between gap-10  max-xl:w-full max-lg:flex-col max-lg:text-xs">
              <div className="py-5 w-full relative">
                <div className="p-2 pb-10">{renderStage(page)}</div>

                <div className="flex justify-between absolute w-full bottom-0 mb-5">
                 {page == 1?  <></>: <button onClick={page < 2 ? false : () => setPage(page - 1)}>
                    Назад
                  </button>}
                 { page==4 ? <></> : <button onClick={page > 3 ? false : () => setPage(page + 1)}>
                   Далее
                  </button>}
                </div>
              </div>

              <div
                ref={componentRef}
                className="w-full h-[1280px] p-5  flex max-lg:w-full max-lg:text-xs max-lg:p-0"
              >
               {style}
              </div>
            </div>
          </div>
        </ThemeContext.Provider>
      </InputContext.Provider>

   


    </>
  );
}

export default GeneratorPage;
