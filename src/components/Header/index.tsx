import React, { Link } from 'react-router-dom'
import './estilo.css'

const Header = () => {
    return ( 
        <header>
            <div>
                <img src="" alt="" />
            </div>
            <div className=''>
                <button><Link to={'/'}>Home</Link></button>
                <button><Link to={'/sobre'}>Sobre</Link></button>
                <button><Link to={'/contato'}>Contato</Link></button>
                <button><Link to={'/produto'}>Produto</Link></button>
            </div>
        </header>
        );
}
 
export default Header;