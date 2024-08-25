import * as vscode from 'vscode';
import { generateDartClassFromString } from './generateDartClassFromString';



interface Options {
    nullSafety?: boolean;
    makeAllRequired?: boolean;
    makeFinal?: boolean;
    putEncoderDecoderInClass?: boolean;
    generateCopyWith?: boolean;
    numForNumber?: boolean;
}

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('whitecodel-json-to-dart.Start', () => {
        const panel = vscode.window.createWebviewPanel(
            'jsonToDart', // Identifies the type of the webview
            'JSON to Dart', // Title of the panel displayed to the user
            vscode.ViewColumn.One, // Editor column to show the new webview panel in
            {
                enableScripts: true, // Enable JavaScript in the webview
            }
        );

        // Set the HTML content for the webview
        panel.webview.html = getWebviewContent();

        // Handle messages from the webview
        panel.webview.onDidReceiveMessage(async message => {
            switch (message.command) {
                case 'convert':
                    try {
                        const jsonString = message.json;
                        const options: Options = message.options;

                        const dartClass = generateDartClassFromString(jsonString, options);

                        // Send the Dart class back to the webview
                        panel.webview.postMessage({ command: 'displayDart', dartClass });
                    } catch (error) {
                        panel.webview.postMessage({ command: 'error', message: 'Invalid JSON Input.' });
                    }
                    break;
            }
        });
    });

    context.subscriptions.push(disposable);
}

