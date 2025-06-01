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

## Спасибо за внимание!
