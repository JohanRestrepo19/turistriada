import { Section } from '../layout/Section';
import { TeamMember } from './TeamMember';

const Team = () => {
  return (
    <Section title="Nuestro Equipo">
      <div className="flex flex-wrap gap-y-4 justify-evenly items-center">
        <TeamMember
          imageSrc="/assets/images/members/brandon.png"
          name="Brandon Palacio"
          role="Software Developer"
          github="https://github.com/Brandddd"
        />

        <TeamMember
          imageSrc="/assets/images/members/johan.png"
          name="Johan Restrepo"
          role="Software Developer"
          github="https://github.com/JohanRestrepo19"
        />

        <TeamMember
          imageSrc="/assets/images/members/karen.png"
          name="Karen Grajales"
          role="Software Developer"
          github="https://github.com/KarenG19"
        />
      </div>
    </Section>
  );
};

export { Team };
