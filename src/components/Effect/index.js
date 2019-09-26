import React, { useState, useEffect, useRef } from 'react';

import useTypewriter from 'react-typewriter-hook';

import './effect.css';

const MagicOcean = [
  'Bem-vindo ao CODEFullStack',
  'Neste site você encontra-rá:',
  'Artigos e curiosidades sobre o mundo da programação',
  'Meus projetos realizado e em andamento',
  'Publicação de outros programadores',
  'Biografias de programadores importantes',
  'Meu perfil como programador',
  'Meu potfólio.',
  'E é lógico, meus contatos....',
  'Obrigado pela visita!',
];
let index = 0;

function Effect() {
  const [magicName, setMagicName] = useState('Bem-vindo ao CODEFullStack');
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // index = index + 1 > 2 ? 0 : ++index + 1;
      index = index > 9 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 9000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicName]);
  return (
    <div className="Effect">
      <p className="cursor">{name}</p>
    </div>
  );
}

export default Effect;
