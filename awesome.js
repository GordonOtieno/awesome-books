
let list = document.querySelector('.list');
let addNew = document.querySelector('.add-new');
let contact = document.querySelector('.contact');
let main = document.querySelector('.main-body');

let date = document.querySelector('.date-container');
let x=Date.now();
date.innerHTML= new Date(x)

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
    console.log(books);
    let tb = document.querySelector('.books-table');
    if(tb==null){
      window.location.reload();
    }tb
    let table_html='';
    books.forEach((book, index) => {
       table_html += `<tr>
     <td>${book.title} by ${book.author}</td>
     <td><button class="rv-button" type="button" onclick="new Book().removeBook(${index})">Remove</button></td>
   </tr>`
  tb.innerHTML = table_html;
  console.log(tb)
    
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
if(decodedbooks.length==0){
  document.querySelector('.norecord').innerHTML='No Records In The Store!'
}

// const add = document.querySelector('.add');
// add.addEventListener('click', (e) => {
//   e.preventDefault();
//   const title = document.querySelector('.title').value;
//   const author = document.querySelector('.author').value;
//   const book = new Book(title, author);
//   book.saveRecord();
//   const decodedbooks = JSON.parse(localStorage.getItem('books'));
//   book.displayrecord(decodedbooks);
//   document.querySelector('.title').value = '';
//   document.querySelector('.author').value = '';
// });






addNew.addEventListener('click', addContent);
list.addEventListener('click', displayContent)

function addContent(){
  
  let content=` <!--form section-->
  <div class="form-container">
  <h1>Add a new book</h1>
  <div class="form">
    <div class="imput-cont">
    <input type="text" value="" placeholder="Title" class="title"> <br><br>
    <input type="text" value="" placeholder="Author" class="author"><br><br>
    </div>
    <button class="add" type="button">Add</button>
  
  </div>
 </div>`
 main.innerHTML=content;

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
  if(list.classList.contains('active')){
    list.classList.remove("active");
  } else {
    list.classList.add("active");
  }
  const storedBooks = JSON.parse(localStorage.getItem('books'));
  let book = new Book();
  book.displayrecord(storedBooks);
}

contact.addEventListener('click', showContact)

function showContact() {
// alert('tesing')

 let cont_html =`<!-- contact section -->
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
main.innerHTML=cont_html;
}

