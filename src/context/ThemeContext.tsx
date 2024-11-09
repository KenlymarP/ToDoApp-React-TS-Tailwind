import { createContext, useState, useContext, useEffect } from "react";
interface ThemeContextType {
  isDark: boolean;
  ChangeTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const ThemeContextProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const ChangeTheme = (): void => {
    setIsDark((prev) => !prev);
  };

  // Efecto para agregar o quitar la clase 'dark' al HTML
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      if (isDark) {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        ChangeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
export { ThemeContext, ThemeContextProvider, useTheme };
