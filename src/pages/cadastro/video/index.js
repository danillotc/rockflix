import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';

export default () => {
    return (
        <PageDefault>
            <h1>
                Quer cadastrar um vídeo, né?
            </h1>

        <Link to="/cadastro/categoria">Cadastrar nova categoria</Link>
        </PageDefault>
    )
}