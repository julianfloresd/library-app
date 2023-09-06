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

const form = document.getElementById('form')

const myLibrary= [harryPotterPoA, feastForCrows];

displayBook(myLibrary);


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
  newBook.classList.add('bookCard');
  
  const newTitle = document.createElement('h2')
  newTitle.textContent = `${item.bookTitle}`;

  const newAuthor = document.createElement('h3')
  newAuthor.textContent = `by: ${item.bookAuthor}`;
  
  const newPages = document.createElement('h3')
  newPages.textContent = `# of Pages: ${item.bookPages}`;

  
  const details = document.createElement('details')
  
  
  const newSummary = document.createElement('summary')
  newSummary.textContent = 'Summary: '

  
  const summaryDescription = document.createElement('p')
  summaryDescription.textContent = `${item.bookSummary}`

  
  const readBtn = document.createElement('button')
  if (item.read == 'yes'){
    readBtn.classList.add('read')
    readBtn.textContent = 'Book read!'
  } else if(item.read == 'no'){
    readBtn.textContent = 'Book is yet to read!'
  }
  
  const deleteBtn = document.createElement('button')
  deleteBtn.innerHTML = `Delete <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 19a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3a1 1 0 0 0 0-2a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5a1 1 0 0 0 0-2Zm7.71-3.29a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0ZM16 3a1 1 0 0 0 0 2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3a1 1 0 0 0 0 2a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z"/></svg>`


  bookShelf.appendChild(newBook)
  newBook.appendChild(newTitle)
  newBook.appendChild(newAuthor)
  newBook.appendChild(newPages)
  newBook.appendChild(details);
  details.appendChild(newSummary)
  details.appendChild(summaryDescription)
  newBook.appendChild(readBtn)
  newBook.appendChild(deleteBtn)

  readBtn.addEventListener("click", () => {
    if (item.read === 'yes') {
      readBtn.classList.remove('read')
      readBtn.textContent = 'Book is yet to read!'
      item.read = 'no'
    } else if (item.read === 'no') {
      readBtn.classList.add('read')
      readBtn.textContent = 'Book read!'
      item.read = 'yes'
    }
  })

  deleteBtn.addEventListener("click", () => {
    myLibrary.splice(item, 1)
    bookShelf.removeChild(newBook)
  })

}


function displayBook(array) {
  array.forEach(element => {
    addBookToLibrary(element)
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById('title')
  const author = document.getElementById('author')
  const pages = document.getElementById('pages')
  const summary = document.getElementById('summary')
  const status = document.getElementById('status')
  let read =''
  if (status.checked == true) {
    read = 'yes'
  } else {
    read = 'no'
  }
  console.log(status.checked)
  const bookAdd = new Book(title.value, author.value, pages.value, summary.value, read);
  myLibrary.push(bookAdd);
  addBookToLibrary(bookAdd);
  form.reset()
});