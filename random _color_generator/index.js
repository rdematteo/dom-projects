let myButton = document.querySelector(".button");
myButton.addEventListener("click", function(event) {
  generate_color();
});



generate_color = () => {
  random_color = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
    return `${r}, ${g}, ${b}`;
  };

  const decimalColorRandom = random_color();

  const r = Number(decimalColorRandom[0]);
  const g = Number(decimalColorRandom[1]);
  const b = Number(decimalColorRandom[2]);

  const decimalColor = "rgb(" + r + ", " + g + ", " + b + ")"

  RGBToHex = (r, g, b) => {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
  };
  const hex = RGBToHex(r, g, b);

  let h1 = document.querySelector("#decimal");
  h1.innerHTML = decimalColor;

  let h1a = document.querySelector("#hexadecimal");
  h1a.innerHTML = hex;

  let picked_color = document.querySelector(".actual-color");
  picked_color.style.backgroundColor = hex;
};