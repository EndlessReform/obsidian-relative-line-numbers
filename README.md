# Relative Line Numbers in Live Preview

![](./demo.png)

This [Obsidian](https://obsidian.md/) plugin enables relative line numbers in Obsidian's Live Preview mode(Obsidian v13+). 

To use this plugin,
- Line numbers must be enabled (`Options/Show Line Number`)
- Legacy (CM5) editor must not be enabled (use Nadav Spiegelman's [obsidian-relative-line-numbers](https://github.com/nadavspi/obsidian-relative-line-numbers) for CM5)

Under the hood, this plugin simply adds jsjoeio's [codemirror-line-numbers-relative](https://github.com/jsjoeio/codemirror-line-numbers-relative) extension to the editor and tweaks CSS to minimize reflow.


## Known issues

Vim treats Mermaid code blocks and $\LaTeX$ blocks as a single line number, while the gutter counts the actual plaintext lines behind the block. Relative line numbers over or under these blocks will not be accurate.

