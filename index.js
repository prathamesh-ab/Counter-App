// Getting the content from UI
let content = document.querySelector('#counter');

function increment(){
    // Updating the content to integer
    let value = parseInt(content.textContent);
    // Incrementing the value
    value++;
    // Setting the value onto UI
    content.textContent = value;
}

function decrement(){
    let value = parseInt(content.textContent);
    value--;
    content.textContent = value;
}