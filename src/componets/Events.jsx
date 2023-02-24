import Container from "./Layout/Container";

const Events = () => {
  return (
    <Container className="mb-8">
      <div className="columns-1 md:columns-3 gap-6">
        <div className="overflow-hidden rounded-md relative mb-4">
          <span className="absolute top-0 bottom-0 left-0 right-0 bg-black/70"></span>
          <img
            className="w-[100%] h-[250px] object-cover"
            src="https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Food"
          />

          <div className="absolute top-[50%] left-10 translate-y-[-50%]">
            <h1 className="text-[24px] md:text-[30px] lg:text-[36px] text-white font-bold mb-2">
              Delicious Winter
            </h1>
            <p className="text-white">A special winter food festival</p>
            <button className="font-bold bg-white rounded-full border border-white px-4 py-2 mt-10 hover:bg-gray-300 transition">
              Order Now
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-md relative mb-4">
          <span className="absolute top-0 bottom-0 left-0 right-0 bg-black/70"></span>
          <img
            className="w-[100%] h-[250px] object-cover"
            src="https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Food"
          />

          <div className="absolute top-[50%] left-10 translate-y-[-50%]">
            <h1 className="text-[24px] md:text-[30px] lg:text-[36px] text-white font-bold mb-2">
              Hot Spicy Cake
            </h1>
            <p className="text-white">Lorem ipsum dolor sit.</p>
            <button className="font-bold bg-white rounded-full border border-white px-4 py-2 mt-10 hover:bg-gray-300 transition">
              Order Now
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-md relative mb-4">
          <span className="absolute top-0 bottom-0 left-0 right-0 bg-black/70"></span>
          <img
            className="w-[100%] h-[250px] object-cover"
            src="https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Food"
          />

          <div className="absolute top-[50%] left-10 translate-y-[-50%]">
            <h1 className="text-[24px] md:text-[30px] lg:text-[36px] text-white font-bold mb-2">
              Delicious Winter
            </h1>
            <p className="text-white">Lorem ipsum dolor sit.</p>
            <button className="font-bold bg-white rounded-full border border-white px-4 py-2 mt-10 hover:bg-gray-300 transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Events;
