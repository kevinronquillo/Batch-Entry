function batchEntry() {
	const btnSubmit = document.getElementById('submitBatch')
	let serialInput = document.getElementById('serial')
	let submitPage = document.getElementById('Submit')

	console.log(serialInput)
	const dataSubmit = () => {
		let batchInput = document.getElementById('batchEntry').value

		let batchArr = batchInput.split('\n')
		console.log(batchArr)
		for (let i = 0; i < batchArr.length; i++) {
			serialInput.value = batchArr[i]
			submitPage.click()
		}
	}
	btnSubmit.addEventListener('click', () => {
		dataSubmit()
	})
}
content.js
