import "./Users.scss";
import User from "../User/User"

function Users() {
  return (
    <ul className="users">
      <User />
      <User />
      <User />
      <User />
    </ul>
  );
}

export default Users;
