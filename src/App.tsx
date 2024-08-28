import * as C from './App.styles';
import './reset.css';
import { useState } from 'react';
import { Item } from './types/Item';
import { ListItem }  from './components/ListItem'
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Estudar pra virar programador', done: false },
    { id: 2, name: 'Desligar o PS5', done: false }
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        
        <AddArea />
 
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
      ))}

      </C.Area>
    </C.Container>
  )
}

export default App;
