import React from 'react' 
import "./menu.css"
import Logo from '../../assets/img/rockflixlogo.png'
import Button from '../button'

export default () => {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="RockFlix Logo"/>
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>    
        </nav>
    )
}