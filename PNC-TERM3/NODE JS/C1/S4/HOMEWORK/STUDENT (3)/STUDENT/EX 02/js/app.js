const input = document.querySelector('#search');
const searchButton = document.querySelector('#search-this');
const form =document.querySelector('.form-inline');


function displaySearch (event){
    //TODO*
    // Get search parameter from user input

    // Use axios to get data from API
    // Display data on console


}


// This is to make the search with the enter button. And it also avoid the refreshment of the page every time you click on enter key
function enterKeyPressed (event){
    if (event.keyCode === 13) {
        event.preventDefault();
        displaySearch(event);
    }else{}
}


searchButton.addEventListener('click',displaySearch);
form.addEventListener('keydown',enterKeyPressed);

