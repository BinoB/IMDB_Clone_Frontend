# IMDb Clone Frontend

This project is the frontend application for an IMDb-like website with basic CRUD functionality for managing movies, actors, and producers. Built with React.js, it provides users with an interactive interface to view, add, edit, and delete movie records while also allowing for the dynamic creation of new actors and producers within the same view.

## Deployment

The application is deployed and can be accessed at the following URL:

[Deployment URL](https://poetic-blancmange-b9e3a5.netlify.app)



## Project Overview

### Features
- **Movie Listing**: Display all movies with details, including the release year, producer, and actors.
- **Add New Movie**: Add a new movie with existing actors and producers or create new ones directly within the same form.
- **Edit Movie**: Edit movie details, including the associated actors and producer.
- **Redux/MobX State Management**: Handles application state to optimize performance and enable seamless interactions.
- **Responsive Design**: Ensures usability across devices with dynamic layouts.

### Bonus Features
- **React Hooks**: Utilizes hooks for managing component logic and state.
- **IMDb API Integration**: Optionally pulls data from the IMDb API to supplement movie information.
- **Token-Based Authentication**: Authenticates and secures access to API endpoints.

## Tech Stack
- **Frontend**: React.js, Redux/MobX for state management, Axios for HTTP requests
- **Styling**: CSS (or Chakra UI/Tailwind CSS if preferred)
- **Backend**: Node.js and Express.js (connects to the IMDb Clone Backend)
- **Optional**: IMDb API for movie data enrichment

## Setup and Installation

**Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/imdb-clone-frontend.git
   cd imdb-clone-frontend
   ```

## Installation

To install the necessary dependencies for this project, run the following command:

```bash
npm install
## Environment Variables
```
Create a `.env` file in the root directory of your project with the following variables:

```plaintext
REACT_APP_BACKEND_URL=http://localhost:5000
```
## Starting the Frontend

To start the frontend application, run the following command:

```bash
npm start
```
The application will run on http://localhost:3000.

## Folder Structure

Here is the folder structure of the project:

```plaintext
src/
├── components/          # Reusable components
├── pages/               # Page-level components
├── redux/               # Redux store, actions, reducers
├── services/            # API service files for HTTP requests
├── App.js               # Main application component
├── index.js             # Entry point
└── styles/              # Styling files
```

## Usage

### Key Screens

- **Movie List:** Displays all movies with their details, including title, year of release, producer, and actors.
- **Add/Edit Movie:** Form for adding a new movie or editing an existing one, with options to add new actors/producers directly in the form.
- **Actor & Producer Management:** Allows users to add or edit actors and producers associated with movies.

### Key Components

- **MovieCard:** Displays each movie’s information.
- **MovieForm:** Form for adding/editing movie details.
- **ActorForm & ProducerForm:** Modal forms to add new actors or producers.
## State Management with Redux

### Redux Configuration

- **Slices:** Redux slices are created using Redux Toolkit for each entity (movies, actors, producers). Each slice contains actions and reducers for CRUD operations.
- **Store Setup:** The Redux store is configured in `redux/store.js`, integrating slices for movies, actors, and producers.

### Actions and Reducers

- **Movies Slice (`redux/movies`):** Manages state for movie data, including fetching, creating, updating, and deleting movies.
- **Actors Slice (`redux/actors`):** Manages state for actor data, handling actions to list and create actors.
- **Producers Slice (`redux/producers`):** Manages state for producer data with similar actions.
## Example State Structure

Here is an example of the state structure managed by Redux:

```javascript
{
  movies: {
    list: [],         // List of movies
    loading: false,   // Loading state
    error: null       // Error state
  },
  actors: {
    list: [],
    loading: false,
    error: null
  },
  producers: {
    list: [],
    loading: false,
    error: null
  }
}
```

