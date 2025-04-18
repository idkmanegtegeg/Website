// Get the drop area and input
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');

// Prevent default behavior (Prevent file from being opened)
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

// Highlight the drop area when a file is dragged over
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
});

// Remove highlight when file leaves the drop area
['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
});

// Handle file drop
dropArea.addEventListener('drop', handleDrop, false);

// Handle file input click (to select files)
fileInput.addEventListener('change', handleFileSelect, false);

// Prevent default behavior for dragging and dropping
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Highlight the drop area when dragging over
function highlight() {
    dropArea.style.borderColor = '#2e7d32';
}

// Unhighlight the drop area when file leaves
function unhighlight() {
    dropArea.style.borderColor = '#4caf50';
}

// Handle file drop
function handleDrop(e) {
    const files = e.dataTransfer.files;
    handleFiles(files);
}

// Handle file input change (file selection)
function handleFileSelect(e) {
    const files = e.target.files;
    handleFiles(files);
}

// Process the files (you can display or upload them)
function handleFiles(files) {
    if (files.length > 0) {
        alert(`You selected ${files.length} file(s)!`);
    }
}
