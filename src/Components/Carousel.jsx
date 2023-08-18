
import Slider from 'react-slick';
import Hero from './Hero';
import 'slick-carousel/slick/slick.css'; // Import the carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import the carousel theme (optional)

const carouselImages = [
    {
        url: 'mfk.jpg'
    },
    {
        url: 'jo malone cologne.jpg'
    },
    {
        url: 'jo malone.jpg.jpg'
    },
    {
        url: 'mfk.jpg'
    }
]

const SlickCarousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 3000, // Transition speed (in milliseconds)
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    fade: false // Number of slides to scroll at a time
    // Add more settings as needed
  };

  return (
    <div className="w-full  mx-auto">
      <Slider {...settings}>
        {/* <div>
          <img src="./src/images/mfk.jpg" alt="Image 1" />
          <p>Image 1</p>
        </div>
        <div>
          <img src="./src/images/jo malone.jpg" alt="Image 2" />
          <p>Image 2</p>
        </div>
        Add more slides with images and content as needed */}
        {carouselImages.map((item, i) => <Hero url={item.url} key={i}/>)}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
