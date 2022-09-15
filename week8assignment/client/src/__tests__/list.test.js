import UserForm from '../components/user'; 
import {render, screen, cleanup} from '@testing-library/react'; 

afterEach(() => {
    cleanup(); 
}); 

test(' start button should render when userform is loaded', () =>{
    render(<UserForm/>)
    const userFormElement = screen.getElementsByClassName("ListMain"); 
    expect(userFormElement.length).toBe(1)
})

//expecting the btn to be in the document