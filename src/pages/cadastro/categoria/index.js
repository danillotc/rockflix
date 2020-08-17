/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import { VideoButton } from '../../../components/button';
import { CategoryList, SmallButton } from '../../../components/CategoryList';
import InputWrapper from './styles';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';
import '../video/styles.css';

export default () => {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#C3A109',
  };

  const { valores, handleChange, clearForm } = useForm(valoresIniciais);

  const [categoriesChanged, setCategoriesChanged] = useState(true);

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
  }, [categoriesChanged]);

  return (
    <PageDefault>
      <h1>
        Quer cadastrar a categoria "
        {valores.titulo}
        ", certo?
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        const data = new Date();
        const numeroAleatorio = Math.round(Math.random() * 100000).toString();
        const idGerado = numeroAleatorio + data.getMilliseconds().toString();
        valores.id = idGerado;

        setCategorias([
          ...categorias,
          valores,
        ]);

        categoriesRepository.create({
          id: idGerado,
          titulo: valores.titulo,
          cor: valores.cor,
          descricao: valores.descricao,
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

      <hr style={{ color: 'var(--white)' }} />

      <CategoryList>
        <caption>Lista de categorias</caption>

        <thead>
          <tr>
            <th>Gênero</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>

        {categorias.map(
          (categoria, index) => (
            <tbody key={`${categoria.titulo}${index}`}>
              <tr>
                <td>
                  {categoria.titulo}
                </td>
                <td>
                  {categoria.descricao}
                </td>
                <td>
                  <SmallButton
                    type="button"
                    onClick={() => {
                      categoriesRepository.destroy(categoria.id);
                      setCategoriesChanged(!categoriesChanged);
                    }}
                  >
                    Excluir
                  </SmallButton>
                </td>
              </tr>
            </tbody>
          ),
        )}
      </CategoryList>

      <Link className="routerLink" to="/rockflix">Voltar para Rockflix!</Link>

    </PageDefault>
  );
};
