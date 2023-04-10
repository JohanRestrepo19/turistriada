import { Card } from '../benefits/Card';
import { Section } from '../layout/Section';

const Plans = () => (
  <Section title="Nuestros Planes">
    <div className="flex flex-wrap justify-evenly gap-y-4">
      <Card
        title="Turista"
        price="1 USD /mes"
        benefits={[
          'Obtén guías turísticas personalizadas',
          'Recibe notificaciones de eventos cercanos',
          'Recibe notificaciones de las promociones recientes',
        ]}
      />
      <Card
        title="Empresario"
        price="Contáctanos"
        benefits={[
          'Aparece en la sección de lugares recomendados',
          'Publica los productos/servicios que ofreces',
          'Publica tus promociones',
        ]}
      />
    </div>
    <div className="flex justify-center">
      <button className="rounded-full mt-8 bg-primary-base text-white px-9 py-1 text-xl hover:bg-primary-dark">
        Prueba gratis por 30 días
      </button>
    </div>
  </Section>
);

export { Plans };
