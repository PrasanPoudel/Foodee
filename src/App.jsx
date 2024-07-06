import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import CustomRoutes from "./components/CustomRoutes";
import Menu from "./pages/Menu"
import SingleFoodItem from "./components/SingleFoodItem";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Menu" element={<Menu/>} />
        <Route exact path="/SingleFoodItem/:name" element={<SingleFoodItem/>} />
        <Route
        exact
          path="/success"
          element={<CustomRoutes element={<Success/>} />}
        />
        <Route exact path="/*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
