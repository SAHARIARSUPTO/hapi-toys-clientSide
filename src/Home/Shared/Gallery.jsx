import image1 from "./gallery1.jpg";
import image2 from "./gallery2.jpg";
import image3 from "./gallery3.jpg";
import image4 from "./gallery4.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <p className="text-[#f74356] font-extrabold text-center text-5xl m-5">Hey Kiddo,Have you ever watched The Toy Story?</p>
      <div className="carousel w-2/3 mx-auto py-10">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={image1} className="w-full h-auto rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={image2} className="w-full h-auto rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={image3} className="w-full h-auto rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={image4} className="w-full h-auto rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

</div>
    
  );
};

export default Gallery;
