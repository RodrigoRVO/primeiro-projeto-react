import React from 'react'
import People from '../../assets/people.png'
import Seta from '../../assets/seta.png'

import axios from 'axios'

import { useState, useRef,} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from './styles'

const App = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory()
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post('http://localhost:3001/users',
      {
        name: inputName.current.value,
        age: inputAge.current.value
      })

      setUsers([...users, newUser]);

      Direct()
  }


  function Direct () {
    history.push('/usuarios')
  }


  return (

    <Container>
      <Image alt='logo-image' src={People} />

      <ContainerItens>

        <H1>
          Olá!
        </H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome'></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade'></Input>

        <Button onClick={addNewUser}>Cadastrar <img alt='seta' src={Seta} /></Button>

      </ContainerItens>

    </Container>

  );

}

export default App
