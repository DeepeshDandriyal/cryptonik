import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "tss-react/mui";

function App() {
  const useStyles = makeStyles()(() => {
    return {
      App: {
        backgroundColor: "#4F4557",
        color: "white",
        minHeight: "100vh",
      },
    };
  });
  const { classes } = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" Component={Homepage} />
        </Routes>
        <Routes>
          <Route path="/coins/:id" Component={CoinPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
