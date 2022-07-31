import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import PropTypes from 'prop-types';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import './styles/Carousel.css';

export default function Carousel(props) {
  const { perView, autoplay, children } = props;

  useEffect(() => {
    new Glide('.glide', { type: 'carousel', autoplay, perView, hoverpause: true }).mount();
  }, []);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {children.map((element, index) => (
            <li key={index} className="glide__slide">
              {element}
            </li>
          ))}
        </ul>
        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
            prev
          </button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
            next
          </button>
        </div>
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  autoplay: false
};

Carousel.propTypes = {
  perView: PropTypes.number.isRequired,
  autoplay: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};
