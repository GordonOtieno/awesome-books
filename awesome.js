const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const main = document.querySelector('.main-body');

const date = document.querySelector('.date-container');
date.innerHTML = new Date();

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
    this.tb = document.querySelector('.books-table');
    if (this.tb == null) {
      window.location.reload();
    }
    let tableHtml = '';
    books.forEach((book, index) => {
      tableHtml += `<tr>
     <td>${book.title} by ${book.author}</td>
     <td><button class="rv-button" type="button" onclick="new Book().removeBook(${index})">Remove</button></td>
     </tr>`;
      this.tb.innerHTML = tableHtml;
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
    window.location.reload();
  }
}
const decodedbooks = JSON.parse(localStorage.getItem('books'));
const onlaunch = new Book();
if (decodedbooks) {
  onlaunch.displayrecord(decodedbooks);
}
if (!decodedbooks) {
  document.querySelector('.norecord').innerHTML = 'No Records In The Store!';
}

function addContent() {
  if (addNew.classList.contains('active')) {
    addNew.classList.remove('active');
  } else {
    addNew.classList.add('active');
  }

  const content = ` <!--form section-->
  <div class="form-container">
  <h1>Add a new book</h1>
  <div class="form">
    <div class="imput-cont">
    <input type="text" value="" placeholder="Title" class="title"> <br><br>
    <input type="text" value="" placeholder="Author" class="author"><br><br>
    </div>
    <button class="add" type="button">Add</button>
  
  </div>
 </div>`;
  main.innerHTML = content;

  const add = document.querySelector('.add');
  add.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const book = new Book(title, author);
    book.saveRecord();
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  });
}

function displayContent() {
  if (list.classList.contains('active')) {
    list.classList.remove('active');
  } else {
    list.classList.add('active');
  }
  const storedBooks = JSON.parse(localStorage.getItem('books'));
  const book = new Book();
  book.displayrecord(storedBooks);
}

function showContact() {
  if (contact.classList.contains('active')) {
    contact.classList.remove('active');
  } else {
    contact.classList.add('active');
  }

  const contHtml = `<!-- contact section -->
 <div class="contact">
   <h1 class="">Contact information</h1>
   <p class="contact-parag">
     Do you have any question or you just want to say "Hello"?<br>
     You can reach out to Us.
   </p>
    <ul>
     <li>Our email: mail@mail.com</li>
     <li>Our Phone number:76538738</li>
     <li>Our Address: Streetname 22, 762376,City Country</li>
    </ul>
 </div>`;
  main.innerHTML = contHtml;
}
addNew.addEventListener('click', addContent);
list.addEventListener('click', displayContent);
contact.addEventListener('click', showContact);
