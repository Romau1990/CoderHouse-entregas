import React, { useEffect, useState } from 'react'
import getApi from '../api/api'
import Card from '../WebPages/Components/Card/Card'


export default function useFetch(url) {

    const [data, setData] = useState([])
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let response = async() => {
            let apiResp = await fetch(url);

            try{
                let toJson = await apiResp.json();
                setData(toJson.data);
            }
            catch(err){
                setErr(err);
                console.error('data not found')
            }
            finally{
                setLoading(false)
            }
        }
        response()
    }, [url])

  return {data, err, loading}
}
