import className from 'classnames';
import { useRouter } from 'next/router';

type ITouristProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const Tourist = (props: ITouristProps) => {
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
        <button className="rounded-full mt-8 bg-primary-base text-white px-9 py-1 text-xl hover:bg-primary-dark">
          ¡Crea tu cuenta!
        </button>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { Tourist };
