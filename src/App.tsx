import * as React from 'react';
import { AppContainer } from './styles';
import { Card, Column, AddNewItem } from './components';

function App() {
  return (
    <AppContainer>
      <Column text='To Do'>
        <Card text='Learn Graphql' />
      </Column>
      <Column text='In Progress'>
        <Card text='Learn TypeScript' />
      </Column>
      <Column text='Finished'>
        <Card text='Learn Node.js' />
      </Column>
      <AddNewItem toggleButtonText='+ Add Another Task' onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
