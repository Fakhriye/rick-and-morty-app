# Rick and Morty App

> **Автор:** Fakhriye                                 
> **GitHub:** [github.com/Fakhriye/rick-and-morty-app](https://github.com/Fakhriye/rick-and-morty-app)

![Rick and Morty](/rickandmorty.jpg)

## Описание 

Приложение «Rick and Morty App» позволяет пользователям искать персонажей мультсериала **Rick and Morty**, а также просматривать их изображения и другую базовую информацию. Интерфейс построен на **React**, а все запросы к публичному API (https://rickandmortyapi.com) проксируются через собственный бэкенд на **Node.js + Express**.

Основные возможности:
- Поиск персонажей по имени с учетом пагинации.
- Отображение списка персонажей в виде карточек.
- Роутинг: отдельная страница списка (SearchPage) и страница деталей персонажа.
- Плавная загрузка и отображение индикатора загрузки.
- Простая, но понятная стилизация (светлая тема, нежно-розовый фон).

## Технологический стек

- **Frontend**:
  - React (Create React App)
  - React Router (маршрутизация между страницей поиска и страницей деталей)
  - Inline-стили и глобальный CSS (`index.css`)
- **Backend**:
  - Node.js + Express
  - Axios (для проксирования запросов к Rick and Morty API)
  - CORS (разрешение кросс-доменных запросам)
- **Инструменты разработки**:
  - Git / GitHub (версионирование)
  - GitHub Desktop (удобный пуш без ввода PAT)
  - VS Code (редактор кода)
  - npm (управление зависимостями)
- **(Планируемый деплой)**:
  - **Backend** → Render (или Railway)
  - **Frontend** → Vercel (или Netlify)

## Установка и запуск локально

### 1. Клонирование репозитория

```bash
cd ~/Desktop
git clone https://github.com/Fakhriye/rick-and-morty-app.git
cd rick-and-morty-app
```

### 2. Запуск бэкенда

```bash
cd backend
npm install
node server.js
```

### Запуск фронтенда

```bash
cd ~/Desktop/rick-and-morty-app/frontend
npm install
npm start
```

## Процесс разработки
### Структура проекта

```bash
 rick-and-morty-app/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── SearchBar.jsx
    │   │   ├── CharacterList.jsx
    │   │   └── CharacterCard.jsx
    │   ├── pages/
    │   │   ├── SearchPage.jsx
    │   │   └── CharacterDetailsPage.jsx
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    ├── package.json
    └── package-lock.json
```
### Шаги разработки
#### Frontend
– Create React App → папки components/, pages/ → реализация SearchBar, CharacterList, CharacterCard.
– Логика поиска и пагинации в SearchPage.jsx.
– React Router для / → SearchPage и /character/:id → CharacterDetailsPage.
#### Backend
– npm init -y → установка express, axios, cors.
– server.js: маршрут /api/characters?name=&page= → проксирование в Rick and Morty API.


## Известные ошибки и ограничения
	1.	Поиск пустым запросом не даёт подсказок.
	2.	Пагинация работает только если data.info.pages > 1.
	3.	Страница деталей берёт результат из общего поиска — в редких случаях может вернуть не того персонажа.
	4.	Нет тёмной темы (можно добавить переключатель и localStorage).
	5.	Нет скелетонов для более плавного UX при медленной сети.


## Выбор стека
	•	React (CRA) — быстрая настройка, «горячая» перезагрузка.
	•	Express + Axios — минимальный, гибкий сервер для проксирования.
	•	CORS — простой способ разрешить кросс-запросы.
	•	GitHub Desktop — пуш без ввода PAT в терминал.
 
## Спасибо за внимание!
