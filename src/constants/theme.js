export const theme = Object.freeze({
  colors: {
    primaryColor: "#0c389f",
    reverseColor: "#fff",
    accentColor: "#ffd61a",
    placeholderColor: "#3f51b582",
    backgroundColor: "#deeeff",
    backroundColorSerchbar: "#3f51b5",
    backgroundColorForm: "#9ddafc",
    borderDisabledColor: "#c1c1c1",
    backgroundDisabledColor: "#d0d0d0",
  },
  spacing: (value) => `${4 * value}px`,
  transition: `250ms cubic-bezier(0.4, 0, 0.2, 1)`,
  fonts: { family: `"Poppins", sans-serif`, size: "1em", lh: "1.333" },
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.15)`,
});
