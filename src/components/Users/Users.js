import "./Users.scss";
import User from "../User/User";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../store/users/usersActions";
import UserLoader from "../UserLoader/UserLoader";

function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const { list: users, isLoading, error } = useSelector((state) => state.users);
  const filter = useSelector((state) => state.filter);

  const filterUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="users">
      {isLoading
        ? [...Array(8)].map((_, index) => <UserLoader key={index} />)
        : filterUsers.map((user) => (
            <User
              key={user._id}
              name={user.name}
              about={user.about}
              avatar={user.avatar}
            />
          ))}
    </ul>
  );
}

export default Users;
