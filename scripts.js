const dropArea   = document.getElementById('drop-area');
const fileInput  = document.getElementById('file-input');
const selectBtn  = document.getElementById('select-file-btn');
const analyzeBtn = document.getElementById('analyze-btn');
const resultBox  = document.getElementById('analysis-result');

// Prevent defaults on drag events
['dragenter','dragover','dragleave','drop'].forEach(evt =>
  dropArea.addEventListener(evt, e => {
    e.preventDefault(); e.stopPropagation();
  })
);

// Highlight on dragover
['dragenter','dragover'].forEach(evt =>
  dropArea.addEventListener(evt, () => dropArea.classList.add('dragover'))
);
['dragleave','drop'].forEach(evt =>
  dropArea.addEventListener(evt, () => dropArea.classList.remove('dragover'))
);

// Handle drop
dropArea.addEventListener('drop', e => handleFiles(e.dataTransfer.files));

// Click-to-select
selectBtn.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', e => handleFiles(e.target.files));

function handleFiles(files) {
  if (!files || files.length === 0) return;
  // show filename(s)
  resultBox.classList.remove('hidden');
  resultBox.innerHTML = `<h3>Files Selected (${files.length})</h3>
    <ul>${[...files].map(f => `<li>${f.name}</li>`).join('')}</ul>`;
}

// Stub for Analyze
analyzeBtn.addEventListener('click', () => {
  resultBox.classList.remove('hidden');
  resultBox.innerHTML = `<h3>Analysis Results</h3><p>Processing…</p>`;
});
