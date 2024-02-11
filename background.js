// background.js

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.action === "executeScript") {
//         chrome.tabs.executeScript({
//             file: 'content.js'
//         });
//     }
// });


// background.js

// Add an event listener for messages from the extension popup or other parts of the extension
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     // Check if the message is requesting to execute a script
//     if (message.action === "executeScript") {
//         // Use chrome.tabs.executeScript to inject a content script into the currently active tab
//         chrome.tabs.executeScript({
//             file: 'content.js'
//         });
//     }
// });


// background.js
chrome.action.onClicked.addListener((tab) => {
    // chrome.scripting.executeScript({
    //     target: { tabId: tab.id },
    //     function: (/* Arguments if needed */) => {
    //         // Your script logic goes here
    //         console.log('Script executed in the active tab');
    //     },
    // });
    chrome.tabs.sendMessage(tab.id, { action: 'executeScript' });
});


// background.js
// chrome.browserAction.onClicked.addListener((tab) => {
//     chrome.tabs.executeScript({
//         tabId: tab.id,
//         code: '(function() { /* Your script logic goes here */ console.log("Script executed in the active tab"); })();',
//     });
// });

