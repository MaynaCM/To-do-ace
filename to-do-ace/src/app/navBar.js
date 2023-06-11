import { BrowserRouter, Link, Route } from 'react-router-dom';


function NavbarLayout() {
    return (
      <nav className='navBar'>
        <ul className="flex flex-row gap-4 items-end justify-end px-6 text-white w-full">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    );
}

export default NavbarLayout;