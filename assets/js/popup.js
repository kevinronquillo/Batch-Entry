document
	.getElementById('changeButton')
	.addEventListener('click', () => {
		let serials = document.getElementById('serials').value
		chrome.tabs.query(
			{ active: true, currentWindow: true },
			(tabs) => {
				chrome.tabs.sendMessage(tabs[0].id, {
					action: 'changeTextBox',
					data: serials,
				})
			}
		)
	})

document.getElementById('clearText').addEventListener('click', () => {
	let serials = document.getElementById('serials')
	serials.value = ''
})
