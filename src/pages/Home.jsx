import { useContext } from "react";
import UserCard from "../components/UserCard";
import NavBar from "../components/NavBar";
import { UsersContext } from "../context/UsersContext";

const Home = () => {
  const [users] = useContext(UsersContext);

  return (
    <>
      <NavBar />
      <div className="container">
        {users ? (
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
          <h1>No users</h1>
        )}
      </div>
    </>
  );
};

export default Home;
