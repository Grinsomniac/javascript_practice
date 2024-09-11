let items = [];

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items";

function renderItems() {
    items.Div.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.getElement("div")
        container.style.marginBotton = "10px"
        
        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => {removeItem(idx)}

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) {
        items = JSON.parse(oldItems);
    }
    renderItems();
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems);
}

function addItem() {
    items.push(document.getElementById("itemInput"))
    console.log(items);
    
}

function removeItem() {}