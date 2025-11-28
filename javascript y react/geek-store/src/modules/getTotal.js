import React from 'react'

export default function getTotal(...price) {

    let total = price.reduce((acc, curr) => {
        return acc += curr;
    })

  return total;
}
