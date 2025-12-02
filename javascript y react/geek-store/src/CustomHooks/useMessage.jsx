import React, { useState } from 'react'



export default function useMessage(title, txt, confirmTxt, lastTitle, lastTxt) {
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(null)


    let trigger = () => {
        Swal.fire({
            title: title,
            text: txt,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: confirmTxt,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: lastTitle,
                    text: lastTxt,
                    icon: "success"
                });
            }
        });

    }


    return { trigger, err, loading }
}
