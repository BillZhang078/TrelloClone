import * as React from 'react';
import { AppContainer } from './styles';
import { Column, AddNewItem } from './components';

import { useAppState } from './hooks/useAppState';

function App() {
  const { state, dispatch } = useAppState();
  console.log(state);
  return (
    <AppContainer>
      {state.lists.map((item, i) => {
        return <Column key={item.id} text={item.text} index={i} />;
      })}
      <AddNewItem
        toggleButtonText='+ Add Another Task'
        onAdd={text => dispatch({ type: 'ADD_LIST', payload: { text } })}
      />
    </AppContainer>
  );
}

export default App;
