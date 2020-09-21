const btnList = document.getElementById('btnList');

const inputList = document.getElementById('inputList');

function enterList() {
    const inputList = document.getElementById('inputList').value;
    const list = document.getElementById('list');
    const itemList = document.createElement('li');
    itemList.textContent = inputList;
    list.appendChild(itemList);
    itemList.addEventListener('click', () => {
        itemList.classList.toggle('tachado');
    });
    itemList.addEventListener('dblclick', () => {
        itemList.remove();
    });
}


btnList.onclick = function () {
    enterList();
};