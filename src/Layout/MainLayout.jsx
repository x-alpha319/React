import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
