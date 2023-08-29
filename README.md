### Desktop Calculator app

Published project on GitHub Pages you can find [here](https://sob96.github.io/calculator/).

The app has 5 components: `Header`, `Calculator`, `Display`, `History`, `Keypad` and 2 pages: `Home`, `Settings`.

The `Header` component displays the application header and navigation.
The `Calculator` component is a root element for calculator data management (logic for storing history, operations, current state, etc.).
The `Display` component shows calculator input, expressions and history.
The `History` component renders a list of previously performed operations.
The `Keypad` component is used to enter operands and perform various operations on those operands.

The same components were implemented using a class-based and functional approach (the class-based approach was used for better understanding and making it easier to work with possible legacy projects).

`Home` page was made for all calculation operations, while `Settings` page was developed for Theme switching and "Clean All" operation.

Error handling is provided by Error boundary.

In this project I mastered:
- React hooks and React classes
- Redux (including Redux-saga, Redux-persist)
- "Command" design pattern
- styled-components
- Cypress (for e2e tests)
- aliases using
- theme change
- calculation history managing
- ESLint
- Yarn package manager 

You can run this project locally just do:
1. git clone https://github.com/Sob96/calculator.git
2. cd calculator
3. yarn install
4. yarn dev
