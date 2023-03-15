import React from 'react';
import useFetch from './useFetch';
import Card from 'react-bootstrap/Card';
import Style from "./DataFetch.module.css"

function DataFetch() {

    const { data, isLoading, error } =  useFetch("https://jsonplaceholder.typicode.com/users");


    const Card1 =  data && data.map((data)=>{ return ( 
        <Card style={{ width: '18rem' }} key={data.id} className={Style.card} >
        <Card.Body>
          <Card.Title> {data.id} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{data.name}</Card.Subtitle>
          <Card.Text>
            {data.email} 
            {data.phone}
          </Card.Text>
        </Card.Body>
      </Card>
    )})



    const LoadingMessage = <p>Data is Loading.......... Please Wait</p>;
    console.log(data);

  return (
    <div className={Style.blue}>
        <div style={{ textAlign:"center", marginBottom: "40px" }}> <h1>Users Management App </h1>
        <h3> { isLoading && LoadingMessage} </h3></div>
        <section> <div className={Style.flex }> {Card1} </div> </section>
    </div>
  )
}

export default DataFetch