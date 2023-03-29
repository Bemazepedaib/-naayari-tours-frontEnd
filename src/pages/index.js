import React from 'react'
import Catalogue from './sites/Catalogue'
import MainVideo from './sites/MainVideo'
import { GET_TRIPS } from './querys/tripQuerys';
import { useQuery } from '@apollo/client';
import Styles from '../styles/Home.module.css';

export default function Home() {

  var key = 0;
  const { loading, error, data } = useQuery(GET_TRIPS);
  return (

    <div className={Styles.MainContainer}>
<div className={Styles.MainVideoContainer}>
        <MainVideo />
      </div>
      <div>

        {!loading && !error && (
          <div>

            <div id={Styles.catalogue}>{data.trips.map(trip => (
              <Catalogue key={key++} trip={trip}>
              </Catalogue>
            ))}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
