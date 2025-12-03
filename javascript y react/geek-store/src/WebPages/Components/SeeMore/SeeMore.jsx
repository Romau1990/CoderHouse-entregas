import React from 'react'


export default function SeeMore(props) {
    let { img, desc } = props;

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
            <button className="button" onClick={fireAlert}>see more details</button>
        </div>
    )
}