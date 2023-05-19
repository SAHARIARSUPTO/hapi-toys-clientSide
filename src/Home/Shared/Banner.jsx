import banner from "./Banner.jpg";
import toys from "./toys.jpg"
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div>
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: `url(${banner})` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold">Hapi Toys</h1>
              <p className="mb-5 text-5xl">
              The Universe of Toys
              </p>
              <button className="btn btn-warning">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    <div>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={toys} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Lets be happy with Hapi Toys!</h1>
      <p className="py-6">Welcome to Hapi Toy, the ultimate destination for all your toy needs! Step into a world of wonder and imagination as we bring you the finest selection of toys that will captivate both the young and the young at heart.</p>
      <button className="btn btn-warning">Get Started</button>
    </div>
  </div>
</div>
    </div>

    </div>
  );
};

export default Banner;
// text-[#f74356]