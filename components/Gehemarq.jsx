import Marquee from "react-fast-marquee";

const Gehemarq = () => {
  return (
    <section className="w-full rotate-[-2.2deg]">
      <Marquee>
        <div className="w-full py-3 flex items-center bg-[#654192]">
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
          <Text />
        </div>
      </Marquee>
    </section>
  );
};

export default Gehemarq;

const Text = () => {
  return (
    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-7xl mx-5 font-bold">
      Gengar!
    </h1>
  );
};
