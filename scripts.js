// Get the drop area, file input, and analysis button
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');
const analyzeBtn = document.getElementById('analyze-btn');
const analysisResult = document.getElementById('analysis-result');

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

// Handle file input change (when user selects a file)
fileInput.addEventListener('change', handleFileSelect, false);

// Prevent default behavior for dragging and dropping
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Highlight drop area
function highlight() {
    dropArea.style.borderColor = '#2e7d32';
}

// Remove highlight
function unhighlight() {
    dropArea.style.borderColor = '#4caf50';
}

// Handle file drop
function handleDrop(e) {
    const files = e.dataTransfer.files;
    handleFiles(files);
}

// Handle file input change
function handleFileSelect(e) {
    const files = e.target.files;
    handleFiles(files);
}

// Process the files (you can add analysis logic here)
function handleFiles(files) {
    if (files.length > 0) {
        alert(`You selected ${files.length} file(s)!`);
    }
}

// Handle the analyze button click
analyzeBtn.addEventListener('click', () => {
    // Simulate the analysis result
    analysisResult.classList.remove('hidden');
    analysisResult.innerHTML = "<h3>Analysis Results</h3><p>File analysis in progress...</p>";
});
