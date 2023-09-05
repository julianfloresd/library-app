

const myLibrary= [];

function Book (title, author, pages, read) {
  this.bookTitle = title;
  this.bookAuthor = author;
  this.bookPages = pages;
  this.bookSummary = summary;
  this.read = read;
  this.info = function() {
    let sentence = ''
    if (read == 'yes') {
      sentence = `${title},by ${author} has ${pages} pages and I have read it.`
    } else {
      sentence = sentence = `${title},by ${author} has ${pages} pages and I have not read it.`
    }
    console.log(sentence);
    return sentence
  }
}


function addBookToLibrary (item) {
  const bookShelf = document.querySelector('.cardContainer')
  let newBook = document.createElement('div');
  let newTitle = document.createElement('h2')
  let newAuthor = document.createElement('h3')
  let newPages = document.createElement('h3')
  newBook.classList.add('bookCard');
  bookShelf.appendChild(newBook)
  newBook.appendChild(newTitle)
  newTitle.textContent = `${item.bookTitle}`;
  newBook.appendChild(newAuthor)
  newAuthor.textContent = `by: ${item.bookAuthor}`;
  newBook.appendChild(newPages)
  newPages.textContent = `# of Pages: ${item.bookPages}`;
}