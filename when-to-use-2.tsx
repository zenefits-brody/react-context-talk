import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

const App = () => (
  <ThemeContext.Provider value="dark">
    <Toolbar />
  </ThemeContext.Provider>
);

const Toolbar = () => (
  <div>
    <IconButton />
  </div>
);

const IconButton = () => <Button />;

const Button = () => {
  const theme = useContext(ThemeContext);

  if (theme === 'dark') {
    // ...
  }
  if (theme === 'light') {
    // ...
  }
};

// https://reactjs.org/docs/context.html#when-to-use-context
