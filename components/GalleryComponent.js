'use client'
import React, {useState} from "react";
export function GalleryComponent() {
    const [selected,setItemSelected] = useState();
    const api = [
        {
            "id":1,
            "images":['ai-1.jpg','ai-2.jpg','ai-3.jpg','ai-4.jpg'],
            "name":"هوش مصنوعی"
        },
        {
            "id":2,
            "images":['ai-1.jpg','ai-2.jpg','ai-3.jpg','ai-4.jpg'],
            "name":"طبیعت"
        },
        {
            "id":3,
            "images":['ai-1.jpg','ai-2.jpg','ai-3.jpg',],
            "name":"ساختمان ها"
        },
    ];

    return (
        <>
            <div>
                <ul className={`flex justify-center`}>
                    {

                    }
                </ul>
            </div>
            <div className={`bg-red-100`}>
                {
                    new Array(api.length)
                }
            </div>
        </>
    );
}