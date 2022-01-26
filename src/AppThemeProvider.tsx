import { createTheme, ThemeProvider } from "@mui/material/styles";

const AppThemeProvider: React.FC = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#136acd",
      },
      secondary: {
        main: "#262525",
      },
      success: {
        main: "#0BAC30",
      },
      error: {
        main: "#B20000",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            fontWeight: "bold",
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
