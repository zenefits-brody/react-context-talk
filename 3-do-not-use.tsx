import { createContext, useContext } from 'react';

const App = ({ user }) => (
  <div>
    <NavBar user={user} />
  </div>
);

const NavBar = ({ user }) => (
  <div>
    <Avatar user={user} />
  </div>
);

const Avatar = ({ user: { profileImage, firstName, lastName } }) => (
  <div>
    <img src={profileImage} alt={`${firstName} ${lastName}'s profile image`} />
    {firstName} {lastName}
  </div>
);

/**
 * What if we use context to provide user?
 */

const UserContext = createContext({});

const AppWithContext = ({ user }) => (
  <UserContext.Provider value={user}>
    <div>
      <NavBarWithContext />
    </div>
  </UserContext.Provider>
);

const NavBarWithContext = () => (
  <div>
    <AvatarWithContext />
  </div>
);

const AvatarWithContext = () => {
  const { profileImage, firstName, lastName } = useContext(UserContext);

  return (
    <div>
      <img src={profileImage} alt={`${firstName} ${lastName}'s profile image`} />
      {firstName} {lastName}
    </div>
  );
};

// Thoughts:

// Avatar now needs to be used with a context provider, which makes reuse more difficult.

// Performance: rerender when context changes.
