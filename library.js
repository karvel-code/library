const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

const bookSection = document.getElementById("bookSection");
const displayBooks = (bookCard) => {
  bookSection.innerHTML = "";
  myLibrary.forEach((newBook) => {
    const newBookCard = bookCard(newBook);
    bookSection.appendChild(newBookCard);
  });
};

function readstatus(index, displayBooks, bookCard) {
  if (myLibrary[index].readStatus === false) {
    myLibrary[index].readStatus = true;
  } else {
    myLibrary[index].readStatus = false;
  }
  displayBooks(bookCard);
}

function removeFromLib(index, displayBooks, bookCard) {
  myLibrary.splice(index, 1);
  displayBooks(bookCard);
}

const bookCard = (newBook) => {
  const div = document.createElement("div");
  const title = document.createElement("p");
  title.textContent = `Book title: ${newBook.title}`;
  const author = document.createElement("p");
  author.textContent = `Author: ${newBook.author}`;
  const pages = document.createElement("p");
  pages.textContent = `Pages: ${newBook.pages}`;
  const read = document.createElement("p");
  read.textContent = `Read?: ${newBook.readStatus}`;
  const remove = document.createElement("button");
  remove.innerHTML = "Eject Book";
  const readStatus = document.createElement("button");
  readStatus.innerHTML = "Toggle read status";
  div.append(title, author, pages, read, remove, readStatus);
  remove.addEventListener("click", () =>
    removeFromLib(myLibrary.indexOf(newBook), displayBooks, bookCard)
  );
  readStatus.addEventListener("click", () =>
    readstatus(myLibrary.indexOf(newBook), displayBooks, bookCard)
  );
  div.className = "card";
  return div;
};

// event: add a book
document.querySelector("#book-form").addEventListener("submit", (event) => {
  event.preventDefault();

  //get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#isRead").value;

  //instantiate a book
  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
  console.log(book);
});

const inputForm = document.getElementById("book-form");
inputForm.addEventListener("submit", (event) =>
  addBookToLibrary(event, bookCard)
);
