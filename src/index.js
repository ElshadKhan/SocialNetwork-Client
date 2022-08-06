import React, { createContext } from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import PostNetwork from './network/PostNetwork';
import UserNetwork from './network/UserNetwork';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
      user: new UserNetwork(),
      post: new PostNetwork(),
    }}>
        <App />,
    </Context.Provider>,
  document.getElementById('root')
);
