import './CartLogo.css'

function CartLogo ({handleOnClick}) {
    return (
        <div className='cartLogoContainer' onClick={handleOnClick}>
            <img src='src/assets/CartLogo/shopping-cart.png'/>
        </div>
    )
}

export { CartLogo }