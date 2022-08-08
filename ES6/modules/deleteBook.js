const DeleteBook = () => {
  const table = document.querySelector('.table');

  table.addEventListener('click', (e) => {
    const decodedbooks = JSON.parse(localStorage.getItem('books'));
    if (e.target.classList.contains('rv-button')) {
      const elementIndex = e.target.id;
      const parent = e.target.parentElement.parentElement;
      decodedbooks.splice(elementIndex, 1);
      parent.remove();
      localStorage.setItem('books', JSON.stringify(decodedbooks));

      const storeCheck = JSON.parse(localStorage.getItem('books'));
      if (!storeCheck || storeCheck.length === 0) {
        document.querySelector('.norecord').innerHTML = 'No Record in the store. Please Add!';
      }
    }
  });
};
export default DeleteBook;
