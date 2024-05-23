import { useState, useEffect } from 'react'
import Footer from './components/Footer.jsx'
import SideBar from './components/SideBar.jsx'
import Main from "./components/Main.jsx"

function App(){
  const [data, setData] = useState(null)
  const [loading,setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  //seting NASA_KEY to the API value (accessing the value through import...)
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
  const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`

  //to handle the display of the sidebar
  function handleToggleModal(){
    setShowModal(!showModal)
  }

  useEffect(()=>{
    //fetching the data from the API
    async function fetchAPIData(){
      try{
        const res = await fetch(url)
        const apiData = await res.json()
        setData(apiData)
        console.log(`DATA\n`, apiData)
      }catch(err){
        console.log(err.message)
      }
    }
    fetchAPIData()
  },[])

  
  return (<>
    {data ? (<Main data={data}/>) : (<div className="loadingState">
    <i className="fa-solid fa-gear"></i>
    </div>)}
    {showModal && <SideBar data={data} handleToggleModal = {handleToggleModal}/>}
    {data && (<Footer data={data} handleToggleModal = {handleToggleModal}/>)}
  </>)
}


export default App