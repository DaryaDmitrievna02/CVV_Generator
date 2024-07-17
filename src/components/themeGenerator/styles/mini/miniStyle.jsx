import { useContext } from "react";
import { InputContext } from "../../../inputField/inputContext";
import { ThemeContext } from "../../generatorPage";

function MiniStyle() {
  const about = useContext(InputContext).about;

  const theme = useContext(ThemeContext).theme;

  const education = useContext(InputContext).education;

  return (
    <>
      <div className="flex flex-col py-4 h- w-full">
        <div
          className="flex flex-col w-full h-52 justify-center items-center p-6 max-lg:p-2"
          style={{
            backgroundColor: theme.bg,
            color: theme.textWhite,
            borderColor: theme.textWhite,
          }}
        >
          <div
            className="flex gap-2 justify-center text-4xl py-2 mb-5 tracking-wider w-full"
            style={{ borderBottom: `2px solid  ${theme.textWhite}` }}
          >
            <h2 className="font-bold py-2 max-lg:text-lg">{about.firstName}</h2>
            <h2 className="font-bold py-2 max-lg:text-lg">{about.lastName}</h2>
          </div>
          <div className="flex items-center">
            {Object.keys(about.contacts).map((key, index, array) => {
              return about.contacts[key] == "" ? null : (
                <div
                  key={key}
                  className=" px-5 py-5 max-lg:p-2"
                  style={{
                    width: about.contacts[array[2]] == "" ? "50%" : "33%",
                    wordBreak: "break-word",
                    borderRight:
                      index === array.length - 1 ||
                      about.contacts[array[index + 1]] == ""
                        ? "none"
                        : `2px solid  ${theme.textWhite}`,
                  }}
                >
                  {key + " " + about.contacts[key]}
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="flex justify-between h-full  bg-gray-200 w-full"
          style={{ color: theme.textWhite }}
        >
          <div className="p-5 h-full" style={{ color: theme.textReverse }}>
            <div className="Contacts text-left mb-5 ">
              <h2 className="font-extrabold text-2xl p-1 mb-3 max-lg:text-base">
                Образование
              </h2>
              <ul className="list-disc pl-4">
                {education.education.map((el,i) => {
                  return <li key={i} className="break-all ">{el}</li>;
                })}
              </ul>
            </div>

            <div className="Languages text-left mb-5">
              <h2 className="font-extrabold text-2xl p-1 mb-3 max-lg:text-base">
                Курсы
              </h2>
              <ul className="list-disc pl-4">
                {education.courses.map((el, i) => {
                  return <li key={i} className="break-all ">{el}</li>;
                })}
              </ul>
            </div>

            <div className="Attainments text-left mb-5">
              <h2 className="font-extrabold text-2xl p-1 mb-3 max-lg:text-base">
                Опыт
              </h2>
              <ul className="list-disc pl-4">
                {education.experience.map((el, i) => {
                  return <li key={i} className="break-all ">{el}</li>;
                })}
              </ul>
            </div>
          </div>

          <div className="p-5" style={{ backgroundColor: theme.bg80 }}>
            <img
              className="object-cover w-full h-56 max-sm:h-36"
              src={about.photo}
              alt=""
              
            />
            <div className="mt-4 text-left">
              {Object.keys(about.about).map((key, i) => {
                return about.about[key] == "" ? (
                  ""
                ) : (
                  <div key={i} className="break-words">
                    {key + " " + about.about[key]}
                  </div>
                );
              })}
            </div>

            <div className="Languages text-left mb-5 my-5">
              <h2
                className="border-b-2 border-black p-1 mb-3"
                style={{ borderColor: theme.lines }}
              >
                Знание языков
              </h2>
              <ul>
              {about.languages.map((e, index) => {
                return <li key={index}>{e}</li>;
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
        </div>
      </div>
    </>
  );
}

export default MiniStyle;
