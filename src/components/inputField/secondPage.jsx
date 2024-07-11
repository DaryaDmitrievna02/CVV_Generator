import { useState } from "react";

function SecondPage({ Input, Education }) {

const [edu, setEdu] = useState();
console.log(Education.education)


function handleAddEducation(){
    Input({...Education,  education: Array.from(new Set([...Education.education, edu])) })
}

  return (
    <>
      <div className="flex flex-col gap-2 text-left">
        <div className="flex flex-col">
          <label>Образование</label>
          <input
            type="text"
            onChange={(e) =>
             setEdu(e.target.value)
            }
          ></input>
    <button onClick={(handleAddEducation)}>Add</button>
        </div>


        <div className="flex flex-col">
          <label>Курсы</label>
          <input
            type="text"
            onChange={(e) =>
             setEdu(e.target.value)
            }
          ></input>
    <button onClick={(handleAddEducation)}>Add</button>
        </div>


        <div className="flex flex-col">
          <label>Опыт</label>
          <input
            type="text"
            onChange={(e) =>
             setEdu(e.target.value)
            }
          ></input>
    <button onClick={(handleAddEducation)}>Add</button>
        </div>
      </div>
    </>
  );
}

export default SecondPage;
