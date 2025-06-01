import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CharacterList from '../components/CharacterList';

export default function SearchPage() {
  // ← Вот здесь, в самом начале тела компонента, добавляем новые состояния:

  // 1) query — текст, который вводит пользователь в поле поиска
  const [query, setQuery] = useState('');

  // 2) characters — массив найденных персонажей
  const [characters, setCharacters] = useState([]);

  // 3) isLoading — индикатор загрузки (true, пока ждём ответ от бэкенда)
  const [isLoading, setIsLoading] = useState(false);

  // 4) error — строка с текстом ошибки (если запрос не удался)
  const [error, setError] = useState(null);

  // ● Добавляем два новых состояния для пагинации:
  // 5) page — текущая страница (номер), по умолчанию 1
  const [page, setPage] = useState(1);

  // 6) totalPages — общее число страниц, которое вернул API
  const [totalPages, setTotalPages] = useState(0);

  // Теперь, после всех хуков useState, идёт функция-поиска:
  const handleSearch = async (newPage = 1) => {
    // Если строка пустая — выходим
    if (query.trim() === '') return;

    // Устанавливаем текущую страницу в newPage
    setPage(newPage);

    // Запускаем индикатор загрузки
    setIsLoading(true);

    // Сбрасываем прошлую ошибку и результаты
    setError(null);
    setCharacters([]);

    try {
      // Делаем fetch к вашему бэкенду, подставляя newPage в параметр page
      const response = await fetch(
        `http://localhost:3001/api/characters?name=${encodeURIComponent(query)}&page=${newPage}`
      );

      if (!response.ok) {
        // Если бэкенд вернул 404 (не найдено) или другую ошибку
        const respData = await response.json();
        throw new Error(respData.error || 'Сервер вернул ошибку');
      }

      const data = await response.json();

      // Сохраняем список персонажей
      setCharacters(data.results);

      // Сохраняем общее число страниц из объекта data.info.pages
      setTotalPages(data.info.pages);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.title}>Rick and Morty — Поиск персонажей</h1>

      {/* Поле поиска */}
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={() => handleSearch(1)} // При новом поиске всегда сбрасываем на первую страницу
        isLoading={isLoading}
      />

      {/* Если есть ошибка, покажем её */}
      {error && <p style={styles.errorText}>{error}</p>}

      {/* Если идёт загрузка — показываем текст загрузки, иначе — список и пагинацию */}
      {isLoading ? (
        <p style={styles.loadingText}>Идёт загрузка данных...</p>
      ) : (
        <>
          {/* Список найденных персонажей */}
          <CharacterList characters={characters} />

          {/* Если всего страниц больше одной, показываем пагинацию */}
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

// Стили для компонента (inline-стили)
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