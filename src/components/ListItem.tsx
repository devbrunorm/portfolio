import Subtitle from './Subtitle';

type ListItemProps = {
  name: string;
  description: string;
};

export default function ListItem({name, description}: ListItemProps) {
  return (
    <li className="text-sm/6 font-semibold">
      <Subtitle text={name} />
      <p className="font-normal">{description}</p>
    </li>
  );
}