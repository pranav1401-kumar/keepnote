// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <NoteForm />
        <NotesList />
      </div>
    </Provider>
  );
};

export default App;
