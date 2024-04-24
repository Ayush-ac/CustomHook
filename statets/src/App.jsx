import { useState,useEffect } from 'react'
import './App.css'
import useFetchApi from './CustomHook/useFetchApi';


function App() {

  const { data, loading, error } = useFetchApi(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(data);

  if (error) return <p>Error!</p>;
  if (loading) return <p>Loading...</p>;

  const [count, setCount] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", ()=>{
      setCount(window.innerWidth);
    })
  },[])
  

  return (
    <>
      <div>
      <ul>
        {data?.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      </div>
      
    </>
  )
}

export default App
