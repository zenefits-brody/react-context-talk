const App = () => <Toolbar theme="dark" />;

const Toolbar = ({ theme }) => (
  <div>
    <IconButton theme={theme} />
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
