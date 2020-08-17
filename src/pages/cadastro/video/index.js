import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import { VideoButton, SmallButton } from '../../../components/button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categories';
import VideosList from '../../../components/VideosList';
import './styles.css';

export default () => {
  const { handleChange, valores } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState([]);
  const [videosDaCategoria, setVideosDaCategoria] = useState([]);
  const [videosChanged, setVideosChanged] = useState(true);
  const categoryTitles = categorias.map((categoria) => categoria.titulo);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasDoServer) => {
        setCategorias(categoriasDoServer);
      });
  }, []);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriaDoServer) => {
        const objetoCategoria = categoriaDoServer.filter(
          (categoria) => categoria.id === categoriaSelecionada,
        )[0];
        setVideosDaCategoria(
          objetoCategoria ? objetoCategoria.videos : [],
        );
      });
  }, [categoriaSelecionada, videosChanged]);

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
          maxLength={60}
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

      <Link className="routerLink" to="/cadastro/categoria">Cadastrar nova categoria</Link>

      <hr style={{ color: 'var(--white)' }} />

      <h1>Deletar um vídeo da categoria:</h1>

      <select
        name="videos"
        id="listadevideos"
      >
        {categoriaSelecionada.length === 0
          && <option>Selecione uma categoria</option>}
        {categorias.map((categoria) => (
          <option
            key={categoria.id}
            value={categoria.id}
            onClick={() => setCategoriaSelecionada(categoria.id)}
          >
            {categoria.titulo}
          </option>
        ))}
      </select>

      <VideosList>
        <thead>
          <tr>
            <th>Nome do vídeo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {videosDaCategoria.map((video) => (
            <tr key={video.id}>
              <td>
                {video.titulo}
              </td>
              <td>
                <SmallButton
                  type="button"
                  onClick={() => {
                    videosRepository.destroy(video.id);
                    setVideosChanged(!videosChanged);
                  }}
                >
                  Excluir
                </SmallButton>
              </td>
            </tr>
          ))}
        </tbody>
      </VideosList>

    </PageDefault>
  );
};
