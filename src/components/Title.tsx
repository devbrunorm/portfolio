type TitleProps = {
  text: string;
};

export default function Title({text}: TitleProps) {
  return (
    <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">{text}</h1>
  );
}