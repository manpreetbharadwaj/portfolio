import { lazy } from "react";
import "./App.css";

const DateComponent = lazy(() => import("./components/Date"));

const App = () => {
  return (
    <>
     <DateComponent />
    </>
  );
};

export default App;
