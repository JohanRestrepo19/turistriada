import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-primary-base inline-flex items-center ${fontStyle}`}>
      <img
        className="h-20 w-auto"
        src="assets\images\logo.png"
        alt="Logo"
      ></img>
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
