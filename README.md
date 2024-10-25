# Batch Entry

[![License](https://img.shields.io/github/license/kevinronquillo/Batch-Entry)](LICENSE)

Batch Entry is a simple Chrome Extension that enables developers to input and process lists of items in bulk, enhancing productivity and making repetitive data entry tasks more efficient. Perfect for use cases like submitting multiple URLs, processing product IDs, or automating form submissions.

## Features

- **Batch Input**: Enter or paste a list of items for batch processing.
- **Bulk Operations**: Apply actions to each item in the batch (e.g., navigating to URLs or logging data).
- **Real-Time Progress Tracking**: View the progress of each item as it’s processed.
- **Error Management**: Handle or skip items that encounter errors during processing.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kevinronquillo/Batch-Entry.git
   ```
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top right corner.
4. Click **Load unpacked** and select the cloned repository directory.

## Usage

1. Launch the extension by clicking on its icon in the Chrome toolbar.
2. In the popup window:
   - Paste or type the list of items you want to process (e.g., URLs, IDs).
   - Select your desired operation.
   - Click **Start** to begin the batch processing.
3. View the progress of each item in real time within the popup.

## File Structure

The repository’s main files are structured as follows:

- **manifest.json**: Contains extension metadata, permissions, and configurations.
- **popup.html**: Defines the user interface.
- **popup.js**: Handles the batch processing logic and interacts with the Chrome API.
- **background.js** (optional): Manages any background tasks required during processing.
- **styles.css**: Provides styling for the popup interface.

## Sample manifest.json

Here’s an example of what the `manifest.json` might look like:

```json
{
	"manifest_version": 3,
	"name": "Batch Entry",
	"version": "1.0",
	"description": "A Chrome extension for simple batch entry processing.",
	"permissions": ["tabs", "storage"],
	"action": {
		"default_popup": "popup.html",
		"default_icon": "icon.png"
	}
}
```

## Development

To develop or modify the extension, follow these steps:

1. Edit `popup.js` to add new features or update processing logic.
2. Update `popup.html` and `styles.css` to adjust the UI.
3. Reload the extension in Chrome by going to `chrome://extensions/` and clicking **Reload** on the Batch Entry extension.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributions

Contributions are welcome! Please open an issue or submit a pull request to suggest new features, report bugs, or improve the documentation.
