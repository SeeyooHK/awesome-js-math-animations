# JS Doodler

JS Doodler is a Codex skill that turns a character reference image into a simplified, expressive Three.js doodle. It extracts the character's recognizable traits instead of tracing or reproducing the source image, then delivers the result as a single HTML file.

## Quick start

Invoke the skill with an attached image or an accessible image path:

```text
$jsdoodler @character.png
```

The output is created beside the reference image using the same basename:

```text
character.png  →  character.html
```

No output filename or format instruction is required.

## What it produces

- One responsive HTML file containing a Three.js-rendered character doodle
- A centered, isolated reinterpretation of the primary character
- Deterministic hand-drawn marks derived from the source filename
- Layered fills, contours, hatching, stippling, and scribble textures
- A static composition that remains crisp during pointer movement

The reference image is not embedded in the output. Three.js is loaded at runtime from jsDelivr, so viewing the HTML requires network access unless the import is replaced with a local dependency.

## Design principles

JS Doodler treats the input as an identity guide rather than a tracing plate. The generated drawing should preserve the character's silhouette, expression, palette, and strongest identifying features while simplifying incidental detail.

Backgrounds, photographic lighting, captions, sticker borders, and unrelated props are omitted by default. The result should remain recognizable at thumbnail size and feel intentionally drawn rather than vector-traced.

## How it works

1. Codex inspects the reference and identifies the primary character and its visual anchors.
2. The JavaScript generator copies the reusable Three.js template and derives the output name, title, and deterministic seed.
3. Codex composes the character with procedural geometry on a 1000 × 1000 artboard.
4. The result is rendered in a browser and visually checked before delivery.

The drawing API provides these main primitives:

| Primitive | Purpose |
| --- | --- |
| `fill` | Broad color and value masses |
| `stroke` | Tapered contours and internal lines |
| `broken` | Dry or interrupted edges |
| `hatch` | Directional shading and texture |
| `stipple` | Speckled texture and coarse shadow |
| `scribble` | Energetic graphite, hair, or fur marks |

## Project structure

```text
jsdoodler/
├── SKILL.md                       # Codex workflow and guardrails
├── agents/openai.yaml             # Skill display metadata
├── assets/doodle-template.html    # Three.js renderer and drawing API
├── references/style-guide.md      # Character and mark-making guidance
├── references/third-party-license.md
└── scripts/new-doodle.mjs         # Deterministic HTML scaffolder
```

## Generator usage

The scaffolder can also be run directly with Node.js:

```bash
node scripts/new-doodle.mjs path/to/character.png
```

Optional overrides are available when using the script manually:

```bash
node scripts/new-doodle.mjs path/to/character.png \
  --output path/to/doodle.html \
  --title "Character Doodle" \
  --seed 12345
```

The script creates the HTML scaffold; the character-specific geometry is then authored inside the marked `CHARACTER DOODLE` section.

## Requirements

- Codex with local skill support
- Node.js with ES module support for the scaffolding script
- A modern WebGL-capable browser
- Network access to jsDelivr when opening generated HTML files

## Further documentation

- [Skill workflow and guardrails](SKILL.md)
- [Doodle style guide](references/style-guide.md)
- [Technique attribution and license](references/third-party-license.md)

## Attribution

The graphite stroke, granulation, hatching, stippling, scribbling, and paper-tooth techniques are adapted from the MIT-licensed [cyber-crowd](https://github.com/kengocodes/cyber-crowd/) project. See the [third-party license](references/third-party-license.md) for details.
