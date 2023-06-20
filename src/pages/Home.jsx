import { useContext } from "react";
import UserCard from "../components/UserCard";
import NavBar from "../components/NavBar";
import { UsersContext } from "../context/UsersContext";
import FormModal from "../components/FormModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#555",
  fontSize: "1.5rem",
  fontWeight: "300",
  width: "100%",
  textAlign: "center",
};

const Home = () => {
  const [users] = useContext(UsersContext);

  return (
    <>
      <NavBar />
      <div className="container">
        {users.length > 0 ? (
          users?.map((user, index) => {
            return (
              <UserCard
                key={index}
                name={user?.name}
                email={user?.email}
                phoneNumber={user?.phoneNumber}
              />
            );
          })
        ) : (
          <div style={style}>
            <div
              style={{
                border: "2px solid #555",
                borderRadius: "0.5rem",
                width: "10%",
                margin: "auto",
                padding: "10px 0",
                marginBottom: "2rem",
              }}
            >
              ⚠️
              <p>404!</p>
            </div>
            <h3 style={{ marginBottom: "2rem" }}>
              No users found! Please add atleast one user.
            </h3>

            <FormModal />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
