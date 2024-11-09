import { useTheme } from "../context/ThemeContext";
import iconSun from "../assets/icon-sun.svg";
import iconMoon from "../assets/icon-moon.svg";
const Header = (): JSX.Element => {
  const { isDark, ChangeTheme } = useTheme();
  return (
    <>
      <header className="my-12 flex h-5 flex-wrap justify-between px-4 md:py-5">
        <h1 className="tracking-[.5em] uppercase text-4xl text-white font-bold ">
          ToDo
        </h1>
        <button onClick={ChangeTheme}>
          <img src={isDark ? iconSun : iconMoon} alt="" />
        </button>
      </header>
    </>
  );
};
export { Header };
