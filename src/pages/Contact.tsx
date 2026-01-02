import Button from '../components/Button';
import Title from '../components/Title';

const items = [
    { name: 'GitHub', href: 'https://github.com', bgColor: 'black', iconClass: 'fab fa-github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/', bgColor: 'blue', iconClass: 'fab fa-linkedin' },
    { name: 'Email', href: 'mailto:example@gmail.com', iconClass: 'fas fa-envelope' },
].map(item => 
  <Button key={item.name} text={item.name} href={item.href} bgColor={item.bgColor} iconClass={item.iconClass} />
);

export default function Contact() {
  return (
    <div>
      <Title text="Contact" />
      <br />
      <div className="flex justify-center items-center p-6 lg:px-8 gap-6">
        {items}
      </div>
    </div>
  )
}
