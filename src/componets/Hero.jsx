import Container from "./Layout/Container";
const Hero = () => {
  return (
    <Container className="mb-12">
      <div className="relative">
        <span className="absolute block top-0 bottom-0 left-0 right-0 bg-black/50 z-[8]"></span>
        <div className="absolute z-[9] left-0 top-[50%] translate-y-[-50%] text-white ml-4 text-4xl  md:text-5xl lg:text-6xl font-bold px-4">
          <h1>
            Great <spam className="text-orange-400">Food</spam>
          </h1>

          <h1>
            <span className="text-orange-400">Enjoy</span> Life
          </h1>
        </div>
        <img
          className="h-[240px] lg:h-[400px] w-[100%] object-cover"
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Food"
        />
      </div>
    </Container>
  );
};

export default Hero;
