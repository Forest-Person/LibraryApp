////*****JS file for Library App*****////



function yesNoButtonColorChange(){
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
}

yesNoButtonColorChange() ///run yes no color button logic once on dom load


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


function Book(title,author,pages,readYet,rating) {  //Book object

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
    this.rating = rating;
    
    //constructor
}



const testBook1 =new Book('The Trickster and the Paranormal','George P. Hansen', 564) ;//test book objects for displaying 
const testBook2 =new Book('Authors of the Impossible','Dr. Jeffrey Kripal',332)  ;     //new books in the card section
const testBook3 =new Book('American Cosmic, Dr. Diana Pasulka', 288);


let myBooksArray = [testBook1,testBook2,testBook3] //array for storing Book objects

///VVVVV///for each loop in a function that loops through all the book objects and adds those objects properties to 
///VVVVV///an insertadjacenthtml method which will load the dom with presumably when we want to remove this
///VVVVV///we cna use a setAttribue function on this 

//////////////
//VVVVVVVVVVVVVVVVVVVVthis is how to target the dataset attribute that has a specific value of the raiod button checked
console.log(document.querySelector("[data-book-title='Authors of the Impossible'] input[name='cardRating']:checked"))

 



//add book constructor button in header fires the add book function below which creates a javascript object and
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

console.log(bookTitle)
console.log(readYet)///check what the value of the checked radio button will be in this log console

const addFormInput = document.querySelector(".bookAddFormInput")

if (bookAuthor === '' || bookTitle === '' || bookPages === '') {addFormInput.insertAdjacentHTML("beforebegin",
'<p class = "noInputWarning" style = "margin:0; padding:0;"> *Please Enter All fields</p>'); //if no input text in add book form

function cancel(){let noInputWarning = document.querySelector(".noInputWarning"); //remove cancel warning from dom after 2 seconds
noInputWarning.parentNode.removeChild(noInputWarning)}
return setTimeout(///removes cancel warning from dom
     cancel, 2000
)
}

myBooksArray.push(new Book(bookTitle,bookAuthor,bookPages,readYet,rating)) //New book object to add to mybooks array
addFormInput.reset() //reset form after clicking add book button
addBookFormSection.style.display = 'None';//remove book add form from display after reset.

function cardInsert() { 

    //The below template literal is used to append a new element to the dom based on input form add book form
    //and then insertadjacenthtml method is used. Not certain on whether or not we are safe from XSS attacks(cross site scripting) look into this more
    //

    //the dataset attribute for the data-article-title below will be used to target individual 
    //elements for removal when the remove button is pressed, the data-rating-title will be used to mark the correct backround color of the yes or no button
    //designating whether the book has been read or not in the main html file. the test books will eventually be removed and then a for each will populate 
    //the main html file with the book stored in the my books array.
    
    let cardFormTemplate = `
    
    <article data-article-title = "${bookTitle}">  
                    
                <div class = "bookInfoImageContainer">
                    <ul>
                        <li>Title: ${bookTitle}</li>
                        <li>Author: ${bookAuthor}</li>
                        <li>Pages: ${bookPages} </li>
                        <li>Read yet: <button class = 'yesButton'>Yes</button><button class = 'noButton'>No</button></li>       
                    </ul>
                        <img src= # height=232px width=232 alt ='' >
                </div>
                
                <div class = "ratingRemoveButtonContainer"> 
                    <div class="rating">
    
                       <form data-rating-title = ${bookTitle} 
                        <input type="radio" name="cardRating" value="1" >  <label for="cardRating">1 </label>
                        <input type="radio" name="cardRating" value="2" >  <label for="cardRating">2 </label>
                        <input type="radio" name="cardRating" value="3" >  <label for="cardRating">3 </label>
                        <input type="radio" name="cardRating" value="4" >  <label for="cardRating">4 </label>
                        <input type="radio" name="cardRating" value="5" >  <label for="cardRating">5 </label>
                        <p class = "rateMe">rating</p>
                    </form>
                    </div>
                    <button class = "removeButton">Remove</button>
                </div>
                
            </article>
    
    `
    const container = document.querySelector(".cardContainer")  /////CSS WAS BEING APPLIED by functons above were not being 
                                                                //applied to yes and no buttons becuase the only ran once 
                                                                //because they run in the global scope on initial dom load.
    container.insertAdjacentHTML("beforeend", cardFormTemplate)
    
    }

cardInsert()  ///run inner function  that inserts new card elements based on input into the add book form
yesNoButtonColorChange()//re run funciton that applies coloring logic to yes and no buttons on forms saying whther read or not.



//TO DO//

///could place random pictures from unsplash url into book spaces and with set sizes too or at least make them small sizes
///and also make them add book to library
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