import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Preview } from '../preview/Preview';
import { Team } from '../team/Team';
import { AppConfig } from '../utils/AppConfig';
import { Benefits } from './Benefits';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Plans } from './Plans';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Background>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <VerticalFeatures />
      <Benefits />
      <Preview />
      <Plans />
      <Contact />
      <Team />
      <Footer />
    </Background>
  </div>
);

export { Base };
