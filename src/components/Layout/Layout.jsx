import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>

      {children}

      <Footer></Footer>
    </>
  );
};

export default Layout;
