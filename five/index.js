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
        text.textContent = item;

        itemsDiv.appendChild(text)
    }
}

function loadItems() {}


function saveItems() {}

function addItem() {
    items.push(document.getElementById("itemInput"))
    console.log(items);
    
}

function removeItem() {}