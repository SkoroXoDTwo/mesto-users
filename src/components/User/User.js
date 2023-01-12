import "./User.scss";

function User({ name, about, avatar }) {
  return (
    <li>
      <article className="user">
        <img
          className="user__avatar"
          src={avatar}
          alt={`Аватар пользователя ${name}`}
        />
        <div className="user__info">
          <h2 className="user__name">{name}</h2>
          <p className="user__about">{about}</p>
        </div>
      </article>
    </li>
  );
}

export default User;
