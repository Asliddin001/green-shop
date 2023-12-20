const flowers = [
  {
    id: "m1",
    name: "Barberton Daisy",
    image: "https://i.ibb.co/FHwVZvy/03.png",
    price: "$48.29",
    discountPrice: "$226",
  },
  {
    id: "m2",
    name: "Purple Pot Flower",
    image:
      "https://i.ibb.co/FqvGNT5/144753-purple-pot-flower-free-clipart-hd.png",
    price: "$88.19",
  },
  {
    id: "m3",
    name: "Mint in Flower Pots",
    image: "https://i.ibb.co/7XBCTSv/mint-in-flower-pots-1712.png",
    price: "$115.61",
  },
  {
    id: "m4",
    name: "Plants Flowerpot",
    image:
      "https://i.ibb.co/PM1cDZj/426-4265168-plants-plant-flowerpot-gardening-houseplant-indoor-transparent-potted.png",
    price: "$134.89",
  },
  {
    id: "m5",
    name: "Plant PNG Image",
    image: "https://i.ibb.co/X8sbrK4/Plant-PNG-Image.png",
    price: "$157.53",
    discountPrice: "$255",
  },
  {
    id: "m6",
    name: "Flowers Plants",
    image: "https://i.ibb.co/Q68bwZ8/378281-flowers-plants-png.png",
    price: "$180.07",
  },
  {
    id: "m7",
    name: "Flowerpot with Sunlight",
    image:
      "https://i.ibb.co/g333CGq/png-transparent-flowerpot-with-sunlight-sunlight-flower-pot-flower.png",
    price: "$206.95",
    discount: "226$",
  },
  {
    id: "m8",
    name: "Potted Plants",
    image:
      "https://i.ibb.co/C5Vsv4x/56-563890-potted-plants-potted-flowers-garden-pots-clipart-plant.png",
    price: "$233.09",
    discountPrice: "$300",
  },
  {
    id: "m9",
    name: "Plant in Pot",
    image: "https://i.ibb.co/LvKT4TG/132-1325419-plant-in-pot-png.png",
    price: "$265.73",
  },
  {
    id: "m10",
    name: "Product 21",
    image: "https://i.ibb.co/gS7sWT9/product-21-320x320-1.png",
    price: "$291.52",
  },
  {
    id: "m11",
    name: "Image 2",
    image: "https://i.ibb.co/Msq64Zb/image-2.png",
    price: "$318.81",
    discountPrice: "$450",
  },
  {
    id: "m12",
    name: "Image 10",
    image: "https://i.ibb.co/vHt9Lrk/image-10.png",
    price: "$340.32",
  },
  {
    id: "m13",
    name: "04",
    image: "https://i.ibb.co/QYzs7qv/04.png",
    price: "$365.71",
  },
  {
    id: "m14",
    name: "03",
    image: "https://i.ibb.co/FHwVZvy/03.png",
    price: "$394.48",
  },
  {
    id: "m15",
    name: "02",
    image: "https://i.ibb.co/MgHgt2d/02.png",
    price: "$415.35",
    discountPrice: "$625",
  },
  {
    id: "m16",
    name: "01",
    image: "https://i.ibb.co/ZdMpf0H/01.png",
    price: "$445.24",
  },
  {
    id: "m17",
    name: "Image 8",
    image: "https://i.ibb.co/RhWF32b/image-8.png",
    price: "$468.92",
  },
  {
    id: "m18",
    name: "Image 7",
    image: "https://i.ibb.co/Y3BMNXm/image-7.png",
    price: "$497.01",
  },
  {
    id: "m19",
    name: "01-3",
    image: "https://i.ibb.co/GMtSkw0/01-3.png",
    price: "$520.02",
    discountPrice: "$790",
  },
  {
    id: "m20",
    name: "Image 9",
    image: "https://i.ibb.co/KXsmYW3/image-9.png",
    price: "$546.24",
  },
  {
    id: "m21",
    name: "Group 36211",
    image: "https://i.ibb.co/SBQ3Skk/Group-36211.png",
    price: "$576.03",
  },
  {
    id: "m22",
    name: "Product 20",
    image: "https://i.ibb.co/9GGfXX7/product-20-320x320-1.png",
    price: "$606.44",
  },
  {
    id: "m23",
    name: "Group 36213",
    image: "https://i.ibb.co/mbr4PGj/Group-36213.png",
    price: "$630.62",
    discountPrice: "$920",
  },
];
const flowersShop = [
  {
    id: "m1",
    name: "Barberton Daisy",
    image: "https://i.ibb.co/FHwVZvy/03.png",
    price: "$48.29",
    discountPrice: "$226",
  },
  {
    id: "m2",
    name: "Purple Pot Flower",
    image:
      "https://i.ibb.co/FqvGNT5/144753-purple-pot-flower-free-clipart-hd.png",
    price: "$88.19",
  },
  {
    id: "m3",
    name: "Mint in Flower Pots",
    image: "https://i.ibb.co/7XBCTSv/mint-in-flower-pots-1712.png",
    price: "$115.61",
  },
  {
    id: "m4",
    name: "Plants Flowerpot",
    image:
      "https://i.ibb.co/PM1cDZj/426-4265168-plants-plant-flowerpot-gardening-houseplant-indoor-transparent-potted.png",
    price: "$134.89",
  },
  {
    id: "m5",
    name: "Plant PNG Image",
    image: "https://i.ibb.co/X8sbrK4/Plant-PNG-Image.png",
    price: "$157.53",
    discountPrice: "$255",
  },
  {
    id: "m6",
    name: "Flowers Plants",
    image: "https://i.ibb.co/Q68bwZ8/378281-flowers-plants-png.png",
    price: "$180.07",
  },
  {
    id: "m7",
    name: "Flowerpot with Sunlight",
    image:
      "https://i.ibb.co/g333CGq/png-transparent-flowerpot-with-sunlight-sunlight-flower-pot-flower.png",
    price: "$206.95",
    discount: "226$",
  },
  {
    id: "m8",
    name: "Potted Plants",
    image:
      "https://i.ibb.co/C5Vsv4x/56-563890-potted-plants-potted-flowers-garden-pots-clipart-plant.png",
    price: "$233.09",
    discountPrice: "$300",
  },
  {
    id: "m9",
    name: "Plant in Pot",
    image: "https://i.ibb.co/LvKT4TG/132-1325419-plant-in-pot-png.png",
    price: "$265.73",
  },
  {
    id: "m10",
    name: "Product 21",
    image: "https://i.ibb.co/gS7sWT9/product-21-320x320-1.png",
    price: "$291.52",
  },
  {
    id: "m11",
    name: "Image 2",
    image: "https://i.ibb.co/Msq64Zb/image-2.png",
    price: "$318.81",
    discountPrice: "$450",
  },
  {
    id: "m12",
    name: "Image 10",
    image: "https://i.ibb.co/vHt9Lrk/image-10.png",
    price: "$340.32",
  },
  {
    id: "m13",
    name: "04",
    image: "https://i.ibb.co/QYzs7qv/04.png",
    price: "$365.71",
  },
  {
    id: "m14",
    name: "03",
    image: "https://i.ibb.co/FHwVZvy/03.png",
    price: "$394.48",
  },
  {
    id: "m15",
    name: "02",
    image: "https://i.ibb.co/MgHgt2d/02.png",
    price: "$415.35",
    discountPrice: "$625",
  },
  {
    id: "m16",
    name: "01",
    image: "https://i.ibb.co/ZdMpf0H/01.png",
    price: "$445.24",
  },
];

const categoriesData = [
  {
    name: "House Plants",
    products: 33,
  },
  {
    name: "Potter Plants",
    products: 12,
  },
  {
    name: "Seeds",
    products: 65,
  },
  {
    name: "Small Plants",
    products: 39,
  },
  {
    name: "Big Plants",
    products: 23,
  },
  {
    name: "Succulents",
    products: 17,
  },
  {
    name: "Trerrariums",
    products: 19,
  },
  {
    name: "Gardening",
    products: 33,
  },
  {
    name: "Accessories",
    products: 18,
  },
];
export { flowers, flowersShop, categoriesData };
