import Header from './components/Header';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Button from './components/Button';

function App() {

  return (
    <>
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <Title text="Bruno Renzi Marques" />
            <Subtitle text="Data Engineer & Backend Developer" />
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button text="Contact me" href="#" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
