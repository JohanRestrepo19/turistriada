type IPreviewImageItemProps = {
  imageSrc: string;
  desc: string;
};

const PreviewImageItem = (props: IPreviewImageItemProps) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <img
        src={props.imageSrc}
        className="w-[485px] h-[485px] shadow-lg rounded-md"
        alt="app-preview"
      />
      <p className="font-semibold">{props.desc}</p>
    </div>
  );
};

export { PreviewImageItem };
