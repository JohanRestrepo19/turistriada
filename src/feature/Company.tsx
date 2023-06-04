import className from 'classnames';
import { useRouter } from 'next/router';

type ICompanyProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const Company = (props: ICompanyProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-5xl text-black font-bold">{props.title}</h3>
        <div className="mt-6 text-xl text-justify leading-8">
          {props.description}
        </div>
        <a href="https://turistriada.web.app">
          <button className="rounded-full mt-8 px-9 py-2 border-2 text-xl text-accent border-accent hover:border-primary-base hover:text-primary-base hover:ring hover:ring-primary-light">
            Descubre más
          </button>
        </a>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { Company };
