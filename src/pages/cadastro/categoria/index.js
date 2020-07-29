import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField'


export default () => {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#C3A109'
    }
    
    const [categorias, setCategorias] = useState([])
    const [valores, setValores] = useState(valoresIniciais);

    function setValor (chave, valor) {
        setValores({
            ...valores,
            [chave]: valor
        })
    }

    function handleChange(event) {
        setValor(event.target.getAttribute('name'), event.target.value)
    }

    return (
        <PageDefault>
            <h1>
                Quer cadastrar a categoria "{valores.nome}", hm?
            </h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    valores
                ]);
                setValores(valoresIniciais)  
            }}>

                <div>
                    <FormField 
                        label="Nome da Categoria"
                        type="text"
                        name="nome"
                        value={valores.nome}
                        onChange={handleChange}                    
                    />

                    <FormField 
                        label="Descrição"
                        type="text"
                        name="descricao"
                        value={valores.descricao}
                        onChange={handleChange}                    
                    />

                    <FormField
                        label="Cor"
                        type="color"
                        name="cor"
                        value={valores.cor}
                        onChange={handleChange}                    
                    />
                </div>
                    
                <button>Cadastrar!</button>
            </form>

            <ul>
                {categorias.map((categoria, index) => 
                    <li key={`${categoria}${index}`}>{categoria.nome}</li>
                )}
            </ul>

        <Link to="/rockflix">Voltar para o ROCKFLIX!</Link>
        </PageDefault>
    )
}