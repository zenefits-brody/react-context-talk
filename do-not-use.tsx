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
      <NavBar user={user} />
    </div>
  </UserContext.Provider>
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

// Result: Avatar now needs to be used with a context provider.
