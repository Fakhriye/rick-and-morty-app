// src/components/CharacterList.jsx

import React from 'react';
import CharacterCard from './CharacterCard';

/*
  CharacterList принимает проп characters — массив объектов персонажей.
  Его задача:
   1. Если массив пустой или undefined, показать сообщение «Персонажи не найдены.»
   2. Иначе пройтись по массиву characters и для каждого объекта вывести <CharacterCard character={char} />
*/

export default function CharacterList({ characters }) {
  // Если characters нет или это пустой массив:
  if (!characters || characters.length === 0) {
    return <p style={styles.emptyText}>Персонажи не найдены.</p>;
  }

  return (
    <div style={styles.listContainer}>
      {characters.map(char => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}

const styles = {
  listContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  emptyText: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#777',
    marginTop: '20px'
  }
};