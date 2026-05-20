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

Book.prototype.toggleRead = function() { this.read = this.read === "true" ? "false" : "true"; }

function addBook(title, author, pages, read) {
    const book = new Book(title, author, pages, read, id = crypto.randomUUID());
    myLibrary.push(book);
    displayBook(book);

}

function removeBook(bookId) {
    const bookIndex = myLibrary.findIndex(book => book.id === bookId);
    if (bookIndex > -1) { myLibrary.splice(bookIndex, 1); }
    
    const card = document.querySelector(`[data-id="${bookId}"]`);
    if (card) { card.remove(); }
}

addBook("The Plague", "Albert Camus", 500, "true");
addBook("The Poetics of Space", "Gaston Bachlard", 525, "true");

function displayBook(book) {
    const container = document.querySelector("#container");
        
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = book.id;

    const title = document.createElement("h3");
    title.textContent = book.title;
    card.appendChild(title);

    const author = document.createElement("p");
    author.textContent = book.author;
    card.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = book.pages;
    card.appendChild(pages);

    const read = document.createElement("p");
    read.textContent = book.read === "true" ? "Read: Yes" : "Read: No";
    card.appendChild(read);

    const btnContainer = document.createElement("div");
    btnContainer.id = "btn-container";

    const toggle = document.createElement("button");
    toggle.classList.add("toggle");
    btnContainer.appendChild(toggle);

    toggle.addEventListener("click", () => { 
        book.toggleRead();
        read.textContent = book.read === "true" ? "Read: Yes" : "Read: No";
    });

    const remove = document.createElement("button");
    remove.classList.add("remove");
    btnContainer.appendChild(remove);
    remove.addEventListener("click", () => { removeBook(book.id); });

    card.appendChild(btnContainer);
    container.appendChild(card);
}

const dialog = document.getElementById("form-container");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    addBook(title = data.title, author = data.author, 
            pages = data.pages, read = data.read);

    form.reset();
});

dialog.addEventListener("close", () => {
    if (dialog.returnValue !== "submit") {
        form.reset();
    }
});