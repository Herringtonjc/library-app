let myLibrary = [];


function Book(title, author, numberOfPages, haveRead) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.haveRead = haveRead
};

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.haveRead}`;
};

function addBookToLibrary(bookToAdd) {
    myLibrary.push(bookToAdd)
};

function displayBook() {

}