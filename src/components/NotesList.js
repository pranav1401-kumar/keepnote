import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';
import styles from '../styles/NotesList.module.css';

const NotesList = () => {
  const notes = useSelector((state) => state.notes.notes);

  return (
    <div className={styles.noteList}>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          pinned={note.pinned}
          backgroundColor={note.backgroundColor}
          image={note.image}
        />
      ))}
    </div>
  );
};


export default NotesList;
