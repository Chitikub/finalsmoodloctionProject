import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Guide from "../pages/Guide";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guide" element={<Guide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
