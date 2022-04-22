import Layout from "../Layout/Layout";
import PortfolioItem from "../portfolioItem/portfolioItem";
import todoapppic from "./todoapp.png";
const Portfolio = () => {
  return (
    <>
      <Layout>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <PortfolioItem
            deployedLink={"https://todoapp-ten-delta.vercel.app/"}
            title={"To Do App1"}
            picsrc={todoapppic}
          ></PortfolioItem>
          <PortfolioItem
            title={"To Do App2"}
            picsrc={todoapppic}
          ></PortfolioItem>
          <PortfolioItem
            title={"To Do App3"}
            picsrc={todoapppic}
          ></PortfolioItem>
          <PortfolioItem
            title={"To Do App4"}
            picsrc={todoapppic}
          ></PortfolioItem>
        </div>
      </Layout>
    </>
  );
};

export default Portfolio;
