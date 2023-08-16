import { React, useEffect, useState } from "react";

const Fetchapi = () => {
  const [users, setUser] = useState([])
  useEffect(() => {
    async function Apidata()
    {
      const responce = await fetch("https://fakestoreapi.com/products")
      console.log(responce)
      const result = await responce.json();
      setUser(result)
    }
    Apidata();
  }, [])
  return (
    <div className="container">

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(users => {
              return (
                <tr key={users.id}>
                  <td>{users.id}</td>
                  <td>{users.title}</td>
                  <td>{users.price}</td>
                  <td>{users.description}</td>
                  <td>{users.category}</td>
                  <td><img src={users.image} alt="img" key="img" width="90px" /></td>
                  <td>{users.rating.rate}</td>
                  <td>{users.rating.count}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default Fetchapi;