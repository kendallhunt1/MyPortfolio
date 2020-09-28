import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './MySkills.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
          
        <Carousel.Item>
          {/* <img className="d-block w-100" alt="JavaScript" /> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="" alt="React" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="" alt="CSS3" />
        </Carousel.Item>

      </Carousel>
    );
  };

  export default ControlledCarousel;