import { Section } from '../layout/Section';
import { PreviewImageItem } from './PreviewImageItem';

const Preview = () => {
  return (
    <Section title="Vista Previa">
      <div className="flex flex-wrap gap-y-8 justify-evenly items-center">
        <PreviewImageItem
          imageSrc="/assets/images/preview/app-preview-1.png"
          desc="Ver detalles de publicación de lugar"
        />
        <PreviewImageItem
          imageSrc="/assets/images/preview/app-preview-2.png"
          desc="Ver perfil usuarios"
        />
        <PreviewImageItem
          imageSrc="/assets/images/preview/app-preview-3.png"
          desc="Ver perfil empresas"
        />
        <PreviewImageItem
          imageSrc="/assets/images/preview/app-preview-4.png"
          desc="Publicar productos o servicios para las empresas"
        />
      </div>
    </Section>
  );
};

export { Preview };
