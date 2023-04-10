import React from 'react';

import { CheckIcon } from './CheckIcon';

type CardProps = {
  title: string;
  price?: string;
  benefits: string[];
};

const Card = (props: CardProps) => (
  <div className="container flex flex-col bg-card rounded-md p-8 w-96 shadow-2xl">
    <h2 className="text-2xl text-black font-bold m-4 self-center">
      {props.title}
    </h2>

    {props.price && (
      <h1 className="text-2xl text-black font-bold mb-2 mt-2 self-center">
        {props.price}
      </h1>
    )}

    {props.benefits.map((benefit, index) => (
      <div className="flex flex-row mb-4 mt-2" key={index}>
        <CheckIcon />
        <p className="text-lg text-black mx-2">{benefit}</p>
      </div>
    ))}
  </div>
);

export { Card };
