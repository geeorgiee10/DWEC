window.onload = function() {
    document.getElementById('boton').addEventListener('click', addItem);
    document.getElementById('vaciar').addEventListener('click', clearItems);

    function addItem() {
        const input = document.getElementById('groceryInput');
        const itemText = input.value.trim();

        if (itemText === '') {
            return;
        }

        const li = document.createElement('li');

        const itemSpan = document.createElement('span');
        itemSpan.textContent = itemText;
        li.appendChild(itemSpan);

        const editButton = document.createElement('button');
        editButton.textContent = '✏️';
        editButton.classList.add('editar');
        editButton.addEventListener('click', () => editItem(li, itemSpan));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.classList.add('borrar');
        deleteButton.addEventListener('click', () => deleteItem(li));

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        document.getElementById('lista').appendChild(li);
        input.value = '';
    }

    function editItem(li, itemSpan) {
        const inputField = document.createElement('input');
        inputField.value = itemSpan.textContent;
      
        li.insertBefore(inputField, itemSpan);
        li.removeChild(itemSpan);
      
        inputField.focus();
      
        const saveButton = document.createElement('button');
        saveButton.textContent = '✔️';
        saveButton.addEventListener('click', () => saveItem(li, inputField));
      
        li.appendChild(saveButton);
    }

    function saveItem(li, inputField) {
        const newText = inputField.value.trim();
        if (newText !== '') {
            const itemSpan = document.createElement('span');
            itemSpan.textContent = newText;

            li.insertBefore(itemSpan, inputField);
            li.removeChild(inputField); 

            const saveButton = li.querySelector('button');
            li.removeChild(saveButton);
        }
    }

    function deleteItem(li) {
        document.getElementById('lista').removeChild(li);
    }

    function clearItems() {
        document.getElementById('lista').innerHTML = '';
    }
}
