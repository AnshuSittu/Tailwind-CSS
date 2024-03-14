import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    // API CALL
    const data = await fetch("https://api.github.com/users/anshusittu");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("Componet is unmounted");
  }

  render() {
    const { name, location, avatar_url, company, bio } = this.state.userInfo;
    return (
      <div className="user-cart">
        <h1 style={{ textAlign: "Center" }}>
          This is coming from Class based Component
        </h1>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Company: {company}</h3>
        <h3>Contact: anshu.possible@gmail.com</h3>
        <p>BIO:{bio}</p>
      </div>
    );
  }
}

export default UserClass;
