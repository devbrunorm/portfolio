type HeaderProps = {
  name: string;
  href: string;
};

export default function HeaderNavBarItem({name, href}: HeaderProps) {
  return (
    <a href={href} className="text-sm/6 font-semibold hover:bg-sky-500 text-white text-gray-900">{name}</a>
  );
}