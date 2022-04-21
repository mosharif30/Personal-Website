import Button from "../Button/Button";
import Layout from "../Layout/Layout";
import "./About.css";
import laptop from "./laptop.jpg";

const About = () => {
  return (
    <>
      <Layout>
        <div className="about">
          <div className="pic">
            <img className="laptop" src={laptop} alt="" srcset="" />
          </div>
          <div className="text">
            <h1 className="header">I am junior developer</h1>
            <h3 className="header">Bachelor in computer science</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              facere maiores reiciendis quis harum dolores recusandae ea fugit,
              numquam ex voluptatum molestias asperiores quisquam quas hic velit
              voluptas minus ipsum beatae sapiente, distinctio vitae. Voluptate
              odio nesciunt mollitia deserunt? Maiores temporibus perferendis
              laudantium vel illum in tempora dolorum pariatur enim.
            </p>
            <Button>Download Resume</Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
