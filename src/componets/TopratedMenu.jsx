import { categories } from "../data/toprated-menu";
import Container from "./Layout/Container";

const TopRatedMenu = () => {
  return (
    <Container className="mb-10">
      <h1 className="text-center relative pb-6 text-orange-400 font-bold text-[24px] md:text-[30px] lg:text-[36px] mb-[25px] before:content-[''] before:absolute before:w-[70px] before:h-[2px] before:bg-orange-400 before:top-[100%] before:left-[50%] before:translate-x-[-50%]">
        Top Food Categories
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            className="shadow-sm p-10 flex items-center justify-center rounded-md border"
            key={category.id}
          >
            <h3 className="text-xl font-bold mr-2">{category.name}</h3>
            <img
              className="h-[100px]"
              src={category.image}
              alt={category.image}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};
export default TopRatedMenu;
