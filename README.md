# Take-Home Assessment — React

Это твой учебный проект. Выполняй задания по порядку, каждое — отдельным коммитом.
После каждого задания ответь на вопросы для самопроверки (устно или письменно).

---

## Задание 1. Клонирование и запуск

### Что нужно сделать

- [ ] Склонировать этот репозиторий к себе на компьютер
- [ ] Установить зависимости
- [ ] Запустить проект локально и убедиться, что он открывается в браузере

### Пошаговая инструкция

```bash
# 1. Склонируй репозиторий
git clone https://github.com/dima-tolmachev/take-home-assessment-react-1.git

# 2. Перейди в папку проекта
cd take-home-assessment-react-1

# 3. Установи зависимости
npm install

# 4. Запусти проект
npm start
```

После `npm start` откроется браузер по адресу `http://localhost:3000`.
Ты должна увидеть страницу с заголовком **"React Assessment"**.

### Вопросы для самопроверки

1. Что делает команда `git clone`? Чем отличается от `git fork`?
2. Что такое `package.json`? Зачем он нужен?
3. Что такое `node_modules/`? Почему эта папка не хранится в git?
4. Что делает `npm start`? Какой процесс запускается под капотом (dev server)?

---

## Задание 2. Open Graph мета-теги

### Теория

**Open Graph (OG)** — это протокол мета-тегов, который определяет, как твоя страница
будет выглядеть при шаринге ссылки в социальных сетях и мессенджерах.

Когда ты отправляешь ссылку в Telegram, Slack, Twitter (X), Facebook, LinkedIn, Discord,
VK, WhatsApp — эти сервисы читают OG-теги из HTML и показывают превью:
заголовок, описание, картинку.

**Системы, которые используют Open Graph:**
- **Facebook / Meta** — создатель протокола OG
- **Twitter (X)** — использует как OG-теги, так и собственные `twitter:card` теги
- **Telegram** — отображает OG-превью при отправке ссылки
- **Slack** — показывает unfurl с OG-данными
- **LinkedIn** — превью при шаринге ссылки
- **Discord** — embed-превью ссылок
- **VK** — собственные теги + OG
- **WhatsApp** — превью ссылки в чате
- **iMessage** — превью ссылки
- **Pinterest** — использует OG для Rich Pins

### Что нужно сделать

- [ ] Открой файл `public/index.html`
- [ ] Добавь Open Graph мета-теги в `<head>` (там есть комментарий-подсказка)
- [ ] Добавь Twitter Card мета-теги
- [ ] Проверь результат

### Какие теги добавить

```html
<!-- Open Graph (Facebook, Telegram, Slack, LinkedIn, Discord, WhatsApp и др.) -->
<meta property="og:title" content="React Assessment — Учебный проект" />
<meta property="og:description" content="Практическое задание по HTML, CSS и React" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://your-domain.vercel.app/" />
<meta property="og:image" content="https://your-domain.vercel.app/og-image.png" />
<meta property="og:locale" content="ru_RU" />
<meta property="og:site_name" content="React Assessment" />

<!-- Twitter (X) -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="React Assessment — Учебный проект" />
<meta name="twitter:description" content="Практическое задание по HTML, CSS и React" />
<meta name="twitter:image" content="https://your-domain.vercel.app/og-image.png" />
```

> **Примечание:** `og:url` и `og:image` обнови после деплоя (Задание 4), когда у тебя
> будет реальный URL. Картинку можно создать в Figma или найти бесплатную.
> Рекомендуемый размер OG-изображения: **1200 x 630 px**.

### Как проверить OG-теги

1. **DevTools** → Elements → посмотри `<head>` в DOM
2. После деплоя: вставь ссылку в Telegram или Slack — должно появиться превью
3. Онлайн-валидаторы (после деплоя):
   - Facebook Sharing Debugger
   - Twitter Card Validator
   - LinkedIn Post Inspector

### Вопросы для самопроверки

1. Что такое `<meta>` теги? Для чего они нужны?
2. Чем `property` отличается от `name` в мета-тегах? (подсказка: OG использует `property`, Twitter — `name`)
3. Что такое SEO? Влияют ли OG-теги на SEO?
4. Какие ещё мета-теги важны для SEO? (подсказка: `description`, `canonical`, `robots`)
5. Что такое семантическая вёрстка? Какие семантические теги ты видишь в `App.js`?

---

## Задание 3. Форма логина

### Теория

HTML-формы (`<form>`) — основной способ сбора данных от пользователя.
Важные концепции:
- **`<form>`** — контейнер для полей ввода, имеет событие `onSubmit`
- **`<input>`** — поле ввода, тип задаётся через `type` (`text`, `password`, `email`, `number`, etc.)
- **`<label>`** — подпись к полю ввода, связывается через `htmlFor` (в React) / `for` (в HTML)
- **`type="password"`** — скрывает вводимый текст звёздочками/точками
- **`localStorage`** — встроенное хранилище браузера (ключ-значение), данные сохраняются даже после закрытия вкладки

### Что нужно сделать

- [ ] Открой `src/App.js`
- [ ] Замени placeholder-текст в `<section className="login-section">` на форму
- [ ] Форма должна содержать:
  - Поле **Login** (`<input type="text">`)
  - Поле **Password** (`<input type="password">`)
  - Кнопку **Войти** (`<button type="submit">`)
- [ ] Каждое поле должно иметь `<label>`
- [ ] При отправке формы (`onSubmit`):
  - Значение логина сохраняется в `localStorage` (ключ: `"login"`)
  - Страница перезагружается (`window.location.reload()`)
- [ ] При загрузке страницы:
  - Логин читается из `localStorage` и подставляется в поле
- [ ] Стилизуй форму (CSS на твоё усмотрение)

