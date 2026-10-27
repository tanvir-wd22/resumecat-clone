import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Header />
      {/* No container here: every page section owns its own width */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;