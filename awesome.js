const container = document.querySelector('.container');
container.addEventListener('click', (e) => {
    if(e.target.className === 'remove')
    {
       const removeParent = document.querySelector('.remove').parentElement;
       container.removeChild(removeParent);

    }

})