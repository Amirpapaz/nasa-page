import React from 'react'

export default function Main(props){
    const {data} = props
    
    return (<div className= "imageContainer">
        <img src= {data?.hdurl} alt="space-demo" className="bgImage"/>
    </div>)
}