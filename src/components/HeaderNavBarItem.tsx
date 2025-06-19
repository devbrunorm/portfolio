type HeaderProps = {
  name: string;
  href: string;
};

export default function HeaderNavBarItem({name, href}: HeaderProps) {
  return (
    <a href={href} className="text-sm/6 font-semibold text-gray-900">{name}</a>
  );
}