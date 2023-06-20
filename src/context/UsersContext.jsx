import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users"));
    if (data) {
      setUsers(data);
    }
  }, []);

  return (
    <UsersContext.Provider value={[users, setUsers]}>
      {children}
    </UsersContext.Provider>
  );
};

UsersProvider.propTypes = {
  children: PropTypes.node,
};

export default UsersProvider;
