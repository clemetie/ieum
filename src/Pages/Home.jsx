// import Header from "../components/Header";
import Visual from "../components/Visual";
import Info from "../components/Info";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Quick from "../components/Quick";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Visual />
      <Info />
      <main>
        <Main />
      </main>
      <Footer />
      <Quick />
    </div>
  );
};

export default Home;
