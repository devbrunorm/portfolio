import { Link } from 'react-router-dom';

type HeaderNavBarItemProps = {
  id: string;
  text: string;
};

export default function HeaderNavBarItem({ id, text }: HeaderNavBarItemProps) {
  return (
    <Link
      to={`/item/${id}`}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-sky-500 hover:text-white"
    >
      {text}
    </Link>
  );
}