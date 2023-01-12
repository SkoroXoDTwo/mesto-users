import "./Users.scss";
import User from "../User/User";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../store/users/usersActions";

function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const users = useSelector((state) => state.users);
  const filter = useSelector((state) => state.filter);

  const filterUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="users">
      {filterUsers.map((user) => (
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
