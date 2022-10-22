const Header = () => {
  return (
    <div className="p-5 bg-black text-white mb-5 ">
      <div className="flex-wide">
        <div className="justify-self-start">
          <span className="font-extrabold cursor-pointer">Dharura</span>
        </div>
      </div>

      <div className="text-center p-10 text-white">
        <div className="text-2xl lg:text-5xl font-semibold">
          An emergency information <br />
          management system software <br />
          as a service
        </div>
        <div>
          <span className="block ">
            Turn your room with ams into a lot more minimalist
          </span>
          <span>and modern with ease and speed</span>
        </div>
        <div className="p-10">
          <button className="bg-white text-black p-2 rounded-sm">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
