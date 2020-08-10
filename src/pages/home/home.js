import React, { useState, useEffect } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categories';
import PageDefault from '../../components/pageDefault';
import { Loading, LoadingLogo } from '../../components/Loading';
import loadingimg from '../../assets/img/loadingimg.png';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  return (
    <PageDefault paddingHome={0}>

      {dadosIniciais.length === 0 && (
        <>
          <Loading>
            Carregando...
            <LoadingLogo src={loadingimg} alt="Loading logo" />
          </Loading>
        </>
      )}

      {dadosIniciais.map((categoria, indice) => (
        indice === 0
          ? (
            <div>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Hoje é dia de rock, bebê"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          )
          : (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          )
      ))}

    </PageDefault>
  );
}

export default Home;
