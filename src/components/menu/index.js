import React from 'react' 
import { Link } from 'react-router-dom'
import "./menu.css"
import Logo from '../../assets/img/rockflixlogo.png'
import Button from '../button'

export default () => {
    return(
        <nav className="Menu">
            <Link to="/rockflix">
                <img className="Logo" src={Logo} alt="RockFlix Logo"/>
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>    
        </nav>
    )
}