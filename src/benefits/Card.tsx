import React from 'react';

type CardProps = {
  title: string;
  firstBenefit: string;
  secondBenefit: string;
};

const Card = (props: CardProps) => (
  <div className="container flex flex-col bg-card rounded-md p-8 w-96 shadow-2xl">
    <h2 className="text-2xl text-black font-bold m-4 self-center">
      {props.title}
    </h2>
    <p className="text-lg text-black p-2 m-2">{props.firstBenefit}</p>
    <p className="text-lg text-black p-2 m-2">{props.secondBenefit}</p>
  </div>
);

export { Card };
