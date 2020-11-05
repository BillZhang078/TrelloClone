import React, { useReducer } from 'react';
import { nanoid } from 'nanoid';
import { findListId } from '../utils/findListId';

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

interface AppState {
  lists: List[];
}

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [{ id: 'c0', text: 'Generate app scaffold' }]
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{ id: 'c2', text: 'Learn Typescript' }]
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: 'c3', text: 'Begin to use static typing' }]
    }
  ]
};

type Action =
  | {
      type: 'ADD_LIST';
      payload: {
        text: string;
      };
    }
  | {
      type: 'ADD_TASK';
      payload: {
        text: string;
        listId: string;
      };
    };

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_LIST': {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: nanoid(), text: action.payload.text, tasks: [] }
        ]
      };
    }
    case 'ADD_TASK': {
      const index = findListId(state.lists, action.payload.listId);
      state.lists[index].tasks.push({
        id: nanoid(),
        text: action.payload.text
      });
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
};

export const AppStateContext = React.createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  return (
    <AppStateContext.Provider value={{ state: state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
