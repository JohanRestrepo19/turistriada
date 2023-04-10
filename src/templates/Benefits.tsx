import { Card } from '../benefits/Card';
import { Section } from '../layout/Section';

const Benefits = () => (
  <Section title="Beneficios">
    <div className="flex flex-wrap justify-around gap-y-4">
      <Card
        title="Turista"
        benefits={[
          'Focalización: Aplicativo diseñado especialmente para las ciudades de Pereira, Dosquebradas y Santa Rosa de Cabal.',
          'Facilidad: Para encontrar información turística de las ciudades mencionadas.',
        ]}
      />
      <Card
        title="Empresario"
        benefits={[
          'Focalización: Aplicativo diseñado especialmente para las ciudades de Pereira, Dosquebradas y Santa Rosa de Cabal.',
          'Visualización e impacto: Para las empresas del sector turístico que usen nuestros servicios.',
        ]}
      />
    </div>
  </Section>
);

export { Benefits };
