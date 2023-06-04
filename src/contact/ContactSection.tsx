import { ReactNode } from 'react';

import className from 'classnames';
import { useRouter } from 'next/router';

type IContactSectionProps = {
  description: ReactNode;
  image: string;
  imageAlt: string;
};

const ContactSection = (props: IContactSectionProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center'
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <div className="mt-6 text-xl leading-8">{props.description}</div>

        <button className="rounded-full font-bold mt-8 bg-gradient-to-r from-primary-light to-primary-base text-white px-20 py-2 text-xl hover:ring hover:ring-primary-light">
          Contáctanos
        </button>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { ContactSection };
