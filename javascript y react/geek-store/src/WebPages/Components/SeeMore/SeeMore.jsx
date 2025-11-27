import React, { useEffect, useState } from 'react'


// export default function seeMore(props) {
//   let {img, info} = props;
//   return (
//     <div className="see-more-container">
//         <img className="see-more-img" src={img} alt="" />
//         <p className="see-more-info">{info}</p>
//         <button className="see-more-close">close</button>
//     </div>
//   )
// }



// useEffect(() => {
//     let alertResp = async () => {
//         let alertData = await swalWithBootstrapButtons;
//         setAlert(alertData)
//     }
//     alertResp()
// }, [])






export default function SeeMore(props) {
    let { img, desc } = props;
    let [alert, setAlert] = useState(null)



    let fireAlert = () => {

        if (!img || !desc) {
            console.error('data not found')
            return <p>data not found</p>
        }

        Swal.fire({
            title: "card description",
            width: "60rem",
            text: desc,
            imageUrl: img,
            imageWidth: 400,
            imageHeight: 'auto',
            imageAlt: "Custom image",
            background: "#dbdbdbff url(/images/trees.png)",
            backdrop: `rgba(0, 0, 0, 0.81)`,
            confirmButtonText: "close",
        });

    }




    return (
        <div>
            <button onClick={fireAlert}>see more details</button>
        </div>
    )
}