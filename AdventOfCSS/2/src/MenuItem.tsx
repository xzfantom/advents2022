import React from 'react';
import styled from 'styled-components';
import { Plate } from './Plate';

const Content = styled.div`
  z-index: 3;
`;

const Name = styled.div`
  font-size: 1.125rem;
  line-height: 20px;
  margin: 0 0 16px 0;
  padding: 0;
`;

export const MenuItem = ({
  image,
  alt,
  name,
  price,
  count,
}: {
  image: string;
  alt: string;
  name: string;
  price: number;
  count: number;
}) => {
  return (
    <li>
      <Plate image={image} alt={alt} />
      <Content>
        <Name>{name}</Name>
        <p>{price}</p>
        {count ? <button>In cart</button> : <button>Add to cart</button>}
      </Content>
    </li>
  );
};
