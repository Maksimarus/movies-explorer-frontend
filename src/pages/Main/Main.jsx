import './Main.css';
import Promo from '../../components/Promo/Promo';
import AboutProject from '../../components/AboutProject/AboutProject';
import Techs from '../../components/Techs/Techs';
import AboutMe from '../../components/AboutMe/AboutMe';
import Portfolio from '../../components/Portfolio/Portfolio';
import Layout from '../../components/Layout/Layout';

function Main() {
  return (
    <Layout>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </Layout>
  );
}

export default Main;
