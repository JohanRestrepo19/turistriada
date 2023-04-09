import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
};

const Background = (props: IBackgroundProps) => (
  <>
    <div className="layer">{props.children}</div>

    <style jsx>
      {`
        .layer {
          aspect-ratio: 16/9;
          background-image: url('/assets/images/blurry-turistriada.svg');
          background-repeat: round repeat;
          background-position: left top;
          background-size: contain;
        }
      `}
    </style>
  </>
);

export { Background };
