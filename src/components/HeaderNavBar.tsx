import HeaderNavBarItem from "./HeaderNavBarItem";

const items = [
    { name: 'Education', href: '#' },
    { name: 'Experience', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Contact', href: '#' },
].map(item => 
    <HeaderNavBarItem name={item.name} href={item.href} />
);

export default function HeaderNavBar() {
  return (
    <nav className="flex justify-center p-6 lg:px-8" aria-label="Global">
      <div className="hidden lg:flex lg:gap-x-12">{items}</div>
    </nav>
  );
}