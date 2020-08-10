/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import { VideoButton } from '../../../components/button';
import InputWrapper from './styles';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';

export default () => {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#C3A109',
  };

  const { valores, handleChange, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://rockflix-backend.herokuapp.com/categorias';
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
        {valores.titulo}
        ", hm?
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);
        categoriesRepository.create({
          titulo: valores.titulo,
          cor: valores.cor,
          link_extra: { text: valores.descricao },
        });
        clearForm();
      }}
      >

        <div>
          <InputWrapper>
            <FormField
              label="Nome da Categoria"
              input
              type="text"
              name="titulo"
              value={valores.titulo}
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

        <VideoButton>Cadastrar!</VideoButton>
      </form>

      <ul>
        {categorias.map(
          (categoria, index) => (
            <li key={`${categoria.titulo}${index}`}>
              {categoria.titulo}
            </li>
          ),
        )}
      </ul>

      <Link to="/rockflix">Voltar para o ROCKFLIX!</Link>
    </PageDefault>
  );
};
