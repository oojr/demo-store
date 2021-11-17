const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
      { value: "white", label: "White" },
      { value: "brown", label: "Brown" },
      { value: "blue", label: "Blue" },
      { value: "green", label: "Green" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "tees", label: "Tees" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "pants-shorts", label: "Pants & Shorts" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];

export default filters;
