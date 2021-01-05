import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  function handleAddRepository() {

  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no github;</Title>

      <Form>
        <input 
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do Repositório" 
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars0.githubusercontent.com/u/15649530?s=460&u=d3b258fc4cf152c6b2aa6f7511b6ad07372a9d9f&v=4" alt="André Martins"/>        
          <div>
            <strong>/andrebertonha/05-projeto-react</strong>
            <p>gostack 12 study gostack 12 study gostack 12 study vgostack 12 study</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  ) 
};

export default Dashboard;