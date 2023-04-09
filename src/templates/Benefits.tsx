import { Card } from '../benefits/Card';
import { Section } from '../layout/Section';

const Benefits = () => (
  <Section title="Beneficios">
    <div className="flex flex-row justify-around">
      <Card
        title="Turista"
        firstBenefit="Focalización: Aplicativo diseñado especialmente para las ciudades de Pereira, Dosquebradas y Santa Rosa de Cabal."
        secondBenefit="Facilidad: Para encontrar información turística de las ciudades mencionadas."
      />
      <Card
        title="Empresario"
        firstBenefit="Focalización: Aplicativo diseñado especialmente para las ciudades de Pereira, Dosquebradas y Santa Rosa de Cabal."
        secondBenefit="Visualización e impacto: Para las empresas del sector turístico que usen nuestros servicios."
      />
    </div>
  </Section>
);

export { Benefits };
