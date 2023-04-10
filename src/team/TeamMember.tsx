type ITeamMemberProps = {
  imageSrc: string;
  name: string;
  role: string;
};

const TeamMember = (props: ITeamMemberProps) => {
  return (
    <div className="flex flex-col items-center ">
      <img
        src={props.imageSrc}
        alt={`Imagen del miembro: ${props.name}`}
        className="w-[170px] h-[170px] rounded-full"
      />
      <h2 className=" text-text-primary font-bold">{props.name}</h2>
      <h3 className=" text-text-secondary font-semibold">{props.role}</h3>
    </div>
  );
};

export { TeamMember };
