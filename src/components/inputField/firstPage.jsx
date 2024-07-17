import { useState } from "react";

import "./input.scss";

function FirstPage({ Input, About }) {
  const [selectLanguage, setSelectLanguage] = useState(languages[0]);
  const [selectLevel, setSelectLevel] = useState("A1");

  function handleAdd() {
    Input({
      ...About,
      languages: Array.from(
        new Set([...About.languages, selectLanguage + " " + selectLevel])
      ),
    });
  }

  function handleDelete(e) {
    Input({
      ...About,
      languages: [...About.languages.filter((el) => el != e)],
    });
  }

  return (
    <>
      <div className="flex flex-col gap-2 text-left">
        <div className="flex flex-col">
          <label>Photo</label>
          <input 
            type="file"
            onChange={(e) =>
              Input({ ...About, photo: URL.createObjectURL(e.target.files[0]) })
            }
          ></input>
        </div>
        <div className="flex flex-col">
          <label>Имя</label>
          <input
          maxLength={20}
            required
            type="text"
          
            onChange={(e) => Input({ ...About, firstName: e.target.value })}
          ></input>
        </div>
        <div className="flex flex-col">
          <label>Фамилия</label>
          <input
             maxLength={20}
            required
            type="text"
          
            onChange={(e) => Input({ ...About, lastName: e.target.value })}
          ></input>
        </div>

        <div className="flex flex-col">
          <label>Возраст</label>
          <input
             maxLength={10}
            required
            type="text"
           
            onChange={(e) =>
              Input({
                ...About,
                about: { ...About.about, "Возраст:": e.target.value },
              })
            }
          ></input>
          </div>
          <div className="flex flex-col">
          <label>Город</label>
          <input
             maxLength={20}
            required
            type="text"
          
            onChange={(e) =>
              Input({
                ...About,
                about: { ...About.about, "Город:": e.target.value },
              })
            }
          ></input>
          </div>
          <div className="flex flex-col">
          <label>Адресс</label>
          <input
             maxLength={30}
            required
            type="text"
           
            onChange={(e) =>
              Input({
                ...About,
                about: { ...About.about, "Адресс:": e.target.value },
              })
            }
          ></input>
        </div>

        <div className="flex gap-5 w-full max-sm:flex-wrap">
          <div className="w-full">
            <div className="flex flex-col">
              <label>Телефон</label>
              <input
                required
                maxLength={18}
                type="text"
             
                onChange={(e) =>
                  Input({
                    ...About,
                    contacts: { ...About.contacts, "Тел:": e.target.value },
                  })
                }
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Почта</label>
              <input
                required
                maxLength={30}
                type="text"
               
                onChange={(e) =>
                  Input({
                    ...About,
                    contacts: { ...About.contacts, "Почта:": e.target.value },
                  })
                }
              ></input>

             
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col">
            <label>GitHub</label>
            <input
               maxLength={50}
            required
            type="text"
           
            onChange={(e) =>
              Input({
                ...About,
                contacts: { ...About.contacts, "GitHub:": e.target.value },
              })
            }
          ></input>
            </div>
            {/* <div className="flex flex-col">
            <label>Вторя почта</label>
              <input
                required
                maxLength={30}
                type="text"
                value={About.contacts["Почта:"][1]}
                onChange={(e) =>
                  Input({
                    ...About,
                    contacts: {
                      ...About.contacts,
                      "Почта:": [About.contacts["Почта:"][0], e.target.value],
                    },
                  })
                }
              ></input>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col mt-5 flex-wrap">
          <div className="select">
        <div>
        <label>Языки</label>
            <select
              className="p-1 rounded-[5px]"
              onChange={(e) => setSelectLanguage(e.target.value)}
            >
              {languages.map((el, i) => {
                return <option key={i} value={el}>{el}</option>;
              })}
            </select>
        </div>
   <div>
   <label className="max-lg:mb-2">Уровень</label>
            <select
              className="p-1 rounded-[5px]"
              onChange={(e) => setSelectLevel(e.target.value)}
            >
              {["A1", "A2", "B1", "B2", "C1", "C2"].map((el, i) => {
                return <option key={i} value={el}>{el}</option>;
              })}
            </select>
   </div>

          
            <button className="ml-2" onClick={handleAdd}>
              Добавить
            </button>
          </div>

              <div className="flex flex-wrap my-3">
              {About.languages.map((e, i) => {
            return (
              <>
                <div key={i} className="flex gap-2 m-1.5 px-2 py-1 items-center justify-center bg-gray-700/20 rounded-md">
                  <p key={i}>{e}</p>
                  <button className="bg-transparent shadow-none active:shadow-none active:border-none border-none pb-[1px] p-0 text-gray-800 font-bold" key={e} onClick={() => handleDelete(e)}>
                    x
                  </button>
                </div>
              </>
            );
          })}
              </div>
    
        </div>

        <div>
          <label>Навыки </label>
          <input
          className="w-full"
            required
            type="text"
            value={About.skills}
            onChange={(e) => Input({ ...About, skills: e.target.value })}
          ></input>
        </div>
      </div>
    </>
  );
}

const languages = [
  "Английский язык",
  "Русский язык",
  "Испанский язык",
  "Китайский язык (Мандарин)",
  "Хинди",
  "Арабский язык",
  "Бенгальский язык",
  "Португальский язык",
  "Индонезийский язык",
  "Французский язык",
  "Японский язык",
  "Немецкий язык",
  "Корейский язык",
  "Турецкий язык",
  "Итальянский язык",
  "Польский язык",
  "Украинский язык",
  "Нидерландский язык",
  "Греческий язык",
  "Шведский язык",
];

export default FirstPage;
