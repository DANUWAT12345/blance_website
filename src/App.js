import './App.css';
import BasicExample from './homepage/nav.js'
import IndividualIntervalsExample from './homepage/carousels.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingAbout from './homepage/landingAbout.js'
import FluidExample from './homepage/landingImage.js'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Footer from './homepage/footer.js'
import Afterlanding from './homepage/Afterlanding.js';
import GroupExample from './homepage/Homepage_card.js';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs">
      <div className="App">
        <BasicExample />
        <IndividualIntervalsExample />
        <LandingAbout/>
        <FluidExample/>
        <Afterlanding/>
        <GroupExample/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
