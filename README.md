# Item Management App

This is a simple React app to manage a list of items, each with various properties and image data. The app allows selecting an item, displaying its properties, and viewing its image. It's built using **React**, **Redux Toolkit**, and **Material UI**.

## Features

- **Display list of items**: Each item has a GUID, name, and path.
- **Select an item**: Clicking on a table row will set the selected item.
- **Tab Navigation**: Allows switching between viewing item properties and image for the selected item.
- **Redux for state management**: Use of Redux Toolkit to manage state (items, selected item, tab state).

## Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**: For state management.
- **Material UI**: For UI components.
- **TypeScript**: For static typing.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/pbramley/react-redux-interview.git
cd react-redux-interview

# Install dependencies
npm install

# Start the dev server
npm run start