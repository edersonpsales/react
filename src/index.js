import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Primeiro from './componentes/Primeiro';
import Segundo from './componentes/Segundo';
import Saudacao from './componentes/Saudacao';
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';

ReactDOM.render(
  <Pai nome="Paulo" sobrenome="Silva">
    <Filho nome="Pedro" />
    <Filho nome="Paulo" />
    <Filho nome="Carla" />
  </Pai>,
  document.getElementById('root')
);
