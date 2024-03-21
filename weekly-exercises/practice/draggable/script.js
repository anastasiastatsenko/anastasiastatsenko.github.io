// Function to handle drag events
function handleDragStart(event) {
    event.target.classList.add('dragging');
    const offsetX = event.clientX - event.target.getBoundingClientRect().left;
    const offsetY = event.clientY - event.target.getBoundingClientRect().top;
    event.dataTransfer.setData('text/plain', ''); // Necessary for Firefox

    // Store the offset position of the mouse relative to the draggable element
    event.dataTransfer.setDragImage(event.target, offsetX, offsetY);
}

function handleDragEnd(event) {
    event.target.classList.remove('dragging');
}

// Attach drag event listeners
const draggable = document.getElementById('draggable');
draggable.addEventListener('dragstart', handleDragStart);
draggable.addEventListener('dragend', handleDragEnd);