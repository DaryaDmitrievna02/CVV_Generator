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
    textWhite: "rgb(209 213 219 / var(--tw-bg-opacity))",
    lines: "rgb(209 213 219 / var(--tw-bg-opacity))",
    textReverse: "#156481",
  });

  const [page, setPage] = useState(1);

  const [style, setStyle] = useState(1);

  const [about, setAbout] = useState({
    photo: "../examplePhotos/User.jpg",
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
                  <button onClick={page < 2 ? false : () => setPage(page - 1)}>
                    prev
                  </button>
                  <button onClick={page > 4 ? false : () => setPage(page + 1)}>
                    next
                  </button>
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

      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />

      <div className="h-10">footer</div>
    </>
  );
}

export default GeneratorPage;
