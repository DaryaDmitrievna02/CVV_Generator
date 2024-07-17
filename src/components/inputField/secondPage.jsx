import { useState } from "react";

function SecondPage({ Input, Education }) {
  const [edu, setEdu] = useState();
  const [course, setCourse] = useState();
  const [experience, setExperience] = useState();

  function handleDeleteEducation(e) {
    Input({
      ...Education,
      education: [...Education.education.filter((el) => el != e)],
    });
  }

  function handleDeleteCourses(e) {
    Input({
      ...Education,
      courses: [...Education.courses.filter((el) => el != e)],
    });
  }

  function handleDeleteExperience(e) {
    Input({
      ...Education,
      experience: [...Education.experience.filter((el) => el != e)],
    });
  }

  function handleAddEducation() {
    Input({
      ...Education,
      education: Array.from(new Set([...Education.education, edu])),
    });
  }

  function handleAddCourses() {
    Input({
      ...Education,
      courses: Array.from(new Set([...Education.courses, course])),
    });
  }

  function handleAddExperience() {
    Input({
      ...Education,
      experience: Array.from(new Set([...Education.experience, experience])),
    });
  }

  return (
    <>
      <div className="flex flex-col gap-2 text-left">
        <div className="flex flex-col">
          <label>Образование</label>
          <input type="text" onChange={(e) => setEdu(e.target.value)}></input>
          <button className="mt-2 mb-2" onClick={handleAddEducation}>
            Добавить
          </button>

          {Education.education.map((el, i) => {
            return (
              <>
                <div className="flex items-center">
                  <li className="break-all " value={el}>{el}</li>
                  <button
                    className="ml-3 bg-transparent shadow-none active:shadow-none active:border-none border-none   text-gray-800 font-bold"
                    key={el}
                    onClick={() => handleDeleteEducation(el)}
                  >
                    x
                  </button>
                </div>
              </>
            );
          })}
        </div>

        <div className="flex flex-col">
          <label>Курсы</label>
          <input
            type="text"
            onChange={(e) => setCourse(e.target.value)}
          ></input>
          <button className="mb-2 mt-2" onClick={handleAddCourses}>
            Добавить
          </button>

          {Education.courses.map((el, i) => {
            return (
              <>
                <div className="flex items-center">
                  <li className="break-all " value={el}>{el}</li>
                  <button
                    className="ml-3 bg-transparent shadow-none active:shadow-none active:border-none border-none   text-gray-800 font-bold"
                    key={el}
                    onClick={() => handleDeleteCourses(el)}
                  >
                    x
                  </button>
                </div>
              </>
            );
          })}
        </div>

        <div className="flex flex-col">
          <label>Опыт</label>
          <input
            type="text"
            onChange={(e) => setExperience(e.target.value)}
          ></input>
          <button className="mt-2 mb-2" onClick={handleAddExperience}>
            Добавить
          </button>

          {Education.experience.map((el, i) => {
            return (
              <>
                <div className="flex items-center">
                  <li className="break-all " value={el}>{el}</li>
                  <button
                    className="ml-3 bg-transparent shadow-none active:shadow-none active:border-none border-none   text-gray-800 font-bold"
                    key={el}
                    onClick={() => handleDeleteExperience(el)}
                  >
                    x
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SecondPage;
