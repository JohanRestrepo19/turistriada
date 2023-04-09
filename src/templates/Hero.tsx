import Link from 'next/link';

import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <>
    <Section yPadding="py-7">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a className="hover:text-primary-dark">Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="hover:text-primary-dark">Beneficios</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="hover:text-primary-dark">Planes</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="hover:text-primary-dark">Contacto</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="hover:text-primary-dark">Regístrate</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="hover:text-primary-dark">Iniciar Sesión</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="py-2">
      <HeroOneButton
        title={
          <>
            {
              'Descubre Un Mundo Lleno De\nLugares Fantásticos Y\nDesconocidos De Nosotros Para\nTodos\n'
            }
          </>
        }
        description="Una app hecha especialmente para el turismo en Pereira, Dosquebradas y Santa Rosa de Cabal"
      />
    </Section>
  </>
);

export { Hero };
