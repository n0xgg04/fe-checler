import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
export default function ThemeProviderCustom({ children }) {
  const theme = useSelector((state) => state.system.theme);
  return (
    <ThemeProvider
      theme={createTheme(require(`../theme/${theme || "default"}`).default)}
    >
      {children}
    </ThemeProvider>
  );
}

//! Theme define ở ./theme nhá .__.
