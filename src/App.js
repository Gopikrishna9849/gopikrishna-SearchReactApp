import "./App.css";
import { Component } from "react";
import ListView from "./Components/ListView";
import SearchItem from "./Components/SearchItem";

class App extends Component {
  state = {
    searchInput: "",
    usersDetailsList: [],
  };
  fetchUsers = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const data = await response.json();
      this.setState({ usersDetailsList: data.data });
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };
  onUserInputChange = (searchInput) => {
    this.setState({ searchInput });
  };
  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { usersDetailsList, searchInput } = this.state;
    const filteredUsersList = usersDetailsList.filter((user) =>
      user.first_name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="container">
        <SearchItem
          onUserInputChange={this.onUserInputChange}
          searchInput={searchInput}
        />
        <ListView filteredUsersList={filteredUsersList} />
      </div>
    );
  }
}
export default App;
