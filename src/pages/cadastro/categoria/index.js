import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';

export default () => {
    return (
        <PageDefault>
            <h1>
                Quer cadastrar uma categoria, hm?
            </h1>

            <form >
                <label>
                    Nome da Categoria:
                    <input type="text"/>
                </label>

                <br/>    
                <button>Cadastrar!</button>
            </form>

        <Link to="/">Voltar para o ROCKFLIX!</Link>
        </PageDefault>
    )
}