import HeaderNavBarItem from "./HeaderNavBarItem";

const items = [
    { name: 'Home', href: '/' },
    { name: 'Education', href: '/education' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
].map(item => 
    <HeaderNavBarItem name={item.name} href={item.href} />
);

export default function HeaderNavBar() {
  return (
    <nav className="flex justify-center bg-sky-600 p-6 lg:px-8" aria-label="Global">
      <div className="hidden lg:flex lg:gap-x-12">{items}</div>
    </nav>
  );
}