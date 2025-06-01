import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CharacterList from '../components/CharacterList';

export default function SearchPage() {
  
  const [query, setQuery] = useState('');

  const [characters, setCharacters] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  // Текущая страница (по умолчанию 1)
  const [page, setPage] = useState(1);

  // Общее число страниц которое вернул API
  const [totalPages, setTotalPages] = useState(0);

  // Функция-поиска
  const handleSearch = async (newPage = 1) => {
    // Выход если пустая
    if (query.trim() === '') return;

    // Установка текущей страницы в newPage
    setPage(newPage);

    // Запуск индикатора загрузки
    setIsLoading(true);

    // Сброс прошлой ошибки и результаты
    setError(null);
    setCharacters([]);

    try {
      // Fetch к  бэкенду, подставление newPage в параметр page
      const response = await fetch(
        `http://localhost:3001/api/characters?name=${encodeURIComponent(query)}&page=${newPage}`
      );

      if (!response.ok) {
        // При 404
        const respData = await response.json();
        throw new Error(respData.error || 'Сервер вернул ошибку');
      }

      const data = await response.json();

      // Сохранение списка персонажей
      setCharacters(data.results);

      // Сохранение общего числа страниц из объекта data.info.pages
      setTotalPages(data.info.pages);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.title}>Rick and Morty</h1>

      {/* Поле поиска */}
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={() => handleSearch(1)} // При новом поиске сброс на первую страницу
        isLoading={isLoading}
      />

      {/* Вывод ошибки */}
      {error && <p style={styles.errorText}>{error}</p>}

      {/* Текст загрузки */}
      {isLoading ? (
        <p style={styles.loadingText}>Идёт загрузка данных...</p>
      ) : (
        <>
          {/* Список найденных персонажей */}
          <CharacterList characters={characters} />

          {/* Пагинация */}
          {totalPages > 1 && (
            <div style={styles.pagination}>
              <button
                onClick={() => handleSearch(page - 1)}
                disabled={page === 1 || isLoading}
                style={styles.pageButton}
              >
                ← Предыдущая
              </button>
              <span style={styles.pageInfo}>
                Страница {page} из {totalPages}
              </span>
              <button
                onClick={() => handleSearch(page + 1)}
                disabled={page === totalPages || isLoading}
                style={styles.pageButton}
              >
                Следующая →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

const styles = {
  pageContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    marginTop: '10px'
  },
  loadingText: {
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '20px'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px'
  },
  pageButton: {
    padding: '6px 12px',
    margin: '0 10px',
    fontSize: '14px',
    cursor: 'pointer',
    border: '1px solid #0070f3',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '4px',
    outline: 'none'
  },
  pageInfo: {
    fontSize: '14px',
    color: '#333'
  }
};