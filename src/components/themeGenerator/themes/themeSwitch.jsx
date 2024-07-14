import DarkTheme from "./dark/darkTheme";
import BlueTheme from "./blue/blueTheme";
import GreenTheme from "./green/greenTheme";

function ThemeSwitch() {
  return (
    <>
    <div className="flex flex-col items-start mb-5"> 
    <h2 className="mb-5 font-bold text-gray-600">THEME</h2>
    <div className="flex gap-5">
    <DarkTheme></DarkTheme>
    <BlueTheme></BlueTheme>
    <GreenTheme></GreenTheme>
    </div>
 
    </div>
  
    </>
  );
}

export default ThemeSwitch;
