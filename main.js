const myLibrary = [];

function Book(title, author, pages, read, id) {
    if(!new.target) {
        throw Error("Use 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBook(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read, id = crypto.randomUUID()));
}

addBook("The Plague", "Albert Camus", 500, true);
addBook("The Poetics of Space", "Gaston Bachlard", 525, true);