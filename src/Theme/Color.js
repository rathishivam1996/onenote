const Color = {
  rgb(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = 1;
    return this;
  },

  rgba(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    return this;
  },

  fromHex(hex) {
    const normal = hex.match(
      /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/i
    );
    let val;
    if (normal) {
      val = normal.slice(1).map((x) => parseInt(x, 16));
    }

    const shorthand = hex.match(/^#([0-9a-zA-Z])([0-9a-zA-Z])([0-9a-zA-Z])$/i);
    if (shorthand) {
      val = shorthand.slice(1).map((e) => 0x11 * parseInt(e, 16));
    }

    [this.r, this.g, this.b] = val;
    this.a = 1;
    return this;
  },

  fromRgba(rgbaStr) {
    const colorArr = rgbaStr
      .slice(rgbaStr.indexOf("(") + 1, rgbaStr.indexOf(")"))
      .split(", ")
      .map((numStr) => parseFloat(numStr, 10));
    [this.r, this.g, this.b, this.a] = colorArr;
    return this;
  },

  updateColor(param, value) {
    this[param] = value;
    return this;
  },

  toRgba() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  },

  toHex() {
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
