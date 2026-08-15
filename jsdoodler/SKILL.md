---
name: jsdoodler
description: Extract the primary character from a supplied image and reinterpret it as a simplified, expressive Three.js doodle in one HTML file. Trigger for `$jsdoodler @image`, an explicit JS Doodler selection with an attached image, or requests to make a character doodle from an image. Automatically name the output after the source image with an `.html` extension; the user does not need to request HTML or provide an output name.
---

# JS Doodler

Produce one deterministic HTML containing a doodle interpretation of the image's character. Build the character from Three.js geometry and use the reference for identity—not pixel-level composition.

## Workflow

1. Resolve the single referenced image from the `@` attachment or path. Treat `$jsdoodler @image.ext` as a complete instruction; do not ask for style, format, or filename when the image is inspectable.
2. Derive the output automatically as `<image-directory>/<image-stem>.html`. Example: `pets/mico.jpeg` becomes `pets/mico.html`.
3. Inspect the image with `view_image`. Identify the primary character, its silhouette, expression, palette, and 3–7 identity anchors. Ignore the source background and incidental photographic detail.
4. Read [references/style-guide.md](references/style-guide.md). Decide how to simplify and exaggerate the character into a doodle.
5. Run `node scripts/new-doodle.mjs REFERENCE_IMAGE` from this skill directory. The script derives the output path, title, and deterministic seed from the reference name.
6. Edit only the marked `CHARACTER DOODLE` section unless a palette-level renderer change is needed. Compose from `fill`, `stroke`, `broken`, `hatch`, `stipple`, and `scribble` calls on the 1000×1000 artboard.
7. Keep the character isolated, centered, and recognizable at thumbnail size. Prefer a lively doodle pose and simplified proportions over source-image tracing.
8. Serve the HTML locally and inspect a screenshot. Iterate until it reads as the same character in a distinct hand-drawn style. Verify the console has no errors.
9. Deliver the automatically named HTML and state that Three.js loads from jsDelivr.

## Guardrails

- Preserve character identity, expression, signature shapes, and key accessories; freely simplify proportions and pose.
- Do not reproduce the entire source image. Omit backgrounds, camera framing, lighting, shadows, captions, sticker borders, and props unless one is essential to identifying the character.
- Treat the reference as an identity guide, not a tracing plate.
- Use a fixed seed. Randomness should roughen marks, never move semantic features.
- Keep the finished drawing static by default. Do not rotate, parallax, or otherwise move the layered doodle group from pointer input; transparent fills and strokes must remain registered.
- Prefer 12–40 deliberate paths and 3–6 colors over hundreds of literal details.
- Use `fill` for large value masses; use marks for texture. Do not simulate shading with smooth gradients unless the reference contains them.
- Do not embed the reference image in the delivered scene unless the user explicitly requests it.
- Do not replace the supplied renderer with SVG or Canvas 2D. Draw subject matter with Three.js geometry.
- Always generate exactly one HTML beside the source image with the same basename unless the user explicitly requests another destination.

## Resources

- `assets/doodle-template.html`: reusable Three.js renderer and geometry-based graphite mark API.
- `scripts/new-doodle.mjs`: dependency-free JavaScript template copier and metadata setter.
- `references/style-guide.md`: mark-selection and visual-comparison guidance.
- `references/third-party-license.md`: attribution for techniques adapted from `cyber-crowd`.
