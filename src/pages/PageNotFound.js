import PageNotFoundImg from '../assets/images/pagenotfound.jpg';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { UseTitle } from '../hooks/UseTitle';

export const PageNotFound = () => {

  const pageTitle = UseTitle("Page Not Found");
    
  return (
    <main>
      <section className = "flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404 , Oops!</p>
          <div lclassName = "w-96">
            <img className="rounded min-w-80 h-auto" src={PageNotFoundImg} alt= "404 Page Not Found " />
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to = "/">
            <Button>Back To Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
