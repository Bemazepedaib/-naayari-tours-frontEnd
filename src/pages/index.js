import React from 'react'
import Catalogue from './sites/Catalogue'
import MainVideo from './sites/MainVideo'
import { useQuery } from '@apollo/client';
import { GET_TRIPS } from './querys/tripQuerys';
import Login from './sites/Login';
export default function Home() {

  var key = 0;
  const { loading, error, data } = useQuery(GET_TRIPS);

  return (
    <Login></Login>
  )

  return <>{!loading && !error && (
      <div>
        <MainVideo></MainVideo>
          <div id="catalogue">{data.trips.map(trip => (
              <Catalogue  key={key++} trip={trip}>
              </Catalogue>
          ))}
          </div>
      </div>
  )}</>
}