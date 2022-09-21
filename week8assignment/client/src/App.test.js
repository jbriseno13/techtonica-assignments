//import UserForm from '../components/user'; 
import {render} from '@testing-library/react'; 
import App from "./App"; 


describe("App", () => {
  test("render the App component", () => {
    render(<App />);
  });
});


//expecting the btn to be in the document