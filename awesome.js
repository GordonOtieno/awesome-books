const decodedbooks = JSON.parse(localStorage.getItem('books'));
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  saveRecord() {
    const decodedbooks = JSON.parse(localStorage.getItem('books'));
    let books = [];
    if (decodedbooks) books = [...decodedbooks];

    const book = {
      title: this.title,
      author: this.author,
    };
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  displayrecord(books) {
    if (this.length <= 0) {
      let inner = '';
      inner += `<p>You have no record in the store
    </p>`;
      document.querySelector('.input-display').innerHTML = inner;
    }
    let html = '';
    books.forEach((book, index) => {
      html += `<p class="show-title">${book.title}</p>
      <p class="show-author">${book.author}</p>
      <span class="btn-span"><button class="rv-button" type="button" onclick="new Book().removeBook(${index})">Remove</button></span><br>
      <hr>`;
      document.querySelector('.input-display').innerHTML = html;
    });
  }

  removeBook(index) {
    if (index >= 0) {
      const decodedbooks = JSON.parse(localStorage.getItem('books'));
      decodedbooks.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(decodedbooks));
      const update = JSON.parse(localStorage.getItem('books'));
      this.displayrecord(update);
    }
  }
}
const onlaunch = new Book();
onlaunch.displayrecord(decodedbooks);

const add = document.querySelector('.add');
add.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const book = new Book(title, author);
  book.saveRecord();
  const decodedbooks = JSON.parse(localStorage.getItem('books'));
  book.displayrecord(decodedbooks);
  document.querySelector('.title').value = '';
  document.querySelector('.author').value = '';
});
