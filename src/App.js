import './App.css';
import Grid from './components/grid'
import Footer from './components/footer'
import Achievements from './components/achievements';
import Headline from './components/headline';
import Worldoffashion from './components/worldoffashion';
import Getstarted from './components/getstarted';
import Logos from './components/logos';
import Stories from './components/stories';
import FooterMini from './components/footermini';
function App() {
  return (
    <div>
      <Getstarted />
      <Logos />
      <Grid />
      <Stories />
      <Achievements />
      <Headline />
      <Worldoffashion />
      <Footer />
      <FooterMini />
    </div>
  );
}
export default App;
