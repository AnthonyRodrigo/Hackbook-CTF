"use client";

import LinearProgress from "@mui/material/LinearProgress";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#bf0000",
    },
  },
});

const Loading = () => {
  return (
    <div className="fixed z-20 inset-x-0 top-0  flex  items-center justify-center">
      <ThemeProvider theme={theme}>
        <LinearProgress className="w-full h-2" />
      </ThemeProvider>
    </div>
  );
};

export default Loading;
