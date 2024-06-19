import React from "react";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";

const ProductList2 = [
  {
    id: 1,
    name: "Zsiga Let It Be",
    category: "Zsiga",
    price: 380,
    quantity: 100,
    description: "Zsiga Let It Be Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240513_101913_581559_________1200x1200.jpg",
    Info1:
      "https://prod-eurasian-res.popmart.com/default/20240514_153814_888898_____06_____1200x1057.jpg?x-oss-process=image/format,webp",
    Info2:
      "https://prod-eurasian-res.popmart.com/default/20240514_153815_051706_____08_____1200x996.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 2,
    name: "Zsiga Let It Be",
    category: "Zsiga",
    price: 4560,
    quantity: 100,
    description: "Zsiga Let It Be Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240513_101942_070780_________1200x1200.jpg",
    Info1:
      "https://prod-eurasian-res.popmart.com/default/20240514_153814_888898_____06_____1200x1057.jpg?x-oss-process=image/format,webp",
    Info2:
      "https://prod-eurasian-res.popmart.com/default/20240514_153815_051706_____08_____1200x996.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 3,
    name: "Teletubbies Companion ",
    category: "Teletubbies",
    price: 380,
    quantity: 100,
    description: "Teletubbies Companion Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240428_100548_763535__1200x1200.jpg",
    Info1:
      "https://prod-eurasian-res.popmart.com/default/20240429_135906_934319__1200x1494.jpg?x-oss-process=image/format,webp",
    Info2:
      "https://prod-eurasian-res.popmart.com/default/20240429_135906_296665__1200x1086.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 4,
    name: "Teletubbies Companion ",
    category: "Teletubbies",
    price: 4560,
    quantity: 100,
    description: "Teletubbies Companion Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240428_100614_162944__1200x1200.jpg",
    Info1:
      "https://prod-eurasian-res.popmart.com/default/20240429_135906_934319__1200x1494.jpg?x-oss-process=image/format,webp",
    Info2:
      "https://prod-eurasian-res.popmart.com/default/20240429_135906_296665__1200x1086.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 5,
    name: "CRYBABY x Powerpuff Girls ",
    category: "CRYBABY",
    price: 380,
    quantity: 100,
    description: "CRYBABY x Powerpuff Girls Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240304_164015_460582__1200x1200.jpg",
    Info1:
      "https://prod-eurasian-res.popmart.com/default/20240307_135926_739725__1200x1456.jpg?x-oss-process=image/format,webp",
    Info2:
      "https://prod-eurasian-res.popmart.com/default/20240307_135926_116100__1200x2030.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 6,
    name: "CRYBABY x Powerpuff Girls ",
    category: "CRYBABY",
    price: 4560,
    quantity: 100,
    description: "CRYBABY x Powerpuff Girls Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240304_164040_023955__1200x1200.jpg",
    Info1:
      "https://prod-eurasian-res.popmart.com/default/20240307_135926_739725__1200x1456.jpg?x-oss-process=image/format,webp",
    Info2:
      "https://prod-eurasian-res.popmart.com/default/20240307_135926_116100__1200x2030.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 7,
    name: "DIMOO x Animal Kingdom ",
    category: "DIMOO",
    price: 380,
    quantity: 100,
    description: "DIMOO Animal Kingdom Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240315_163725_005507__1200x1200.jpg",
    Info1:
      "https://prod-eurasian-res.popmart.com/default/20240321_094837_483018__1200x1057.jpg?x-oss-process=image/format,webp",
    Info2:
      "https://prod-eurasian-res.popmart.com/default/20240321_094837_024886__1200x1086.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 8,
    name: "DIMOO x Animal Kingdom ",
    category: "DIMOO",
    price: 4560,
    quantity: 100,
    description: "DIMOO Animal Kingdom Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240315_163735_240418__1200x1200.jpg",
    Info1:
      "https://prod-eurasian-res.popmart.com/default/20240321_094837_483018__1200x1057.jpg?x-oss-process=image/format,webp",
    Info2:
      "https://prod-eurasian-res.popmart.com/default/20240321_094837_024886__1200x1086.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 9,
    name: "DIMOO WORLD",
    category: "DIMOO",
    price: 380,
    quantity: 100,
    description: "DIMOO By Your Side Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240613_145152_568494____di_____1200x1200.jpg",
    info1:
      "https://prod-eurasian-res.popmart.com/default/20240613_140053_391274_____05_____1200x1832.jpg?x-oss-process=image/format,webp",
    info2:
      "https://prod-eurasian-res.popmart.com/default/20240613_140053_953513_____07_____1200x1046.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 10,
    name: "DIMOO WORLD",
    category: "DIMOO",
    price: 4560,
    quantity: 100,
    description: "DIMOO By Your Side Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240613_145143_478680____dimoo_____1200x1200.jpg",
    info1:
      "https://prod-eurasian-res.popmart.com/default/20240613_140053_391274_____05_____1200x1832.jpg?x-oss-process=image/format,webp",
    info2:
      "https://prod-eurasian-res.popmart.com/default/20240613_140053_953513_____07_____1200x1046.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 11,
    name: "SpongeBob",
    category: "SpongeBob",
    price: 380,
    quantity: 100,
    description: "SpongeBob SquarePants Daily Quirks Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240613_145236_387642_________1200x1200.jpg",
    info1:
      "https://prod-eurasian-res.popmart.com/default/20240612_102640_112313_____08_____1200x1074.jpg?x-oss-process=image/format,webp",
    info2:
      "https://prod-eurasian-res.popmart.com/default/20240612_102640_019554_____10_____1200x1081.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 12,
    name: "SpongeBob",
    category: "SpongeBob",
    price: 4560,
    quantity: 100,
    description: "SpongeBob SquarePants Daily Quirks Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240613_145246_355579_________1200x1200.jpg",
    info1:
      "https://prod-eurasian-res.popmart.com/default/20240612_102640_112313_____08_____1200x1074.jpg?x-oss-process=image/format,webp",
    info2:
      "https://prod-eurasian-res.popmart.com/default/20240612_102640_019554_____10_____1200x1081.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 13,
    name: "HACIPUPU Adventures",
    category: "HACIPUPU",
    price: 380,
    quantity: 100,
    description: "HACIPUPU Adventures In The Woods Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240527_100157_036003_________1200x1200.jpg",
    info1:
      "https://prod-eurasian-res.popmart.com/default/20240529_112649_515960_____08_____1200x1057.jpg?x-oss-process=image/format,webp",
    info2:
      "https://prod-eurasian-res.popmart.com/default/20240529_112649_623350_____10_____1200x1086.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 14,
    name: "HACIPUPU Adventures",
    category: "HACIPUPU",
    price: 4560,
    quantity: 100,
    description: "HACIPUPU Adventures In The Woods Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240527_100228_651187_________1200x1200.jpg",
    info1:
      "https://prod-eurasian-res.popmart.com/default/20240529_112649_515960_____08_____1200x1057.jpg?x-oss-process=image/format,webp",
    info2:
      "https://prod-eurasian-res.popmart.com/default/20240529_112649_623350_____10_____1200x1086.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 15,
    name: "Disney Swing",
    category: "Disney",
    price: 380,
    quantity: 100,
    description: "Disney Swing Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240527_112536_631091_________1200x1200.jpg",
    info1:
      "https://prod-eurasian-res.popmart.com/default/20240529_111838_121906_____10_____1200x1086.jpg?x-oss-process=image/format,webp",
    info2:
      "https://prod-eurasian-res.popmart.com/default/20240529_111838_185105_____08_____1200x1057.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 16,
    name: "Disney Swing",
    category: "Disney",
    price: 4560,
    quantity: 100,
    description: "Disney Swing Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240527_112610_434312_________1200x1200.jpg",
    info1:
      "https://prod-eurasian-res.popmart.com/default/20240529_111838_121906_____10_____1200x1086.jpg?x-oss-process=image/format,webp",
    info2:
      "https://prod-eurasian-res.popmart.com/default/20240529_111838_185105_____08_____1200x1057.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 17,
    name: "Teletubbies Fantasy Candy",
    category: "Teletubbies",
    price: 380,
    quantity: 100,
    description: "Teletubbies Fantasy Candy World Series",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/14_ZyVWyKaMZS_1200x1200.jpg",
    Info1:
      "https://prod-eurasian-res.popmart.com/default/16_QcPedA3UfN_1200x1200.jpg",
    Info2:
      "https://prod-eurasian-res.popmart.com/default/1_loFv7jAeqG_1200x1200.jpg",
  },
  {
    id: 18,
    name: "Teletubbies Fantasy Candy",
    category: "Teletubbies",
    price: 4560,
    quantity: 100,
    description: "Teletubbies Fantasy Candy World Series",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/15_zr7xH9m92k_1200x1200.jpg",
    Info1:
      "https://prod-eurasian-res.popmart.com/default/16_QcPedA3UfN_1200x1200.jpg",
    Info2:
      "https://prod-eurasian-res.popmart.com/default/1_loFv7jAeqG_1200x1200.jpg",
  },
  {
    id: 19,
    name: "HIRONO Reshape",
    category: "HIRONO",
    price: 380,
    quantity: 100,
    description: "HIRONO Reshape Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20231228_175419_189617__1200x1200.jpg",
    Info1:
      "https://prod-eurasian-res.popmart.com/default/20231228_175229_730595__1200x1024.jpg?x-oss-process=image/format,webp",
    Info2:
      "https://prod-eurasian-res.popmart.com/default/20231228_175229_231221__1200x1991.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 20,
    name: "HIRONO Reshape",
    category: "HIRONO",
    price: 4560,
    quantity: 100,
    description: "HIRONO Reshape Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20231228_175410_355630__1200x1200.jpg",
    Info1:
      "https://prod-eurasian-res.popmart.com/default/20231228_175229_730595__1200x1024.jpg?x-oss-process=image/format,webp",
    Info2:
      "https://prod-eurasian-res.popmart.com/default/20231228_175229_231221__1200x1991.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 21,
    name: "Disney Stitch on a Date ",
    category: "Disney",
    price: 380,
    quantity: 100,
    description: "Disney Stitch on a Date Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240201_143545_040553__1200x1200.jpg",
    info1:
      "https://prod-eurasian-res.popmart.com/default/20240205_172411_573452__1200x1056.jpg?x-oss-process=image/format,webp",
    info2:
      "https://prod-eurasian-res.popmart.com/default/20240205_172411_772823__1200x924.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 22,
    name: "Disney Stitch on a Date ",
    category: "Disney",
    price: 4560,
    quantity: 100,
    description: "Disney Stitch on a Date Series Figures",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/20240201_143618_754166__1200x1200.jpg",
    info1:
      "https://prod-eurasian-res.popmart.com/default/20240205_172411_573452__1200x1056.jpg?x-oss-process=image/format,webp",
    info2:
      "https://prod-eurasian-res.popmart.com/default/20240205_172411_772823__1200x924.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 23,
    name: "CRYBABY Monster Tears ",
    category: "CRYBABY",
    price: 380,
    quantity: 100,
    description: "CRYBABY Monster Tears Series",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/9_V8tpIMXlFf_1200x1200.jpg",
    Info1:
      "https://prod-eurasian-res.popmart.com/default/crybaby_03_INuDISZCPr_1200x1054.jpg?x-oss-process=image/format,webp",
    Info2:
      "https://prod-eurasian-res.popmart.com/default/crybaby_01_O7cZG926Ni_1200x1952.jpg?x-oss-process=image/format,webp",
  },
  {
    id: 24,
    name: "CRYBABY Monster Tears ",
    category: "CRYBABY",
    price: 4560,
    quantity: 100,
    description: "CRYBABY Monster Tears Series",
    imageUrl:
      "https://prod-eurasian-res.popmart.com/default/10_q4eoWnhVFH_1200x1200.jpg",
    Info1:
      "https://prod-eurasian-res.popmart.com/default/crybaby_03_INuDISZCPr_1200x1054.jpg?x-oss-process=image/format,webp",
    Info2:
      "https://prod-eurasian-res.popmart.com/default/crybaby_01_O7cZG926Ni_1200x1952.jpg?x-oss-process=image/format,webp",
  },
];

const ProductListDetail = () => {
  const [quantities, setQuantities] = useState(
    Array(ProductList2.length).fill(0)
  );

  const handleAddToCart = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  return (
    <>
      <div className="pt-[90px]"></div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {ProductList2.map((product, index) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <div className="relative group">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-72 object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-80"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                {product.description}
              </p>
              <div className="flex items-center mb-2">
                <FaStar style={{ color: "#74C0FC" }} />
                <FaStar style={{ color: "#74C0FC" }} />
                <FaStar style={{ color: "#74C0FC" }} />
                <FaStar style={{ color: "#74C0FC" }} />
                <FaStar style={{ color: "#74C0FC" }} />
                <span className="text-xs ml-1">(99)</span>
              </div>
              <button
                onClick={() => handleAddToCart(index)}
                className="bg-blue-500 text-white text-xs font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductListDetail;
