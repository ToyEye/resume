import "./App.css";
import Aside from "./Components/Aside/Aside";
import WrapperContainer from "./Components/WrapperContainer/WrapperContainer";
import AboutMe from "./Components/AboutMe/AboutMe";

function App() {
  return (
    <WrapperContainer>
      <Aside />
      <AboutMe />
    </WrapperContainer>
  );
}

export default App;
