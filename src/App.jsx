
// import StyledButton,{FancyButton} from "./components/Button/Button"
import {StyledButton, FancyButton, SubmitButton } from "./components/Button/Button.styles"

const App = () => {
  return (
    <div>
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