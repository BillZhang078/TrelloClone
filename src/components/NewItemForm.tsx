import React, { useState } from 'react';
import { NewItemButton, NewItemFormContainer, NewItemInput } from '../styles';
import { useFocus } from '../hooks/useFocus';

interface NewItemFormProps {
  onAdd(text: string): void;
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState('');
  const inputRef = useFocus();

  const onHandleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAdd(text);
    }
  };
  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={e => setText(e.target.value)}
        ref={inputRef}
        onKeyPress={onHandleKeyEvent}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
