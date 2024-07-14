import { ThemeContext } from "../../generatorPage";
import { useContext, useState } from "react";

function GreenTheme() {
  const setTheme = useContext(ThemeContext).setTheme;

  return (
    <>
         <button
        className="w-10 h-10 bg-teal-700"
        onClick={() =>
          setTheme({
            bg: "rgb(15 118 110 / var(--tw-bg-opacity))",
            textWhite: "rgb(209 213 219 / var(--tw-bg-opacity))",
            lines: "rgb(209 213 219 / var(--tw-bg-opacity))",
            textReverse: "rgb(15 118 110 / var(--tw-bg-opacity))",
          })
        }
      >
        {" "}
      </button>
    </>
  );
}

export default GreenTheme;