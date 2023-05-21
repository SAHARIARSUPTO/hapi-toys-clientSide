import  { useState, useEffect } from "react";
import banner from "./Banner.jpg";
import toys from "./toys.jpg";
import "./Banner.css";

const Banner = () => {
  const [countdown, setCountdown] = useState({
    days: 1,
    hours: 10,
    minutes: 24,
    seconds: 54
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        let { days, hours, minutes, seconds } = prevCountdown;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            } else {
              hours = 23;

              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div>
      <div>
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold">Hapi Toys</h1>
              <p className="mb-5 text-5xl">The Universe of Toys</p>
              <button htmlFor="my-modal-6" className="btn btn-warning">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={toys} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">
                Lets be happy with Hapi Toys!
              </h1>
              <p className="py-6">
                Welcome to Hapi Toy, the ultimate destination for all your toy
                needs! Step into a world of wonder and imagination as we bring
                you the finest selection of toys that will captivate both the
                young and the young at heart.
              </p>
              <button className="btn btn-warning">Get Started</button>
            </div>
          </div>
        </div>
      </div>
<p className="text-primary font-extrabold text-center text-5xl m-5 my-5">Flash Sale Coming in</p>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center py-10">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": countdown.days }}>
              {countdown.days}
            </span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": countdown.hours }}>
              {countdown.hours}
            </span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": countdown.minutes }}>
              {countdown.minutes}
            </span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": countdown.seconds }}>
              {countdown.seconds}
            </span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Banner;
