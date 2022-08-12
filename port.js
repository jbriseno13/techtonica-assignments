//function makes the contact form section hidden unless the user presses contact me btn


function toggleContactMeBtn(){
    const formArea = document.getElementById("contactform") 
    const contactMe = document.getElementById("contactme") 
        if(contactMe == true){
            formArea.style.display = "block"; 
            }else {
            formArea.style.display = "none"; 
            }
}
toggleContactMeBtn(); 
const contactMe = document.getElementById("contactme") 

contactMe.addEventListener('click', e =>{
    if (formElement.style.display === "none") {
        formElement.style.display = "block";
      } else {
        formElement.style.display = "none";
      }
})


//Console data for contact name: 
const contactName= document.getElementById("contactname"); 

contactName.addEventListener("input", e => {
    const contactDataName = e.target.value; 
    console.log("From: ", contactDataName);
}); 

//Console data for contact email:
const contactEmail= document.getElementById("contactemail"); 

// contactEmail.addEventListener("input", e => {
//     const contactDataEmail = e.target.value; 
//     console.log('Contact Email: ', contactDataEmail);
// }); 

//console data for contact message: 

const contactMessage= document.getElementById("textarea"); 

contactMessage.addEventListener("input", e => {
    const contactMessage = e.target.value; 
    console.log('Email Message: ',contactMessage);
}); 

const formElement = document.getElementById('contactform'); 
formElement.addEventListener('submit', e => {
    console.log(formElement); 
const formData = new FormData(e.target)
const email = formData.get('email');

console.log("User Email: ", email); 

//submit btn refreshes the page by default, we want to stop it. 

e.preventDefault(); 

});




// /.+@.+\..+/ use for email validation 
//iif (mystyring.match(/regex/)) { // matches }

//issues: page refreshes everytime I select a button. 
//isues: input data shows up on console as its typed, not after submit button. 
//add labels to forms 
