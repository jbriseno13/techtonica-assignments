const Header = (props) => {
  let message;
  if (props.user) {
    message = `Let's test your knowledge ${props.user}`;
  } else {
    message = `Welcome to Trivia!`;
  }

  return (
    <div className={"textHeader"}>
      <h3>{message}</h3>
    </div>
  );
};

export default Header;
