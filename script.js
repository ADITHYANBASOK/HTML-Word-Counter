const textInput = document.getElementById("textInput");
const wordCountDisplay = document.getElementById("wordCount");
const charCountDisplay = document.getElementById("charCount");

// Function to calculate words and characters
function updateCounts() {
  const text = textInput.value;

  // Word count: Split by spaces and filter out empty strings
  const wordCount = text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;

  // Character count: Count all characters excluding whitespace
  const charCount = text.length;

  // Update counts
  wordCountDisplay.textContent = wordCount;
  charCountDisplay.textContent = charCount;
}

// Attach event listener
textInput.addEventListener("input", updateCounts);
