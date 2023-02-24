import { foods } from "../data/foods";
import { useState } from "react";
import Container from "./Layout/Container";

const Foods = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const categories = Array.from(new Set(foods.map((food) => food.category)));
  const prices = Array.from(new Set(foods.map((food) => food.price))).sort();

  let filteredFoods = selectedCategory
    ? foods.filter((food) => food.category === selectedCategory)
    : foods;
  filteredFoods = selectedPrice
    ? filteredFoods.filter((food) => food.price === selectedPrice)
    : filteredFoods;

  return (
    <Container className="mb-12">
      <header>
        <h1 className="text-center relative pb-6 text-orange-400 font-bold text-[24px] md:text-[30px] lg:text-[36px] mb-[25px] before:content-[''] before:absolute before:w-[70px] before:h-[2px] before:bg-orange-400 before:top-[100%] before:left-[50%] before:translate-x-[-50%]">
          Top Rated Menu Items
        </h1>
      </header>

      {/* filter */}
      <div className="mx-[auto] p-4 mb-4">
        <div className="flex items-center mb-[30px]">
          <strong>Filter By Category: </strong>
          <ul className="flex">
            <button
              onClick={() => setSelectedCategory("")}
              className={`py-1 px-4  hover:bg-orange-500 rounded-full text-white ml-2 ${
                !selectedCategory ? "bg-orange-500" : "bg-orange-400"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`py-1 px-4  hover:bg-orange-500 rounded-full text-white ml-2 ${
                    selectedCategory === category
                      ? "bg-orange-500"
                      : "bg-orange-400"
                  }`}
                >{`${category.charAt(0).toUpperCase()}${category.slice(
                  1
                )}`}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <strong>Filter By Price: </strong>
          <ul className="flex">
            <button
              onClick={() => setSelectedPrice("")}
              className={`py-1 px-4  hover:bg-orange-500 rounded-full text-white ml-2 ${
                !selectedPrice ? "bg-orange-500" : "bg-orange-400"
              }`}
            >
              All
            </button>
            {prices.map((price) => (
              <li key={price}>
                <button
                  onClick={() => setSelectedPrice(price)}
                  className={`py-1 px-4  hover:bg-orange-500 rounded-full text-white ml-2 ${
                    selectedPrice === price ? "bg-orange-500" : "bg-orange-400"
                  }`}
                >
                  {price}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mx-[auto] px-4">
        {filteredFoods.map((food) => (
          <div className="group relative rounded-lg overflow-hidden shadow-md hover:scale-105 transition-all duration-300">
            <img
              className="w-[100%] h-[250px] object-cover"
              src={food.image}
              alt={food.name}

            />
            <span className="absolute inline-block bg-orange-400 text-white px-4 py-1 rounded-full top-[10px] left-[10px] border-white border-1 text-[12px]">
              {food.category}
            </span>
            <div className="flex justify-between items-center bg-white py-2 px-4 rounded-sm">
              <h3>{food.name}</h3>
              <span className="text-lg text-white bg-orange-500 rounded-3xl px-2">
                {food.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Foods;
