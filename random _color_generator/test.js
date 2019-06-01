random_color = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return [r,g,b];
  return `${r}, ${g}, ${b}`;
};

const decimalColor = random_color();

const r = Number(decimalColor[0])
const g = Number(decimalColor[1])
const b = Number(decimalColor[2])

 RGBToHex = (r,g,b) => {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}
const hex = RGBToHex(r,g,b)
