
// import StyledButton,{FancyButton} from "./components/Button/Button"
import {StyledButton, FancyButton, SubmitButton, AnimatedLogo } from "./components/Button/Button.styles"
import logo from "./assets/react.svg";
import './App.css';
import './styles.css';

const App = () => {
  return (
    <div>
      {/* <img 
      src={logo}
      className="App-logo"
       alt="" /> */}
       <AnimatedLogo src={logo}/>
     <StyledButton type="submit">Button</StyledButton>
     <div>
      <br/>
     </div>
     <StyledButton variant="outline">Button</StyledButton>
     <div>
      <br />
     </div>
     <FancyButton as="a">FancyButton</FancyButton>
     <div>
      <br />
     </div>
     <SubmitButton>Submit Button</SubmitButton>
    </div>
  )
}

export default App