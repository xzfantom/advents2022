import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 148px;
  width: 148px;
  z-index: 2;
  position: relative;
  top: -15px;
`;

export const Plate = ({ image, alt }: { image: string; alt: string }) => {
  return <Img src={'./images/' + image} alt={alt} />;
};
