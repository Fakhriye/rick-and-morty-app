// src/components/SearchBar.jsx

import React from 'react';

/*
  Компонент SearchBar отвечает за:
  1. Отображение текстового поля для ввода имени персонажа.
  2. Отображение кнопки «Найти».
  3. Двойную блокировку: 
     - Если идёт загрузка (isLoading = true), поле и кнопка отключены.
     - Если строка пустая (query.trim() === ''), кнопка тоже будет отключена.
  4. Вызывается функция onSearch() при клике на кнопку или при нажатии Enter.
*/

export default function SearchBar({ query, setQuery, onSearch, isLoading }) {
  return (
    <div style={styles.container}>
      {/* Поле ввода: value={query}, onChange обновляет query через setQuery */}
      <input
        type="text"
        placeholder="Введите имя персонажа..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            onSearch();
          }
        }}
        disabled={isLoading}          // если идёт загрузка, отключаем поле
        style={styles.input}
      />
      {/* Кнопка: если isLoading=true или строка пустая, кнопка disabled */}
      <button
        onClick={onSearch}
        disabled={isLoading || query.trim() === ''}
        style={styles.button}
      >
        {isLoading ? 'Идёт поиск...' : 'Найти'}
      </button>
    </div>
  );
}

// Простые inline-стили в виде объекта
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0'
  },
  input: {
    width: '250px',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px 0 0 4px',
    outline: 'none'
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    border: '1px solid #0070f3',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
    outline: 'none'
  }
};