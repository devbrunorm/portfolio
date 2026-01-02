import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';

export default function MainPage() {
  return (
    <div className="text-center">
      <Title text="Bruno Renzi Marques" />
      <Subtitle text="Data Engineer & Backend Developer" />
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button text="Email me" href="mailto:example@gmail.com" iconClass='fas fa-envelope' />
      </div>
    </div>
  )
}