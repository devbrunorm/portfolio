type HeaderNavBarItemProps = {
  name: string;
  href: string;
};

export default function HeaderNavBarItem({ name, href }: HeaderNavBarItemProps) {
  return (
    <a href={href} className="text-sm/6 font-semibold text-white hover:text-sky-950 hover:underline">{name}</a>
  );
}