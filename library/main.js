// array to store each created instance of Book object
var library = [];

// variable to reference the library div
var libraryDiv = document.getElementById("library");

// variable to reference the form to add a new book
var newBookForm = document.getElementById("newBookForm");

// counter variable to append a unique id to new book card divs and book object instances
var index = 0;

// variable to reference the add new book button and adds an event listener to run the function to popup the form on click
let addNewBookButton = document.getElementById("newBookButton").addEventListener("click", () => openNewBookForm());

// same as above but for the cancel button, and it closes the popup on click
let closeNewBookFormButton = document.getElementById("cancel").addEventListener("click", () => closeNewBookForm());

// object (Book) constructor function
class Book {
  constructor(title, author, numberOfPages, haveRead, index) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
    this.index = index;
  }
}

// new book form is submitted, run the function createBookInstance
newBookForm.onsubmit = function createBookInstance(submit) {

    // each item of the object is assigned a value based on what the user enters in each input box, except index
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var numberOfPages = document.getElementById("pages").value;
    var haveRead = document.getElementById("checkRead").checked;
  
    // variable to reference 
    var newBookInstance = new Book(title, author, numberOfPages, haveRead, index);
    library.push(newBookInstance);

  // removes a book card from the libraryDiv
  function removeBook(event) {
    // variable to store id of clicked element
    var removeButtonId = event.target.getAttribute("id");
    var cardToRemove = document.getElementById(`${removeButtonId}`);
    var removeButtonClass = event.target.getAttribute("class");

    if (removeButtonClass !== "remove") {
      return;
    }

    if (cardToRemove === null) {
      return;
    }
    // delete the book card within which the remove button was clicked
    cardToRemove.closest("#bookCard").remove();

    // also remove the book instance from the library array

    var instanceToRemove = library.findIndex(book => book.index === (Number(removeButtonId)));
    library.splice(instanceToRemove, 1);
  }

  function toggleReadStatus(event) {
    // variable to store id of clicked button
    var toggleButtonId = event.target.getAttribute("id");
    // stores the clicked element
    var cardToToggle = document.getElementById(toggleButtonId);
  
    if (!cardToToggle.classList.contains("read")) {
      return;
    }
  
    var bookInstance = library.find(book => book.index == toggleButtonId);
    if (bookInstance.haveRead) {
      bookInstance.haveRead = false;
      cardToToggle.classList.remove("haveRead");
      cardToToggle.classList.add("notRead");
      cardToToggle.textContent = "Not Read";
    } else {
      bookInstance.haveRead = true;
      cardToToggle.classList.add("haveRead");
      cardToToggle.classList.remove("notRead");
      cardToToggle.textContent = "Read";
    }
  }

  // 
  function addNewBookCard(newBookInstance, index) {

    const cardContainer = document.createElement("div");
    const cardTitle = document.createElement("div");
    const cardAuthor = document.createElement("div");
    const cardPages = document.createElement("div");
    const cardButtons = document.createElement("div");
    const toggleReadStatusButton = document.createElement("button");
    const removeBookButton = document.createElement("button");


    cardTitle.textContent = `${newBookInstance.title}`;
    cardAuthor.textContent = `By ${newBookInstance.author}`;
    cardPages.textContent = `${newBookInstance.numberOfPages} pages`;
    removeBookButton.textContent = "Remove Book";

    if (newBookInstance.haveRead) {
      toggleReadStatusButton.textContent = "Read";
      toggleReadStatusButton.classList = "read haveRead";
    } else {
      toggleReadStatusButton.textContent = "Not Read";
      toggleReadStatusButton.classList = "read notRead";
    }

    cardTitle.classList = "title attributes";
    cardAuthor.classList = "author attributes";
    cardPages.classList = "pages attributes";
    cardButtons.classList = "buttons";
    cardContainer.classList = "bookCard";
    cardContainer.id = "bookCard";
    toggleReadStatusButton.id = `${index}`;
    removeBookButton.classList = "remove";
    removeBookButton.id = `${index}`;

    toggleReadStatusButton.addEventListener("click", toggleReadStatus);
    removeBookButton.addEventListener("click", removeBook);+

    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardAuthor);
    cardContainer.appendChild(cardPages);
    cardContainer.appendChild(cardButtons);
    cardButtons.appendChild(toggleReadStatusButton);
    cardButtons.appendChild(removeBookButton);
    libraryDiv.appendChild(cardContainer);
  }

  submit.preventDefault();
  closeNewBookForm();

  addNewBookCard(newBookInstance, index);

  newBookForm.reset();

  index += 1;

}

function openNewBookForm() {
  document.getElementById("newBookPopup").style.display = "block";
};
function closeNewBookForm() {
  document.getElementById("newBookPopup").style.display = "none";
};