import { useContext } from "react";
import { ThemeContext } from "../../generatorPage";
import { InputContext } from "../../../inputField/inputContext";
import { EducationsContext } from "../../generatorPage";

function ClassicStyle() {
  const theme = useContext(ThemeContext).theme;

  const about = useContext(InputContext).about;

  const education = useContext(InputContext).education;

  

  return (
    <>
      <div
        className="about bg-emerald-500 p-5 w-1/3 break-words"
        style={{ backgroundColor: theme.bg, color: theme.textWhite }}
      >
        <div className="">
          <img className="object-cover w-full h-56 max-sm:h-36" src={about.photo} alt="" />
        </div>

        <div className="Name w-full my-2 text-left break-words flex flex-col">
          <div
            className="flex gap-2 p-1 border-b-2 mb-3 flex-wrap"
            style={{ borderColor: theme.lines }}
          >
            <h2 className="font-bold">{about.firstName}</h2>
            <h2 className="font-bold">{about.lastName}</h2>
          </div>

          <div>
            {Object.keys(about.about).map((key) => {
              return about.about[key] == "" ? (
                ""
              ) : (
                <div key={key} className="break-words">{key + " " + about.about[key]}</div>
              );
            })}
          </div>
        </div>
        <div className="Contacts text-left mb-5 break-words">
          <h2
            className="border-b-2 border-black p-1 mb-3"
            style={{ borderColor: theme.lines }}
          >
            {" "}
            Контакты
          </h2>
          <ul>
            {Object.keys(about.contacts).map((key) => {
              return about.contacts[key] == "" ? null : (
                <div key={key} className="break-words">{key + " " + about.contacts[key]}</div>
              );
            })}
          </ul>
        </div>

        <div className="Languages text-left mb-5">
          <h2
            className="border-b-2 border-black p-1 mb-3"
            style={{ borderColor: theme.lines }}
          >
            Знание языков
          </h2>
          <ul>
            {about.languages.map((language, index) => {
              return <li key={index}>{language}</li>;
            })}
          </ul>

        </div>

        <div className="Attainments text-left mb-5">
          <h2
            className="border-b-2 border-black p-1 mb-3 "
            style={{ borderColor: theme.lines }}
          >
            Навыки
          </h2>
          <p>{about.skills}</p>
        </div>
      </div>
      <div
        className="skills bg-gray-300 p-5 w-2/3"
        style={{ color: theme.textReverse }}
      >
        <div className="Contacts text-left mb-5 ">
          <h2 className="font-extrabold text-2xl p-1 mb-3 max-lg:text-base">
            Образование
          </h2>
          <ul className="list-disc pl-4">
            {education.education.map((educationItem, index) => {
              return <li key={index}>{educationItem}</li>;
            })}
          </ul>

        </div>

        <div className="Languages text-left mb-5">
          <h2 className="font-extrabold text-2xl p-1 mb-3 max-lg:text-base">
            Курсы
          </h2>
          <ul className="list-disc pl-4">
            {education.courses.map((course, index) => {
              return <li key={index}>{course}</li>;
            })}
          </ul>
        </div>

        <div className="Attainments text-left mb-5">
          <h2 className="font-extrabold text-2xl p-1 mb-3 max-lg:text-base">
           Опыт
          </h2>
          <ul className="list-disc pl-4">
            {education.experience.map((experienceItem, index) => {
              return <li key={index}>{experienceItem}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ClassicStyle;
