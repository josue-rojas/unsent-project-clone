// function componentToHex(c) {
//   var hex = c.toString(16);
//   return hex.length === 1 ? "0" + hex : hex;
// }

// function rgbToHex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
function rgbToHex(r,g,b,a) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  a = Math.round(a * 255).toString(16);

  if (r.length === 1)
    r = "0" + r;
  if (g.length === 1)
    g = "0" + g;
  if (b.length === 1)
    b = "0" + b;
  if (a.length === 1)
    a = "0" + a;

  return "#" + r + g + b + a;
}

// function rgbToHex(r,g,b) {
//   r = r.toString(16);
//   g = g.toString(16);
//   b = b.toString(16);

//   if (r.length == 1)
//     r = "0" + r;
//   if (g.length == 1)
//     g = "0" + g;
//   if (b.length == 1)
//     b = "0" + b;

//   return "#" + r + g + b;
// }
export function rgbStringToHex (str) {
  const regex = /(\d+),\s?(\d+),\s?(\d+)/g

  const numString = str.match(regex)[0];

  if (numString) {
    const values = numString.split(/,\s./);
    const hexValue = rgbToHex(values[0], values[1], values[2])

    return hexValue
  }

  return '#0'
}


export const constructColor = hexString => {
  // try to convert color to hex first
  if (hexString[0] !== '#') hexString = rgbStringToHex(hexString);

  const hex = hexString.replace(/#/g, '');
  /* Get the RGB values to calculate the Hue. */
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  /* Getting the Max and Min values for Chroma. */
  const max = Math.max.apply(Math, [r, g, b]);
  const min = Math.min.apply(Math, [r, g, b]);

  /* Variables for HSV value of hex color. */
  let chr = max - min;
  let hue = 0;
  let val = max;
  let sat = 0;

  if (val > 0) {
    /* Calculate Saturation only if Value isn't 0. */
    sat = chr / val;
    if (sat > 0) {
      if (r === max) {
        hue = 60 * ((g - min - (b - min)) / chr);
        if (hue < 0) {
          hue += 360;
        }
      } else if (g === max) {
        hue = 120 + 60 * ((b - min - (r - min)) / chr);
      } else if (b === max) {
        hue = 240 + 60 * ((r - min - (g - min)) / chr);
      }
    }
  }
  const colorObj = {};
  colorObj.hue = hue;
  colorObj.hex = hexString;
  return colorObj;
};
