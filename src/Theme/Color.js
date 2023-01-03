// import objectMap from "../Utils/Utils";

const Color = {
  hex(hex) {
    this.hex = hex;
  },

  rgb(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = 1;
  },

  rgba(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  },

  toString() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  },

  rgbaStrToRgba(str) {
    const colorArr = str
      .slice(str.indexOf("(") + 1, str.indexOf(")"))
      .split(", ")
      .map((numStr) => parseFloat(numStr, 10));
    [this.r, this.g, this.b, this.a] = colorArr;
  },

  hexToRgba() {
    const normal = this.hex.match(
      /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/i
    );
    let val;
    if (normal) {
      val = normal.slice(1).map((x) => parseInt(x, 16));
    }

    const shorthand = this.hex.match(
      /^#([0-9a-zA-Z])([0-9a-zA-Z])([0-9a-zA-Z])$/i
    );
    if (shorthand) {
      val = shorthand.slice(1).map((e) => 0x11 * parseInt(e, 16));
    }
    return {
      r: val[0],
      g: val[1],
      b: val[2],
      a: 1,
    };
  },

  rgbToHex() {
    return `#${[this.r, this.g, this.b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
      })
      .join("")}`;
  },
};

function overlayOnSurface(surface, overlay) {
  const rSO = Math.round(
    surface.r * surface.a * (1 - overlay.a) + overlay.r * overlay.a
  );
  const gSO = Math.round(
    surface.g * surface.a * (1 - overlay.a) + overlay.g * overlay.a
  );
  const bSO = Math.round(
    surface.b * surface.a * (1 - overlay.a) + overlay.b * overlay.a
  );
  const aSO = surface.a * (1 - overlay.a) + overlay.a;
  const newColor = Object.create(Color);
  newColor.rgba(rSO, gSO, bSO, aSO);
  return newColor;
}

export { Color, overlayOnSurface };
