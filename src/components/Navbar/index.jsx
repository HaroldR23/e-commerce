import { Logo } from '../../assets/Logo'
import { CartLogo } from '../../assets/CartLogo'
import { Search } from './Search'
import './Navbar.css'
import { useContext } from 'react'
import { SearchContext } from '../../contexts/SearchContext'

function Navbar() {
    const {
        setIsCartOpen,
        isCartOpen
    } = useContext(SearchContext);

    const handleOnClick = () => {
        setIsCartOpen(isCartOpen ? false : true);
    }
    return (
        <div className='NavbarContainer'>
            <Logo />
            <Search />
            <div id="cartLogo">
                <CartLogo  handleOnClick={handleOnClick} />
            </div>
        </div>
    )
}

export { Navbar }