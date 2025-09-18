import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Router from "./routs/Routes";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Router />
      </Box>
    </BrowserRouter>
  );
}

export default App;
