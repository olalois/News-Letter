// Get the email input and submit button elements using querySelector
const emailInput = document.querySelector('.email_input');
const submitBtn = document.querySelector('.submit_btn');

// Add an event listener to the email input to listen for focus event
emailInput.addEventListener('click', function() {
    // Change the background color of the submit button when the email input is focused
    submitBtn.style.backgroundImage = 'linear-gradient(to right, rgb(248, 63, 94), rgb(252, 120, 59))';
    //'#FF0000'; // Example color
});

// Optional: Add an event listener to revert the background color when the email input loses focus
emailInput.addEventListener('blur', function() {
    // Revert the background color of the submit button
    submitBtn.style.backgroundImage = ''; // Removes the inline style, reverting to original CSS
});
const cont = document.querySelector('.container')
const click = document.querySelector('.onclick')
const Return = document.querySelector('.abeg')
 submitBtn.addEventListener('click', function(){
    cont.style.display = 'none'
    click.style.display = 'flex'
 })
 Return.addEventListener('click', function(){
    cont.style.display = 'flex'
    click.style.display = 'none'
 })