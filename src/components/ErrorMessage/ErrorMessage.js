import "./ErrorMessage.scss";

function ErrorMessage({error}) {
  return (
    <div className="err-msg">
      <p className="err-msg__text">{error}</p>
    </div>
  );
}

export default ErrorMessage;
