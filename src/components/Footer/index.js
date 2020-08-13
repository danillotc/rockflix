import React from 'react';
import FooterBase from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Criado por
        {' '}

        <a href="https://github.com/danillotc/">
          Danillo Castro
        </a>

        {' '}
        durante a
        {' '}

        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
