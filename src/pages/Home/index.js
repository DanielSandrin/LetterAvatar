import { React, useState } from 'react';
import LetterAvatar from '../../components/LetterAvatar'

import { Container, Card } from './styles';

function Home() {
  const [letter, setLetter] = useState('')

  function handleLetter(name){
    const teste = name.split(' ', 2);
    const Name = '';
    if (teste.length > 1){
      setLetter(name.substring(0,1) + teste[1].substring(0,1))
    }else{
      setLetter(name.substring(0,1))
    }
  }
  return (
    <Container>
      <Card>
        <input type="text" onChange={e => handleLetter(e.target.value)}></input>
        <LetterAvatar>
          {letter}
        </LetterAvatar>
      </Card>
    </Container>
  );
}

export default Home;