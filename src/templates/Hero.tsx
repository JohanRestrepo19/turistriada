import Link from 'next/link';

import { HeroTitle } from '../hero/HeroTitle';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <div id="hero">
    <Section yPadding="py-7" disableDivider>
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#features">
            <a className="hover:text-primary-dark">Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="#benefits">
            <a className="hover:text-primary-dark">Beneficios</a>
          </Link>
        </li>
        <li>
          <Link href="#plans">
            <a className="hover:text-primary-dark">Planes</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a className="hover:text-primary-dark">Contacto</a>
          </Link>
        </li>
        <li>
          <Link href="https://turistriada.web.app">
            <a className="hover:text-primary-dark">Regístrate</a>
          </Link>
        </li>
        <li>
          <Link href="https://turistriada.web.app">
            <a className="hover:text-primary-dark">Iniciar Sesión</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="py-2" disableDivider>
      <HeroTitle
        title={
          <>
            {
              '¡Descubre un mundo lleno de\nlugares fantásticos y\ndesconocidos de nosotros para\ntodos!\n'
            }
          </>
        }
        description="Un sitio web hecho especialmente para el turismo en Pereira, Dosquebradas y Santa Rosa de Cabal."
      />
    </Section>
  </div>
);

export { Hero };
