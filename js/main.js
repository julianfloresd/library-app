const harryPotterPoA = new Book(
  'Harry Potter and the Prisoner of Azkaban', 
  'J.K. Rowling', 
  317, 
  `Harry Potter's (Daniel Radcliffe) third year at Hogwarts starts off badly when he learns deranged killer Sirius Black (Gary Oldman) has escaped from Azkaban prison and is bent on murdering the teenage wizard. While Hermione's (Emma Watson) cat torments Ron's (Rupert Grint) sickly rat, causing a rift among the trio, a swarm of nasty Dementors is sent to protect the school from Black. A mysterious new teacher helps Harry learn to defend himself, but what is his secret tie to Sirius Black?`,
  'yes')
const feastForCrows = new Book(
  'A Feast for Crows', 
  'George R.R. Martin', 
  753, 
  `A Feast for Crows focuses on the Lannister family's continuing consolidation of power following victory in the “War of the Five Kings.” Specifically, it follows the events precipitated by the murder of Tywin Lannister, who had been de facto ruler of Westeros. In his place, his daughter Cersei, seizes power.`,
  'no')

const myLibrary= [];

function Book (title, author, pages, summary, read) {
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
  const newBook = document.createElement('div');
  const newTitle = document.createElement('h2')
  const newAuthor = document.createElement('h3')
  const newPages = document.createElement('h3')
  const details = document.createElement('details')
  const newSummary = document.createElement('summary')
  const summaryDescription = document.createElement('p')
  const readBtn = document.createElement('button')
  const deleteBtn = document.createElement('button')
  newBook.classList.add('bookCard');
  bookShelf.appendChild(newBook)
  newBook.appendChild(newTitle)
  newTitle.textContent = `${item.bookTitle}`;
  newBook.appendChild(newAuthor)
  newAuthor.textContent = `by: ${item.bookAuthor}`;
  newBook.appendChild(newPages)
  newPages.textContent = `# of Pages: ${item.bookPages}`;
  newBook.appendChild(details);
  details.appendChild(newSummary)
  newSummary.textContent = 'Summary: '
  details.appendChild(summaryDescription)
  summaryDescription.textContent = `${item.bookSummary}`
  newBook.appendChild(readBtn)
  if (item.read == 'yes'){
    readBtn.textContent = 'Book read!'
  } else if(item.read == 'no'){
    readBtn.textContent = 'Book is yet to read!'
  }
  newBook.appendChild(deleteBtn)
  deleteBtn.innerHTML = `Delete <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 19a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3a1 1 0 0 0 0-2a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5a1 1 0 0 0 0-2Zm7.71-3.29a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0ZM16 3a1 1 0 0 0 0 2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3a1 1 0 0 0 0 2a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z"/></svg>`
}

function displayBook(array) {
  array.forEach(element => {
    addBookToLibrary(element)
  });
}

displayBook(myLibrary);