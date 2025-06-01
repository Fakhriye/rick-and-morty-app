// src/components/CharacterCard.jsx

import React from 'react';

/*
  Компонент CharacterCard получает в пропсах объект character,
  который содержит, например: { id, name, image, status, species, ... }
  Его задача:
   1. Показать картинку (image) персонажа.
   2. Показать имя (name) персонажа.
   3. Показать дополнительную информацию (status и species).
*/

export default function CharacterCard({ character }) {
  // Если character отсутствует (null/undefined), ничего не показываем:
  if (!character) return null;

  return (
    <div style={styles.card}>
      {/* Изображение персонажа */}
      <img
        src={character.image}
        alt={character.name}
        style={styles.image}
      />
      {/* Имя персонажа */}
      <h3 style={styles.name}>{character.name}</h3>
      {/* Статус и вид персонажа */}
      <p style={styles.info}>
        {character.species} — {character.status}
      </p>
    </div>
  );
}

// Inline-стили для карточки
const styles = {
  card: {
    width: '180px',
    margin: '10px',
    padding: '10px',
    border: '1px solid #e1e1e1',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    borderRadius: '4px'
  },
  name: {
    fontSize: '18px',
    margin: '8px 0 4px'
  },
  info: {
    fontSize: '14px',
    color: '#555',
    margin: 0
  }
};