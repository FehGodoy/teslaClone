import React from 'react';

import { Container,Heading, Buttons } from './styles';

interface Props {
  label:string
  descritpion: string
}

const DefaultOverlayContent: React.FC<Props> = ({
  label,descritpion
}) => {
  return (
    <Container>
      <Heading>
          <h1>{label}</h1>
          <h2>{descritpion}</h2>
      </Heading>

      <Buttons>
        <button>
          Custom Order
        </button>
        <button className="white">
          Existing Inventory
        </button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
