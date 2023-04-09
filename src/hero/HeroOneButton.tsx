import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-6xl text-gray-900 font-bold leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl my-4">{props.description}</div>
  </header>
);

export { HeroOneButton };
