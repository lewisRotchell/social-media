import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const users = useSelector((state) => state.users.userList);
  const loading = useSelector((state) => state.users.loading);
  console.log(users);
  //   const [message, setMessage] = useState(false);

  //   useEffect(() => {
  //     if (users.length === 5) {
  //       setMessage(true);
  //     }
  //   });

  return (
    <div>
      <h1>SearchPage</h1>

      {loading ? (
        <p>loading</p>
      ) : !loading && users.length > 0 ? (
        users.map((user) => <p>{user.username}</p>)
      ) : (
        <h1>no Users</h1>
      )}
    </div>
  );
};

export default SearchPage;
