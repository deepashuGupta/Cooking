import React from "react";
import "./User.css";
import UserContext from "../../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Delhi",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    // console.log("Did Mount");
    const data = await fetch("https://api.github.com/users/deepashuGupta");
    const json = await data.json();
    this.setState({
      userInfo: {
        name: json.name,
        avatar_url: json.avatar_url,
      },
    });
    // this.timer = setInterval(() => {
    //   console.log("React is OP🔥");
    // }, 1000);
  }
  // componentDidUpdate() {
  //   console.log("Did UPadte?");
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  //   console.log("will Unmount?");
  // }

  render() {
    const { name, avatar_url } = this.state.userInfo;
    return (
      <>
        {/* <UserContext.Consumer>
          {(value) => (
            <h1 className="font-semibold">
              ({value.userName + ` (${value.age})`}) this data is coming from
              Context API
            </h1>
          )}
        </UserContext.Consumer> */}
        <div className="user-card">
          <div>
            <h1>Name : {name}</h1>
            <h3>Location : Noida</h3>
            <h5>Email : guptadeepanshu9230@gmail.com</h5>
          </div>
          <div className="img">
            <img src={avatar_url} alt="avatar_img" />
          </div>
        </div>
      </>
    );
  }
}

export default UserClass;
