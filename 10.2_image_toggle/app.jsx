import React, { useRef } from 'react';
import { render } from 'react-dom';
import './App.css';

const img1 = 'https://images.pokemontcg.io/base1/24.png'
const img2 = 'https://images.pokemontcg.io/base1/4.png'
const img3 = 'https://images.pokemontcg.io/base1/42.png'
const img4 = 'https://images.pokemontcg.io/base1/2.png'

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
  const imageRef = useRef(null);

  return (
    <img 
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src= primaryImg;
      }}
      src={primaryImg} 
      alt=""
      ref={imageRef}
    />
  )
}

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg={img1}
        secondaryImg={img2}
        alt="" />
      &nbsp; &nbsp; &nbsp;
      <ImageToggleOnMouseOver
        primaryImg={img3}
        secondaryImg={img4}
        alt="" />
    </div>
  )
}

const App = () => {

  return (
    <div>
      <ImageChangeOnMouseOver/>
    </div>
  );
};

export default App;