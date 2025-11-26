import React, { useEffect, useState } from 'react'
import getApi from '../api/api'
import useFetch from '../usefetch/UseFetch';



export default function GameList() {
    let data = useFetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");

  return (
    <div>
        {data}
    </div>
  )
}
