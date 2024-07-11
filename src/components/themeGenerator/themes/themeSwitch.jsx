import DarkTheme from "./dark/darkTheme";
import BlueTheme from "./blue/blueTheme";

function ThemeSwitch() {
  return (
    <>
    <div className="flex flex-col items-start"> 
    <h2 className="mb-5 font-bold text-gray-600">STYLES</h2>
    <div className="flex gap-5">
    <DarkTheme></DarkTheme>
    <BlueTheme></BlueTheme>
    </div>
 
    </div>
  
    </>
  );
}

export default ThemeSwitch;
