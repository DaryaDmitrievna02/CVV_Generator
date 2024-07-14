import { useContext } from "react";
import { ThemeContext } from "../../generatorPage";

function BlueTheme() {


  const setTheme = useContext(ThemeContext).setTheme;

  return (
    <>
      <button
        className="w-10 h-10 bg-sky-700"
        onClick={() =>
          setTheme({
            bg: "#156481",
            textWhite: "rgb(209 213 219 / var(--tw-bg-opacity))",
            lines: "rgb(209 213 219 / var(--tw-bg-opacity))",
            textReverse: "#156481",
          })
        }
      ></button>
    </>
  );
}

export default BlueTheme;
