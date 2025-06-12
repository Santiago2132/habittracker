# Habit Tracker
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Santiago2132/habittracker.git)

A web application designed to help you build and maintain good habits. Track your progress for daily, weekly, or monthly habits with a clean and simple interface. This project is built using React, TypeScript, Vite, and styled with Tailwind CSS. Habit data is stored locally in your browser's `localStorage`.

## Features

*   **Add Habits:** Easily create new habits with a custom name and specify their frequency (daily, weekly, or monthly).
*   **Track Completion:** Mark habits as completed for the current day. The completion status is visually indicated.
*   **View Details:** See when each habit was created.
*   **Delete Habits:** Remove habits you no longer wish to track.
*   **Local Storage:** Your habit data is saved in your browser, so your habits persist across sessions.
*   **Responsive Design:** Use the tracker комфортабельно on various screen sizes.

## Technologies Used

*   **Frontend:** React, TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS (via CDN)
*   **Linting:** ESLint
*   **ID Generation:** UUID

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (version 18.x or later recommended)
*   npm (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/santiago2132/habittracker.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd habittracker
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

To start the development server:

```bash
npm run dev
```

This will typically open the application in your default web browser at `http://localhost:5173`. The server supports Hot Module Replacement (HMR) for a smooth development experience.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The bundled static assets will be placed in the `dist/` directory. You can then deploy this directory to any static site hosting service.

### Linting

To check the codebase for linting errors and style issues:

```bash
npm run lint