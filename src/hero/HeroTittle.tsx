import { ReactNode } from 'react';

type IHeroTittleProps = {
  title: ReactNode;
  description: string;
};

const HeroTittle = (props: IHeroTittleProps) => (
  <header className="text-center">
    <h1 className="text-6xl text-gray-900 font-bold leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl my-4">{props.description}</div>
  </header>
);

export { HeroTittle };
