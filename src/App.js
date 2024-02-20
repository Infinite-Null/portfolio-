import './App.css';
import AnimatedScreen from './Layouts/AnimatedScreen';
import Home from './Pages/Home';
import {SmoothScroll} from "./Compontents/Global/SmoothScroll";


function App() {

  return (
    <>
      {/*<SmoothScroll/>*/}
    <AnimatedScreen name={"Home"}><Home/></AnimatedScreen>
    </>
  );
}

export default App;
