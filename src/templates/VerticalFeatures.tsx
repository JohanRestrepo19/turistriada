import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section>
    <VerticalFeatureRow
      title="¿Eres Turista?"
      description="¿Te encuentras en Pereira, Dosquebradas o Santa Rosa de Cabal? En Turistriada
                    podrás encontrar información de los lugares de interés, restaurantes y hospedajes
                    de estas ciudades. Además podrás compartir tus experiencias, comentar y calificar los
                    lugares que visites y podrás ver las promociones de las empresas turísticas
                    registradas en la aplicación."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="¿Eres Empresa?"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