### Подсказки по реализации

```jsx
// Чтение из localStorage при загрузке:
const savedLogin = localStorage.getItem('login') || '';

// useState для хранения значений полей:
const [login, setLogin] = useState(savedLogin);
const [password, setPassword] = useState('');

// Обработчик отправки формы:
const handleSubmit = (e) => {
  e.preventDefault(); // предотвращаем стандартное поведение формы
  localStorage.setItem('login', login);
  window.location.reload();
};
```

### Чек-лист для проверки

- [ ] Форма отображается на странице
- [ ] Пароль скрыт (отображается точками/звёздочками)
- [ ] При нажатии "Войти" логин сохраняется в `localStorage`
- [ ] Страница перезагружается после submit
- [ ] После перезагрузки поле логина предзаполнено сохранённым значением
- [ ] Поле пароля пустое после перезагрузки (пароль НЕ сохраняется)
- [ ] Каждый `<input>` имеет `<label>` (важно для accessibility!)
- [ ] Форма корректно работает при нажатии Enter (не только по кнопке)

### Вопросы для самопроверки

#### HTML
1. Зачем нужен `e.preventDefault()` в обработчике формы? Что произойдёт без него?
2. Какие типы `<input>` ты знаешь? Назови минимум 5.
3. Зачем нужен `<label>` и атрибут `htmlFor`? Как это связано с accessibility?
4. Что такое нативная валидация форм? Какие атрибуты для неё есть? (`required`, `minLength`, `pattern`)
5. Что такое `data-`атрибуты? Когда их уместно использовать?

#### CSS
6. Какие CSS-селекторы ты использовала для стилизации формы? Какая у них специфичность?
7. Что такое `box-sizing: border-box`? Зачем мы его задаём в `index.css`?
8. Как работает Flexbox? Какие свойства контейнера (`display: flex`) ты знаешь?
9. Что такое псевдоклассы? Приведи примеры (`:hover`, `:focus`, `:disabled`).
10. Что такое `position: relative` / `absolute` / `fixed` / `sticky`? Чем отличаются?

#### React / JS
11. Что такое `useState`? Зачем нужен, как работает?
12. Что такое `localStorage`? Чем отличается от `sessionStorage`?
13. Что такое контролируемый компонент (controlled component)?

---

## Задание 4. Деплой

### Что нужно сделать

- [ ] Задеплоить сайт на **Vercel** или **GitHub Pages**
- [ ] Обновить OG-теги (Задание 2) — подставить реальный URL
- [ ] Проверить, что сайт работает по публичной ссылке
- [ ] Отправить ссылку на задеплоенный сайт

### Вариант А: Vercel (рекомендуется)

1. Зайди на [vercel.com](https://vercel.com) и войди через GitHub
2. Нажми **"Add New" → "Project"**
3. Выбери этот репозиторий из списка
4. Framework Preset должен автоматически определиться как **Create React App**
5. Нажми **"Deploy"**
6. После деплоя скопируй URL (например, `https://take-home-assessment-react-1.vercel.app`)

### Вариант Б: GitHub Pages

1. Открой `package.json`
2. Добавь поле: `"homepage": "https://<username>.github.io/take-home-assessment-react-1"`
3. Установи пакет: `npm install gh-pages --save-dev`
4. Добавь скрипты в `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
5. Запусти: `npm run deploy`
6. В настройках репозитория (Settings → Pages) выбери branch `gh-pages`

### После деплоя

- [ ] Открой `public/index.html` и обнови `og:url` и `og:image` на реальные URL
- [ ] Отправь ссылку в Telegram себе — проверь, что OG-превью отображается
- [ ] Закоммить и запушь обновлённые OG-теги

### Вопросы для самопроверки

1. Что делает команда `npm run build`? Что появляется в папке `build/`?
2. Что такое статический хостинг? Чем он отличается от серверного (Node.js, Express)?
3. Что такое DNS? Что происходит, когда ты вводишь URL в адресную строку?
4. Что такое HTTPS? Зачем нужен SSL-сертификат?

---

## Бонус: вопросы по теории (для устного обсуждения)

### HTML
- Для чего нужен HTML?
- Что такое семантическая вёрстка? Какие семантические теги знаешь? (`<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<nav>`, `<aside>`)
- Что такое доступность (accessibility)?
  - Для кого делается? (незрячие, слабовидящие, пользователи клавиатуры)
  - Screen readers — как они читают страницу?
  - Как оценить: **DevTools → Lighthouse**, **WAVE**

### CSS
- Селекторы и специфичность (id > class > tag)
- Псевдоклассы (`:hover`, `:focus`, `:nth-child`) и псевдоэлементы (`::before`, `::after`)
- CSS Reset vs Normalize — зачем нужны?
- Box model: `content-box` vs `border-box`
- `position`: `static`, `relative`, `absolute`, `fixed`, `sticky`
- Flexbox: `justify-content`, `align-items`, `flex-direction`, `flex-wrap`, `gap`
- Grid: `grid-template-columns`, `grid-template-rows`, `grid-area` — когда Grid лучше Flexbox?
- SCSS/SASS: переменные, вложенность, миксины, `@extend`
- CSS Modules vs CSS-in-JS (styled-components) — когда что?

---

## Структура проекта

```
take-home-assessment-react-1/
├── public/
│   ├── index.html          ← HTML-шаблон (сюда добавляешь OG-теги)
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── index.js            ← точка входа React
│   ├── index.css            ← глобальные стили
│   ├── App.js              ← главный компонент (сюда добавляешь форму)
│   └── App.css             ← стили компонента App
├── package.json
├── .gitignore
└── README.md               ← этот файл
```

---

Удачи! Если что-то непонятно — спрашивай.
