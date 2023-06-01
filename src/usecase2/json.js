import React, { useEffect, useState } from "react"

const UserData = () => {
  const [data, setData] = useState("")

  const fetchUserData = () => {
    // fetch("https://jsonplaceholder.typicode.com/data")
    fetch("http://localhost:8000/hello")
      .then(response => {
        return response.text()
      })
      .then(data => {
        setData(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (

    <div>
      {data.length ? <>{data}</> : "NO DATA"}
    </div>
  );
}

export { UserData };
