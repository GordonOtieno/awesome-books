 const bookWrapper = document.querySelector('.book-wrapper');
 function loadData(book)
// {
//     const outputDiv = document.createElement('div');
//     const bookName = document.createElement('p');
//     const author = document.createElement('p');
//     const btn = document.createElement('button');
//     const br= document.createElement('br')
//     const hr=document.createElement('hr');
//     outputDiv.classList.add('output');
//     btn.classList.add('remove');
//     bookName.textContent = book.title;
//     author.textContent = book.author;
//     btn.textContent = 'remove';
//     outputDiv.appendChild(bookName);
//     outputDiv.appendChild(author);
//     outputDiv.appendChild(btn);
//     outputDiv.appendChild(br);
//     outputDiv.appendChild(br);
//     outputDiv.appendChild(hr)
//     bookWrapper.appendChild(outputDiv);
// }
const decodedbooks = JSON.parse(localStorage.getItem('books'));
for(let i=0; i<decodedbooks.length; i +=1){
    loadData(decodedbooks[i]);
//   console.log(decodedbooks[i])
}




bookWrapper.addEventListener('click', (e) => {
  if (e.target.className === 'remove') {
    const removeParent = e.target.parentElement;
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
    const br= document.createElement('br')
    const hr=document.createElement('hr');
    outputDiv.classList.add('output');
    btn.classList.add('remove');
    bookName.textContent = book.title;
    author.textContent = book.author;
    btn.textContent = 'remove';
    outputDiv.appendChild(bookName);
    outputDiv.appendChild(author);
    outputDiv.appendChild(btn);
    outputDiv.appendChild(br);
    outputDiv.appendChild(br);
    outputDiv.appendChild(hr)
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
