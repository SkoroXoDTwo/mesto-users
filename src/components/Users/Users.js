import "./Users.scss";
import User from "../User/User";

function Users() {
  const users = [
    {
      name: "Alex",
      about: "Учусь на Frontend-разработчика fdf fdf  df d fdfdf df d fdfdf fdf  df d fdfdf fdf  df d fdfdf fdf  df d fdfdf fdf  df d fdfdf fdf  df d fdfdf ",
      avatar: "https://www.amworld.ru/upload/000/u3/3/4/aaeef86e.jpg",
      _id: 1,
    },
    {
      name: "Alex",
      about: "Учусь на Frontend-разработчика",
      avatar: "https://www.amworld.ru/upload/000/u3/3/4/aaeef86e.jpg",
      _id: 2,
    },
    {
      name: "Alex",
      about: "Учусь на Frontend-разработчика",
      avatar: "https://www.amworld.ru/upload/000/u3/3/4/aaeef86e.jpg",
      _id: 3,
    },
  ];

  return (
    <ul className="users">
      {users.map((user) => (
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
