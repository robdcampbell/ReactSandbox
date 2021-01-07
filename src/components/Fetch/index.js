import React, { useState, useEffect } from "react";

// Placeholder API - fetching posts (100)
const url = "https://jsonplaceholder.typicode.com/posts";

const FetchComponent = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    setData(posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch sandbox</h1>
      <br />
      <h2>Fetch output:</h2>
      <ul>
        {data.map((item) => {
          const { id, title } = item;
          return (
            <li key={id}>
              <strong>Post id: {id}.</strong>Post Title: {title}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchComponent;

// NOTES:
/*
 
* use Async Await

1) use JSON placeholder as practice
2) be able to fetch/display data without Axios
  2.a) Display the raw json - (using JSON.stringify())
  2.b) Display specific elements of the data (title, username, img)
3) be able to fetch/display data WITH axios (wihout looking at Docs).


// notes:
  - - always use an Async/Await function when fetching data
  - - use a combination of useState and useEffect to retreive and display data
  - - clean up function! 

*/
