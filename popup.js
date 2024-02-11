
document.addEventListener('DOMContentLoaded', function() {
  var detectButton = document.getElementById('detectButton');
  if (detectButton) {
      detectButton.addEventListener('click', function() {
          var text = document.getElementById('text-input').value;
          // You can add your toxicity detection logic here
          // For now, let's just display the result
          document.getElementById('result').
          
          // textContent = "Toxicity detection result: Not implemented yet";
          textContent = "Toxicity detection result: positive";
      });
  } else {
      console.error("Error: Element with ID 'detectButton' not found.");
  }
});
