import FormModal from "./FormModal";
import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

const NavBar = () => {
  const [users] = useContext(UsersContext);
  return (
    <nav>
      <div className="brand-icon">
        <h2>User</h2>
        <h2>Management</h2>
        <h2>Application</h2>
      </div>
      {users.length != 0 && <FormModal />}
    </nav>
  );
};

export default NavBar;
