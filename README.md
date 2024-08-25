# Task Calendar App

A simple Task Calendar application built with Next.js, TypeScript, Zustand, Ant Design, Tailwind CSS, and React Query. This app allows users to add tasks to specific dates in a calendar and view/search these tasks on a separate page.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Technologies Used](#technologies-used)


## Features

- **Calendar View:** Users can select a date on a calendar and add tasks.
- **Task List:** Displays a list of tasks for the selected month with a search functionality.
- **State Management:** Tasks are managed globally using Zustand.
- **Styled with Tailwind CSS:** Custom styling with utility-first CSS framework.
- **Ant Design UI Components:** Provides a polished and consistent user interface.



### Prerequisites

Make sure you have Node.js and npm (or Yarn) installed on your machine.

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/hadis-aliabadi/calendar.git
    cd calendar
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    npx json-server --watch db.json --port 3001
    ```

4. **Open the app in your browser:**

    Go to [http://localhost:3000](http://localhost:3000).

## Project Structure

```plaintext
.
├── public/                 # Static files
├── src/                    
|   └──api/                 # Next.js pages
|   └──app/
|   └──hooks/
|   └──hooks/
|   └──iterfaces/
|   └──utils/
|   ├── store/                  # Zustand store
│       └── useTaskStore.ts     # Task management store
|
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation

```

## Usage

Add a Task:

Navigate to the home page (/).
Click on a date in the calendar.
Enter the task description in the modal and save.

View and Search Tasks:

Navigate to the tasks page (/tasks).
Use the search input to filter tasks by description.

## Technologies Used

**Next.js**: A React framework for server-side rendering and static site generation.
**TypeScript**: A typed superset of JavaScript.
**Zustand**: A small, fast, and scalable state management solution for React.
**Ant Design**: A popular UI component library.
**Tailwind CSS**: A utility-first CSS framework.
**React Query**: A data-fetching library for React.