# Doodle style guide

## Character extraction

Treat the image as an identity guide, not a layout to reproduce. Read it in this order:

1. Primary character silhouette.
2. Expression and directional gesture.
3. Three to seven identity anchors: hair, ears, eyes, beak, costume, emblem, limbs, or signature accessory.
4. Three to six palette colors.
5. One optional surface texture.

Discard scenery, photographic shadows, framing, labels, and sticker cutlines unless they define the character. Recompose the isolated character near the center of the 1000×1000 artboard. Simplify curves into a small set of purposeful shapes and exaggerate the strongest feature by roughly 10–25%.

## Mark selection

- `stroke(points, width, options)`: primary contours built as tapered Three.js ribbon meshes. Use `ghost: true` for hesitant construction lines.
- `broken(points, width, options)`: dry, interrupted edges and light contours.
- `fill(points, color, alpha)`: paper-colored occlusion or broad ink/color mass.
- `hatch(points, spacing, angle, alpha)`: directional shade, hair, cloth, and form turning.
- `stipple(points, spacing, alpha)`: Three.js point clouds for dark fabric, coarse shadow, or speckled surfaces.
- `scribble(points, spacing, alpha)`: energetic hair, foliage, fur, or graphite blocks.

Use thick-to-thin hierarchy: silhouette 3–6 px, internal structure 1.5–3 px, texture 0.6–1.5 px on the 1000 px artboard.

## Doodle checks

- Verify recognition from silhouette plus three internal features.
- Verify the expression and personality survive the transformation.
- Verify the output has its own doodle composition rather than the source crop and background.
- Use uneven contours, selective exaggeration, and sparse construction marks so the result feels drawn rather than vector-traced.
- Remove details that make the character busier without making it more identifiable.
- Check at thumbnail size; identity should survive while source-specific staging disappears.

The paper layer should remain quiet. Creases and tooth support the drawing but must not compete with it.
