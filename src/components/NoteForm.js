import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesSlice';
import styles from '../styles/NoteForm.module.css';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      dispatch(addNote({
        title,
        content,
        pinned: false,
        backgroundColor,
        image,
      }));
      setTitle('');
      setContent('');
      setBackgroundColor('#ffffff');
      setImage(null);
    }
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Check if any field is filled to decide whether to show the preview
  const shouldShowPreview = title || content || backgroundColor !== '#ffffff' || image;

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
        <textarea
          placeholder="Take a note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.textarea}
        />
        <div className={styles.controls}>
          <div className={styles.colorPicker}>
            <label htmlFor="backgroundColor"><i className="fas fa-palette"></i></label>
            <input
              type="color"
              id="backgroundColor"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </div>
          <div className={styles.fileUpload}>
            <label htmlFor="imageUpload"><i className="fas fa-image"></i></label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <button type="submit" className={styles.addButton}><i className="fas fa-plus"></i> Add Note</button>
      </form>
      {shouldShowPreview && (
        <div className={styles.preview} style={{ backgroundColor }}>
          {title && <h3>{title}</h3>}
          {content && <p>{content}</p>}
          {image && <img src={image} alt="Preview" className={styles.previewImage} />}
        </div>
      )}
    </div>
  );
};

export default NoteForm;
