////*****JS file for Library App*****////




//Click yes or no button in book info form and the corresponding element background color
//will be red for no and green for yes if read yet.
const yesButton = document.querySelectorAll('.yesButton');
const noButton = document.querySelectorAll('.noButton');
 

yesButton.forEach(function(elem) {elem.addEventListener('click',
function(input){

    input.target.style.backgroundColor = 'rgb(105, 198, 145)';
    input.target.nextElementSibling.style.backgroundColor = 'rgb(170, 172, 179)'; 
})

})


noButton.forEach(function(elem){elem.addEventListener('click',

function(input){

    input.target.style.backgroundColor = 'rgb(227, 149, 110)';
    input.target.previousElementSibling.style.backgroundColor = 'rgb(170, 172, 179)'; 
})

})

//Add book button makes popup form occur

const addBookFormSection = document.querySelector('.addBookForm');

const addBookButton = document.querySelector('.addBookButton') ;//button to add book makes popup happen

addBookButton.addEventListener('click', function (input){
addBookFormSection.style.display = 'block';   //show book form, make it non hidden


})

const cancelButton = document.querySelector('.exitAddBookForm')  //get the reference to the exit add book form button

cancelButton.addEventListener('click',

function(){
    addBookFormSection.style.display = 'None';
    document.querySelector(".bookAddFormInput").reset();  ///Resets the form inout when cancel button is pressed.
})



const testBook1 = Book('The Trickster and the Paranormal','George P. Hansen', 564) ;//test book objects for displaying 
const testBook2 = Book('Authors of the Impossible','Dr. Jeffrey Kripal',332)  ;     //new books in the card section
const testBopok3 = Book('American Cosmic, Dr. Diana Pasulka', 288);


let myBooksArray = [] //array for storing Book objects

function Book(title,author,pages,readYet,rating) {  //Book object

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
    this.rating = rating;
    //constructor
}



  //add book constructor below button in header fires the add book funciton below which creates a javascript object and
  //will then fill in the details of a new html card. 


const addBookConstructorButton =  document.querySelector('.addBookConstructorButton')

addBookConstructorButton.addEventListener('click', function addBook(event) { //funciton tha takes input form bookaddinput form and creates an 
    //...new book constructor that can then be placed into array for later display.
event.preventDefault()
let bookTitle = document.querySelector(".bookTitleInput").value;
let bookAuthor = document.querySelector(".bookAuthorInput").value;
let bookPages = document.querySelector(".bookPagesInput").value;
let readYet = document.querySelector("input[name='readYet']:checked").value;
let rating = document.querySelector("input[name='addBookRating']:checked").value;

const addFormInput = document.querySelector(".bookAddFormInput")

if (bookAuthor === '' || bookTitle === '' || bookPages === '') {addFormInput.insertAdjacentHTML("beforebegin",
'<p class = "noInputWarning" style = "margin:0; padding:0;"> *Please Enter All fields</p>');

function cancel(){let noInputWarning = document.querySelector(".noInputWarning"); //remove cancel warning from dom after 2 seconds
noInputWarning.parentNode.removeChild(noInputWarning)}
return setTimeout(///removes cancel warning from dom
     cancel, 2000
)
}

myBooksArray.push(new Book(bookTitle,bookAuthor,bookPages,readYet,rating)) //New book object to add to mybooks array
addFormInput.reset() //reset form after clicking add book button
addBookFormSection.style.display = 'None';
console.log(myBooksArray)
//add book to library
})






/*Write a function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own “card”. 
It might help for now to manually add a few books to your array so you can see the display.

Add a “NEW BOOK” button that brings up a form allowing users to input the details for 
the new book: author, title, number of pages, whether it’s been read 
and anything else you might want.


You will most likely encounter an issue where submitting your form will not do what you expect it to do. 
That’s because the submit input tries to send the data to a server by default. 
Read up on the event.preventDefault documentation again and see how.

Add a button on each book’s display to remove the book from the library.

You will need to associate your DOM elements with the actual book objects in some way. 

One easy solution is giving them a data-attribute that corresponds to the index of the library array.

Add a button on each book’s display to change its read status.
To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.*/