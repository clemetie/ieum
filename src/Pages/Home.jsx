import Header from "../components/Header";
import Visual from "../components/Visual";
import Info from "../components/Info";
import Leftnav from "../components/Leftnav";
import Project from "../components/Project";
import Certificate from "../components/Certificate";
import Skill from "../components/Skill";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Visual />
      <Info />
      <main>
        <Leftnav />
        <section id="project">
          <Project />
        </section>

        <section id="certificate">
          <Certificate />
        </section>

        <section id="skills">
          <Skill />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
