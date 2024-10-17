// Get the button and command list elements
const colorButton = document.getElementById('color-button');
const commandList = document.getElementById('command-list');

// Add an event listener to the button
colorButton.addEventListener('click', () => {
    // Generate a random color
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    
    // Change the color of the command list items
    commandList.style.color = randomColor;
});
