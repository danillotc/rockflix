/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/button';
import InputWrapper from './styles';

export default () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#C3A109',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setValor(event.target.getAttribute('name'), event.target.value);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (response) => {
        const json = await response.json();
        setCategorias([...json]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Quer cadastrar a categoria "
        {valores.nome}
        ", hm?
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);
        setValores(valoresIniciais);
      }}
      >

        <div>
          <InputWrapper>
            <FormField
              label="Nome da Categoria"
              input
              type="text"
              name="nome"
              value={valores.nome}
              onChange={handleChange}
            />

            <FormField
              label="Cor"
              input
              type="color"
              name="cor"
              value={valores.cor}
              onChange={handleChange}
            />
          </InputWrapper>

          <InputWrapper>
            <FormField
              label="Descrição"
              input={false}
              type="text"
              name="descricao"
              value={valores.descricao}
              onChange={handleChange}
            />
          </InputWrapper>
        </div>

        <Button>Cadastrar!</Button>
      </form>

      <ul>
        {categorias.map((categoria, index) => <li key={`${categoria}${index}`}>{categoria.nome}</li>)}
      </ul>

      <Link to="/rockflix">Voltar para o ROCKFLIX!</Link>
    </PageDefault>
  );
};
