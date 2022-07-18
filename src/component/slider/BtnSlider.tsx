import React from 'react';
import './Slider.css';
import leftArrow from '../../component/img/arrow-up-small-footer.svg';

interface Props {
  direction:any;
  moveSlide:any;
  }

export default function BtnSlider({ direction, moveSlide }:Props) {

  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <img src={direction === 'next' ? leftArrow : leftArrow} />
    </button>
  );
}