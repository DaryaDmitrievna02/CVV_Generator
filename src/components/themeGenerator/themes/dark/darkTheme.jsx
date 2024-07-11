import { useContext, useState } from "react";
import { ThemeContext } from "../../generatorPage";

function DarkTheme() {
  const setTheme = useContext(ThemeContext).setTheme;

  return (
    <>
      <button
        className="w-10 h-10 bg-zinc-700"
        onClick={() =>
          setTheme({
            bg: "rgb(68 64 60 / var(--tw-bg-opacity))",
            textWhite: "rgb(209 213 219 / var(--tw-bg-opacity))",
            lines: "rgb(209 213 219 / var(--tw-bg-opacity))",
            textReverse: "rgb(68 64 60 / var(--tw-bg-opacity))",
          })
        }
      >
        {" "}
      </button>
    </>
  );
}

export default DarkTheme;
