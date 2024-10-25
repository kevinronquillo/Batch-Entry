// This script will be injected into the page and will handle the DOM manipulation
function changeTextboxValue(serials) {
	// Find the textbox with the name 'info'
	const textbox = document.getElementById('serial')
	const submit = document.getElementById('Submit')
	let serialBatch = serials.split('\n')
	// Check if the textbox exists and then change its value

	if (textbox) {
		for (let i = 0; i < serialBatch.length; i++) {
			if (serialBatch[i] != '') {
				textbox.value = serialBatch[i]
				submit.click()
				console.log(i)
			}
		}
	}
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(
	(message, sender, sendResponse) => {
		if (message.action === 'changeTextBox') {
			changeTextboxValue(message.data)
		}
	}
)
