
// import StyledButton,{FancyButton} from "./components/Button/Button"
import {StyledButton, FancyButton } from "./components/Button/Button.styles"

const App = () => {
  return (
    <div>
     <StyledButton>Button</StyledButton>
     <div>
      <br/>
     </div>
     <StyledButton variant="outline">Button</StyledButton>
     <div>
      <br />
     </div>
     <FancyButton as="a">FancyButton</FancyButton>
    </div>
  )
}

export default App