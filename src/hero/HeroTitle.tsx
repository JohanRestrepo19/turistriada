import { ReactNode } from 'react';

type IHeroTitleProps = {
  title: ReactNode;
  description: string;
};

const HeroTitle = (props: IHeroTitleProps) => (
  <header className="text-center">
    <h1 className="text-6xl text-gray-900 font-bold leading-hero">
      {props.title}
    </h1>
    <div className="text-xl my-4">{props.description}</div>
  </header>
);

export { HeroTitle };
