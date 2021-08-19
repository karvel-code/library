const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

const bookSection = document.getElementById('bookSection');
const showBooks = (bookCard) => {
  bookSection.innerHTML = '';
  myLibrary.forEach((newBook) => {
    const newBookCard = bookCard(newBook);
    bookSection.appendChild(newBookCard);
  });
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
