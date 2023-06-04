import { Company } from '../feature/Company';
import { Tourist } from '../feature/Tourist';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <div id="features">
    <Section>
      <Tourist
        title="¿Eres Turista?"
        description="¿Te encuentras en Pereira, Dosquebradas o Santa Rosa de Cabal? En Turistriada
                    podrás encontrar información de los lugares de interés, restaurantes y hospedajes
                    de estas ciudades. Además podrás compartir tus experiencias, comentar y calificar los
                    lugares que visites y podrás ver las promociones de las empresas turísticas
                    registradas en la aplicación."
        image="/assets/images/tourist.png"
        imageAlt="First feature alt text"
      />
      <Company
        title="¿Eres Empresa?"
        description="¿Tienes una empresa del sector turístico en Pereira, Dosquebradas o Santa Rosa de Cabal?
                    En Turistriada podrás publicar tus productos/servicios y publicar tus promociones. 
                    Estar registrado en Turistriada te permitirá aparecer en la sección de recomendados de nuestros 
                    usuarios y así poder tener mayor visualización."
        image="/assets/images/company.png"
        imageAlt="Second feature alt text"
        reverse
      />
    </Section>
  </div>
);

export { VerticalFeatures };
