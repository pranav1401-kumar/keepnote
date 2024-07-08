import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, togglePin } from '../redux/notesSlice';
import styles from '../styles/Note.module.css';

const Note = ({ id, title, content, pinned, backgroundColor, image }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.note} style={{ backgroundColor }}>
      {title && <h3>{title}</h3>}
      <p>{content}</p>
      {image && <img src={image} alt="Note" className={styles.image} />}
      <div className={styles.actions}>
        <button onClick={() => dispatch(togglePin(id))} title={pinned ? 'Unpin Note' : 'Pin Note'}>
          <i className={`fas ${pinned ? 'fa-thumbtack' : 'fa-thumbtack'}`} style={{ color: pinned ? 'red' : 'inherit' }}></i>
        </button>
        <button onClick={() => dispatch(deleteNote(id))} title="Delete Note">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Note;
