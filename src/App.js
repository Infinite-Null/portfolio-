import './App.css';
import AnimatedScreen from './Layouts/AnimatedScreen';
import Landing from './Parts/Landing';


function App() {

  return (
    <>
    <AnimatedScreen name={"Home"}><Landing/></AnimatedScreen>
    <div style={{
      height:'100vh',
      backgroundColor:'rgba(20, 20, 20, 1.00)'
    }}></div>
    </>
  );
}

export default App;