import { useState } from "react";

import './input.css'

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
          <label>Name</label>
          <input
            required
            type="text"
            value={About.firstName}
            onChange={(e) => Input({ ...About, firstName: e.target.value })}
          ></input>
        </div>
        <div className="flex flex-col">
          <label>Last Name</label>
          <input
            required
            type="text"
            value={About.lastName}
            onChange={(e) => Input({ ...About, lastName: e.target.value })}
          ></input>
        </div>

        <div className="flex flex-col">
          <label>About</label>
          <input
            required
            type="text"
            value={About.about}
            onChange={(e) => Input({ ...About, about: e.target.value })}
          ></input>
        </div>

        <div className="flex gap-5 w-full">
          <div className="w-full">
            <div className="flex flex-col">
              <label>tel</label>
              <input
                required
                type="text"
                value={About.contacts.tel}
                onChange={(e) =>
                  Input({
                    ...About,
                    contacts: {
                      tel: e.target.value,
                      mail: About.contacts.mail,
                    },
                  })
                }
              ></input>
            </div>
            <div className="flex flex-col">
              <label>mail</label>
              <input
                required
                type="text"
                value={About.contacts.mail}
                onChange={(e) =>
                  Input({
                    ...About,
                    contacts: { mail: e.target.value, tel: About.contacts.tel },
                  })
                }
              ></input>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col">
              <label>tel</label>
              <input
                required
                type="text"
                value={About.contacts.tel}
                onChange={(e) =>
                  Input({
                    ...About,
                    contacts: {
                      tel: e.target.value,
                      mail: About.contacts.mail,
                    },
                  })
                }
              ></input>
            </div>
            <div className="flex flex-col">
              <label>mail</label>
              <input
                required
                type="text"
                value={About.contacts.mail}
                onChange={(e) =>
                  Input({
                    ...About,
                    contacts: { mail: e.target.value, tel: About.contacts.tel },
                  })
                }
              ></input>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5">
          <div>
            <label>Languages</label>
            <select className="p-1 rounded-[5px]" onChange={(e) => setSelectLanguage(e.target.value)}>
              {languages.map((el, i) => {
                return <option  value={el}>{el}</option>;
              })}
            </select>

            <label>LVL</label>
            <select className="p-1 rounded-[5px]" onChange={(e) => setSelectLevel(e.target.value)}>
              {["A1", "A2", "B1", "B2", "C1", "C2"].map((el, i) => {
                return <option value={el}>{el}</option>;
              })}
            </select>
            <button className="ml-2" onClick={handleAdd}>Add</button>
          </div>
      
          {About.languages.map((e, i) => {
            return (
              <>
                <div className="flex gap-2 p-2">
                  <div key={i}>{e}</div>
                  <button key={e} onClick={() => handleDelete(e)}>
                    delete
                  </button>
                </div>
              </>
            );
          })}

          
        </div>

<div>
<label>Skills </label>
<input
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
