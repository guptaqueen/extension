// content.js

// Function to perform sentiment analysis using TextBlob
async function analyzeSentiment(text) {
    // TextBlob endpoint for sentiment analysis
    const textBlobEndpoint = 'https://textblob-deploy.herokuapp.com/sentiment';

    // Construct the request body
    const requestBody = {
        text: text
    };

    // Make a POST request to the TextBlob API
    const response = await fetch(textBlobEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    // Parse the response JSON
    const data = await response.json();

    // Extract sentiment polarity from the response
    const polarity = data.polarity;
    console.log('Sentiment polarity:', polarity);

    // Send the sentiment polarity to the background script
    chrome.runtime.sendMessage({ action: 'sentimentAnalysisResult', polarity });
}

// Function to extract text content from the page and perform sentiment analysis
function analyzePageContent() {
    // Extract text content from various elements on the page
    const textElements = document.querySelectorAll('p, span, div, li, td');
    textElements.forEach(element => {
        const text = element.textContent.trim();
        if (text) {
            analyzeSentiment(text);
        }
    });
}

// Execute the analysis when the page finishes loading
window.addEventListener('load', analyzePageContent);
