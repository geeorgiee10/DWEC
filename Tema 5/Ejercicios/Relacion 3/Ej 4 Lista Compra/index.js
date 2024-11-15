let listaCompra = [];


window.onload = function() {
    cargarLista();
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

        li.dataset.oldValue = itemText;

        document.getElementById('lista').appendChild(li);
        input.value = '';

        listaCompra.push(itemText);
        almacenar();
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
        almacenar();
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

            const oldText = li.dataset.oldValue;
            const index = listaCompra.indexOf(oldText); 
            if (index !== -1) {
                listaCompra[index] = newText;
            }

            li.dataset.oldValue = newText;

            almacenar();
    }
    }

    function deleteItem(li) {
        const itemText = li.querySelector('span').textContent.trim();

        const eliminar = document.getElementById('lista');
        eliminar.removeChild(li);

        const index = listaCompra.findIndex(item => item === itemText);
        if (index !== -1) {
            listaCompra.splice(index, 1);
        }

        almacenar();
    }

    function clearItems() {
        document.getElementById('lista').innerHTML = '';
        listaCompra = [];
        almacenar();
    }

    function almacenar(){
        localStorage.setItem('listaCompra', JSON.stringify(listaCompra));
    }

    function cargarLista() {
        const datosGuardados = localStorage.getItem('listaCompra');
        if (datosGuardados) {
            listaCompra = JSON.parse(datosGuardados); 
            listaCompra.forEach(itemText => {
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
    
                li.dataset.oldValue = itemText;
    
                document.getElementById('lista').appendChild(li);
            });
        }
    }
}
