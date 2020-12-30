import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Title, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no github;</Title>

      <Form>
        <input placeholder="Digite o nome do Repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  ) 
};

export default Dashboard;