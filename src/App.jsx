
// import StyledButton,{FancyButton} from "./components/Button/Button"
import { ThemeProvider } from "styled-components";
import {StyledButton, FancyButton, SubmitButton, AnimatedLogo,DarkButton } from "./components/Button/Button.styles"
import logo from "./assets/react.svg";
import './App.css';
import './styles.css';
const theme ={
  dark:{
    primary:"#000",
    text:"#fff",
  },
  light:{
    primary:"#fff",
    text:"#000"
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
     <div>
      <br />
     </div>
     <DarkButton>Dark Theme</DarkButton>
    </div>
    </ThemeProvider>
  )
}

export default App