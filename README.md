# Pre-Med Language & Culture Flashcards

A React-based flashcard application for BIO 265 Pre-Med students to study medical vocabulary — including prefixes, suffixes, common terms, and abbreviations.

---

## Table of Contents

1. [Installation](#installation)
2. [Running the App](#running-the-app)
3. [Building for Production](#building-for-production)
4. [How to Use the App](#how-to-use-the-app)
5. [Configuration](#configuration)
6. [Adding New Slide Decks](#adding-new-slide-decks)
7. [Card Data Format](#card-data-format)
8. [Project Structure](#project-structure)

---

## Installation

**Prerequisites:** [Node.js](https://nodejs.org/) (v16 or higher) and npm.

```bash
# 1. Clone the repository
git clone https://github.com/shawja40/pre-med-lang-cult.git
cd pre-med-lang-cult

# 2. Install dependencies
npm install
```

---

## Running the App

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000) in development mode. The page reloads automatically when you save changes.

---

## Building for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder. The app is configured with relative paths (`homepage: "./"` in `package.json`), so the entire `build/` folder can be copied to any static web server or file host.

---

## How to Use the App

1. **Select a Deck** — Use the **Deck** dropdown on the top bar to choose a vocabulary category (Prefixes, Suffixes, Common Terms, or Abbreviations).
2. **Study Cards** — Cards display the term on the front. Click a card to flip it and reveal the definition.
3. **Mark as Known / Keep Studying**
   - Click the **green checkmark** button to mark the card as known. It will be removed from your session and you'll advance to the next card.
   - Click the **red X** button to keep the card in rotation and advance to the next card.
4. **Filter Cards** — Use the **Cards** dropdown to narrow which cards are shown. You can select individual terms, or use **Select All** / **Deselect All** to manage the full set.
5. **Cards shuffle** each time you load a deck, so the order is randomized every session.

---

## Configuration

### Changing the App Title

Edit the `<h1>` tag in `src/App.js`:

```jsx
<h1 className='...'>Language and Culture of Medicine Flashcards</h1>
```

### Changing the Browser Tab Title / PWA Name

Edit `public/index.html` and `public/manifest.json`.

---

## Adding New Slide Decks

Adding a new deck is a two-step process:

### Step 1: Create the JSON data file

Create a new `.json` file in the `public/` folder following the [card data format](#card-data-format) below. For example, `public/MyNewDeck.json`.

### Step 2: Register the deck in the selector

Open `src/LabDeckSelector.js` and add an entry to the `moduleLinks` object:

```js
const moduleLinks = {
    'Prefixes':      './Prefixes.json',
    'Suffixes':      './Suffixes.json',
    'Common Terms':  './Common_Terms.json',
    'Abbreviations': './Abbrev.json',
    'My New Deck':   './MyNewDeck.json',   // <-- add this line
}
```

### Step 3: Rebuild

```bash
npm run build
```

This bundles the updated app and copies the new JSON file into `build/`. Upload the updated `build/` folder to your server.

---

## Card Data Format

Each deck is a `.json` file where the top-level keys are numeric string IDs. Every card object must have:

| Field     | Type   | Description                                      |
|-----------|--------|--------------------------------------------------|
| `id`      | number | Unique integer ID. Use a consistent numbering range per deck (e.g., start at 1000). |
| `question`| string | The term shown on the front of the card. Also used as the label in the Cards filter dropdown. |
| `answer`  | string | The definition/explanation shown on the back.    |
| `img_src` | string | (Optional) URL to an image. Currently reserved for future use — leave as `""`. |

**Example:**

```json
{
    "2000": {
        "id": 2000,
        "question": "brady-",
        "answer": "brady- means slow. For example, bradycardia means a slow heart rate.",
        "img_src": ""
    },
    "2001": {
        "id": 2001,
        "question": "tachy-",
        "answer": "tachy- means fast. For example, tachycardia means a fast heart rate.",
        "img_src": ""
    }
}
```

> **Tip:** Keep IDs unique across a single deck file. Different deck files can reuse the same ID numbers since they are never loaded at the same time.

---

## Project Structure

```
pre-med-lang-cult/
├── public/                  # Static assets & JSON deck files (served at runtime)
│   ├── Prefixes.json
│   ├── Suffixes.json
│   ├── Common_Terms.json
│   └── Abbrev.json
├── src/
│   ├── App.js               # Root component; loads deck JSON and renders UI
│   ├── Card.js              # Flip-card component with known/unknown buttons
│   ├── CardList.js          # Displays the current card from context
│   ├── Filter.js            # Multi-select filter by card question/term
│   ├── LabDeckSelector.js   # Deck dropdown — add new decks here
│   ├── context/
│   │   └── FlashcardContext.js  # Global state: cards, navigation, filtering
│   └── utils/
│       └── cardProcessing.js    # shuffleCards(), addFlags()
├── build/                   # Production build output (deploy this folder)
├── package.json
└── tailwind.config.js
```

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
