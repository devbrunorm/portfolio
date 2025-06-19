type SubtitleProps = {
  text: string;
};

export default function Title({text}: SubtitleProps) {
  return (
    <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">{text}</p>
  );
}