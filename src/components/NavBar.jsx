import FormModal from "./FormModal";

const NavBar = () => {
  return (
    <nav>
      <div className="brand-icon">
        <h2>User</h2>
        <h2>Management</h2>
        <h2>Application</h2>
      </div>
      <FormModal />
    </nav>
  );
};

export default NavBar;
