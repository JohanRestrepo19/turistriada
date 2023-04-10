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
      <button className="rounded-full font-bold mt-20 bg-gradient-to-r from-primary-light to-primary-base text-white px-20 py-2 text-xl hover:ring hover:ring-primary-light">
        Prueba gratis por 30 días
      </button>
    </div>
  </Section>
);

export { Plans };
