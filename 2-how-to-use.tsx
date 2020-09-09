import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

const App = () => (
  <ThemeContext.Provider value="dark">
    <Toolbar />
    <NavBar />
  </ThemeContext.Provider>
);

const Toolbar = () => (
  <div>
    <IconButton />
  </div>
);

const NavBar = () => (
  <div>
    <IconButton />
    {/* ... */}
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
