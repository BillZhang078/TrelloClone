import React from 'react';
import { ColumnContainer, ColumnTitle } from '../styles';
import { Card } from '../components';
import AddNewItem from './AddNewItem';
import { useAppState } from '../hooks/useAppState';

interface ColumnProps {
  text: string;
  index: number;
}

const Column = ({ text, index }: ColumnProps) => {
  const { state } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map(item => {
        return <Card text={item.text} key={item.id} />;
      })}
      <AddNewItem
        toggleButtonText='+ Add Another Task'
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
