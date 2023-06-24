import * as React from 'react';
import styled from 'styled-components';

// -webkit- : 크롬
// -moz- : 파이어폭스

const Input = styled.input.attrs({ type: 'range' })`
  width: 100%;
  -webkit-appearance: none;
  background: transparent;
  &:focus{
    outline:none;
  }
  &::-webkit-slider-thumb{
    /* 크롬 thumb 스타일 */
    -webkit-appearance: none;
    background: white;
    height: 15px;
    width: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px black, 0px 0px 1px #0d0d0d;
    margin-top: -5px; // thumb 위치 조절
  }
  &::-moz-range-thumb {
    /* Firefox thumb 스타일 */
    box-shadow: 1px 1px 1px black, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 15px;
    width: 10px;
    border-radius: 10px;
    background: white;
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track{
    /* 크롬 bar 스타일 */
    width: 100%;
    height: 4px; 
    cursor: pointer; 
    box-shadow: 1px 1px 1px black, 0px 0px 1px black; 
    background: black; 
    border-radius: 1.3px; 
    border: 0.2px solid black; 
  }
  &::-moz-range-track{
    /* Firefox bar 스타일 */
    width: 100%; height: 8.4px; 
    cursor: pointer; 
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; 
    background: #3071a9; 
    border-radius: 1.3px; 
    border: 0.2px solid #010101; 
  }
}`;

export default function App() {
  return <Input />;
}
