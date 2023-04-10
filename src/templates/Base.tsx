import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Team } from '../team/Team';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Benefits } from './Benefits';
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
      <Banner />
      <Benefits />
      <Plans />
      <Team />
      <Footer />
    </Background>
  </div>
);

export { Base };