function getWebviewContent(): string {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JSON to Dart</title>
		<!-- Add Bootstrap CSS link for a stylish look -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
		<!-- Prism CSS -->
		<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.css" rel="stylesheet" />
		<style>
			/* Styles for the loader overlay */
			.loader-overlay {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.7);
				display: none;
				justify-content: center;
				align-items: center;
				z-index: 9999;
			}

			/* Styles for the loader spinner */
			.loader-spinner {
				border: 4px solid #f3f3f3;
				border-top: 4px solid #3498db;
				border-radius: 50%;
				width: 50px;
				height: 50px;
				animation: spin 2s linear infinite;
			}

			@keyframes spin {
				0% {
					transform: rotate(0deg);
				}

				100% {
					transform: rotate(360deg);
				}
			}

			.input-box,
			.output-box {
				width: 48%;
			}

			.checkbox-container {
				/* in row */
				display: flex;
				flex-wrap: wrap;
				gap: 20px;
				margin-top: 20px;
			}
		</style>
    </head>
    <body>
        <div id="container">
			<center>
				<div class="mt-3">
					Click here to visit the <a href="https://tools.whitecodel.com" target="_blank">WhiteCodel Tools</a>
				</div>
			</center>
			<!-- Options Checkboxes -->
            <div class="checkbox-container">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="nullSafety" checked>
                    <label class="form-check-label" for="nullSafety">Null Safety</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="putEncoderDecoderInClass" checked>
                    <label class="form-check-label" for="putEncoderDecoderInClass">Put Encoder/Decoder in Class</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="makeAllRequired">
                    <label class="form-check-label" for="makeAllRequired">Make All Required</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="makeFinal" checked>
                    <label class="form-check-label" for="makeFinal">Make All Final</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="generateCopyWith">
                    <label class="form-check-label" for="generateCopyWith">Generate CopyWith Method</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="numForNumber" checked>
                    <label class="form-check-label" for="numForNumber">Use \`num\` for Number</label>
                </div>
            </div>
			<div class="row mt-5">
				<div class="col-12 col-md-6 mb-4" id="jsonInput">
					<h2>JSON Input</h2>
					<textarea class="form-control" id="jsonText" rows="13"
							placeholder="Enter JSON data here"></textarea>
				</div>
				<div class="col-12 col-md-6" id="dartOutput">
					<h2>Dart Output</h2>
					<div class="position-relative">
						<pre style="height: 320px;"><code class="language-dart" id="dartText"></code></pre>
						<button id="copyButton" class="btn btn-sm btn-light position-absolute d-none"
                            style="top: 10px; right: 10px;">
                            <img src="https://tools.whitecodel.com/icons/copy-icon.png" alt="" height="20px">
                        </button>
                        <p id="copy-show" class="position-absolute d-none" style="top: -30px; right: 10px;">Copied</p>
					</div>
				</div>
			</div>

			<!-- Personal Information -->
            <div class="mt-5">
                <p class="text-center">Made with ❤️ by Bhawani Shankar</p>
                <div class="text-center">
                    <a href="https://www.instagram.com/bhawani_shankar_official" target="_blank" class="me-3"><img
                            src="https://tools.whitecodel.com/icons/instagram.png" alt="Instagram" width="60"></a>
                    <a href="https://twitter.com/bhawani8387" target="_blank" class="me-3"><img src="https://tools.whitecodel.com/icons/twitter.png"
                            alt="Twitter" width="40"></a>
                    <a href="https://www.linkedin.com/in/bhawani-shankar-mahawar-601777170/" target="_blank"><img
                            src="https://tools.whitecodel.com/icons/linkedin.png" alt="LinkedIn" width="32"></a>
                    <a href="https://medium.com/@BhawaniTechDev" target="_blank" class="ms-4"><img
                            src="https://tools.whitecodel.com/icons/medium.png" alt="Medium" width="32"></a>
                </div>
            </div>
        </div>
        <script>
            const vscode = acquireVsCodeApi();
			let dartData;

			function copyToClipboard() {
                const text = dartData;
                const el = document.createElement("textarea");
                el.value = text;
                document.body.appendChild(el);
                el.select();
                document.execCommand("copy");
                document.body.removeChild(el);

                document.getElementById('copy-show').classList.remove('d-none');
                setTimeout(() => {
                    document.getElementById('copy-show').classList.add('d-none');
                }, 1000);
            }

			function hideCopyButton() {
                document.getElementById('copyButton').classList.add('d-none');
            }

            function showCopyButton() {
            	document.getElementById('copyButton').classList.remove('d-none');
            }

			// if any option is changed, convert JSON to Dart again
            document.getElementById('nullSafety').addEventListener('change', convert);
            document.getElementById('putEncoderDecoderInClass').addEventListener('change', convert);
            document.getElementById('makeAllRequired').addEventListener('change', convert);
            document.getElementById('makeFinal').addEventListener('change', convert);
            document.getElementById('generateCopyWith').addEventListener('change', convert);
            document.getElementById('numForNumber').addEventListener('change', convert);
			document.getElementById('copyButton').addEventListener('click', copyToClipboard);

            document.getElementById('jsonText').addEventListener('input', convert);

			function convert() {
				const json = document.getElementById('jsonText').value;
					const options = {
						nullSafety: document.getElementById('nullSafety').checked,
						putEncoderDecoderInClass: document.getElementById('putEncoderDecoderInClass').checked,
						makeAllRequired: document.getElementById('makeAllRequired').checked,
						makeFinal: document.getElementById('makeFinal').checked,
						generateCopyWith: document.getElementById('generateCopyWith').checked,
						numForNumber: document.getElementById('numForNumber').checked,
					};

                vscode.postMessage({ command: 'convert', json, options });
			}

            window.addEventListener('message', event => {
                const message = event.data;

                switch (message.command) {
                    case 'displayDart':
						showCopyButton();
                        document.getElementById('dartText').textContent = message.dartClass;
						dartData = message.dartClass;
						// Re-apply Prism.js syntax highlighting
                        Prism.highlightElement(document.getElementById('dartText'));
                        break;
                    case 'error':
						hideCopyButton();
                        document.getElementById('dartText').textContent = 'Waiting for valid JSON input...';
                        break;
                }
            });
        </script>
		<!-- Prism JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-dart.min.js"></script>
    </body>
    </html>`;
}

export function deactivate() {}
