import { useState } from 'react';

const App = () => {
  // Our app has two themes: dark and light.
  const [theme, setTheme] = useState('dark');

  return (
    <div>
      <Toolbar theme={theme} />
      <NavBar theme={theme} />
    </div>
  );
};

const Toolbar = ({ theme }) => (
  <div>
    <IconButton theme={theme} />
    {/* ... */}
  </div>
);

const NavBar = ({ theme }) => (
  <div>
    <IconButton theme={theme} />
    {/* ... */}
  </div>
);

const IconButton = ({ theme }) => <Button theme={theme} />;

const Button = ({ theme }) => {
  if (theme === 'dark') {
    // ...
  }
  if (theme === 'light') {
    // ...
  }
};

// https://reactjs.org/docs/context.html#when-to-use-context
