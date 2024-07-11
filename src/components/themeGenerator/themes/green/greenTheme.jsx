

function GreenTheme({ Theme }) {

  return (
    <>
      <h2>STYLES</h2>

      <button className="w-10 h-10 bg-sky-700" onClick={()=>
    Theme({
      bg: "#156481",
      textWhite: "rgb(209 213 219 / var(--tw-bg-opacity))",
      lines: "rgb(209 213 219 / var(--tw-bg-opacity))",
      textReverse: "#156481",
    })}>
        1
      </button>
      <button className="w-10 h-10 bg-zinc-700" onClick={()=> Theme({
      bg: "rgb(68 64 60 / var(--tw-bg-opacity))",
      textWhite: "rgb(209 213 219 / var(--tw-bg-opacity))",
      lines: "rgb(209 213 219 / var(--tw-bg-opacity))",
      textReverse: "rgb(68 64 60 / var(--tw-bg-opacity))",
    })}>
        2
      </button>
    </>
  );
}

export default GreenTheme;