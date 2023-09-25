const Banner = () => {
    return (
      <div
        className="hero h-[70vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/hsmWc91/dontaion.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-10 text-5xl text-[#0B0B0B] font-bold">I Grow By Helping People In Need</h1>
          <div className="md:w-[440px] relative justify-center mx-auto">
              <input type="text" placeholder="Search here..." className="input input-bordered w-full pr-16" /> 
              <button className="btn btn-primary bg-[#FF444A] absolute top-0 right-0 rounded-l-none normal-case">Search</button>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  