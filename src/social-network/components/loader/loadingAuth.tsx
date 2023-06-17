"use client";

import LinearProgress from "@mui/material/LinearProgress";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: "#bf0000",
    },
  },
});

const LoadingAuth = () => {
  return (
    <div className="z-20 flex items-center justify-center bg-gray-300 bg-opacity-50 ">
      <ThemeProvider theme={theme}>
        <LinearProgress className="w-52 md:w-64 h-2" />
      </ThemeProvider>
    </div>
  );
};

export default LoadingAuth;
