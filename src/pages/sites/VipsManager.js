import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_REQUESTS } from '../querys/requestQuerys';
import VipManagerView from '../elements/VipManagerView';


const VipsManager = () => {

    const { loading, error, data} = useQuery(GET_REQUESTS)

  return (!loading && !error &&
    <div>
        <VipManagerView requests={data}/>
    </div>
  )
}

export default VipsManager
