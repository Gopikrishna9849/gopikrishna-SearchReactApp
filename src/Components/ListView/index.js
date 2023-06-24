import "./index.css";

const ListView = (props) => {
  const { filteredUsersList } = props;
  return (
    <ul className="list-container">
      {filteredUsersList.map((user) => (
        <li className="list-item" key={user.id}>
          <div className="image-container">
            <img
              src={user.avatar}
              alt={user.first_name}
              className="avatar-image"
            />
          </div>
          <div className="userid-container">
            <p>{user.id}</p>
          </div>
          <p className="user-name">{user.first_name}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListView;
