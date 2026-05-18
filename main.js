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