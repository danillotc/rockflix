import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import { VideoButton } from '../../../components/button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categories';
import './styles.css';

export default () => {
  const { handleChange, valores } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map((categoria) => categoria.titulo);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasDoServer) => {
        setCategorias(categoriasDoServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Quer cadastrar um vídeo, né?
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => (
          (categoria.titulo === valores.categoria)));

        videosRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/rockflix');
          });
      }}
      >
        <FormField
          label="Título do vídeo"
          input
          type="text"
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          input
          type="text"
          name="url"
          value={valores.url}
          onChange={handleChange}
          maxLength={300}
        />

        <FormField
          label="Categoria"
          input
          type="text"
          name="categoria"
          value={valores.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <VideoButton>Cadastrar!</VideoButton>
      </form>

      <Link to="/cadastro/categoria">Cadastrar nova categoria</Link>
    </PageDefault>
  );
};
