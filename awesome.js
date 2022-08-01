

const bookWrapper = document.querySelector('.book-wrapper');
bookWrapper.addEventListener('click', (e) => {
  if (e.target.className === 'remove') {
    const removeParent = document.querySelector('.remove').parentElement;
    bookWrapper.removeChild(removeParent);
  }
});

if(localStorage != null)
{
   //We will display every book from our local storage.
}
//Display books function.
function displayBook(book)
{
    const outputDiv = document.createElement('div');
    const bookName = document.createElement('p');
    const author = document.createElement('p');
    const btn = document.createElement('button');
    outputDiv.classList.add('output');
    btn.classList.add('remove');
    bookName.textContent = book.title;
    author.textContent = book.author;
    btn.textContent = 'remove';
    outputDiv.appendChild(bookName);
    outputDiv.appendChild(author);
    outputDiv.appendChild(btn);
    bookWrapper.appendChild(outputDiv);


    

}


let submit = document.forms['form'];
let books = [];

submit.addEventListener('submit', (e) => {
  e.preventDefault();

  let title = submit.querySelector('.title').value;
  let author = submit.querySelector('.author').value;
  let book = {
    title: title,
    author: author,
  };
  books.push(book);
  displayBook(book);
  localStorage.setItem('books', JSON.stringify(books));

});
