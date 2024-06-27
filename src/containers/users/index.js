import React from 'react'
import Avatar from '../../assets/avatar.png'
import Seta from '../../assets/seta.png'
import Trash from '../../assets/trash.png'

import axios from 'axios'

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import {
  Container,
  Image,
  User
} from './styles'

const Users = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();


  useEffect(() => {

    async function fetchUsers() {
      const { data: allUsers } = await axios.get('http://localhost:3001/users');

      setUsers(allUsers)
    }

    fetchUsers()

  }, [])



  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId);

    setUsers(newUsers)
  }

  function Back() {
    history.push('/')
  }

  return (

    <Container>
      <Image alt='logo-image' src={Avatar} />

      <ContainerItens isBlur={true}>

        <H1>
          Usuários
        </H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)} > <img alt='lata-de-lixo' src={Trash} ></img></button>
            </User>
          ))}
        </ul>

        <Button isBack= {true} onClick={Back}> <img alt='seta' src={Seta} /> Voltar</Button>

      </ContainerItens>

    </Container>

  );

}

export default Users
