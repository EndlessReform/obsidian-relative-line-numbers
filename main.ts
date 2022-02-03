import { Plugin } from 'obsidian';
import { lineNumbersRelative } from "codemirror-line-numbers-relative";

export default class MyPlugin extends Plugin {
	async onload() {
		const lineNumbersEnabled: Boolean  = this.app.vault.getConfig("showLineNumber");
		if (!lineNumbersEnabled) {
			return;
		}
		this.registerEditorExtension(lineNumbersRelative());
	}

	onunload() {

	}
}
