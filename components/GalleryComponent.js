'use client'
import React, {useState} from "react";
import {log} from "next/dist/server/typescript/utils";
export function GalleryComponent() {
    const [selected,setItemSelected] = useState(0);
    const api = [
        {
            "id":1,
            "images":['ai-1.jpg','ai-2.jpg','ai-3.jpg','ai-4.jpg'],
            "name":"هوش مصنوعی"
        },
        {
            "id":2,
            "images":['animal-1.png','animal-2.jpg','animal-3.jpg','animal-4.jpg','animal-5.jpg'],
            "name":"حیوانات"
        },
        {
            "id":3,
            "images":['ai-1.jpg','ai-2.jpg','ai-3.jpg'],
            "name":"ساختمان ها"
        },
    ];
    function showImages(selected){
        return api[selected].images.map((imag)=>(
            <>
                <div className={`max-w-[400px] max-h-[300px] drop-shadow-xl`}>
                    <img src={'/images/'+imag} alt={imag.name} className={`rounded-lg w-full h-full`}/>
                </div>
            </>
        ))
    }
    return (
        <>
            <div>
                <ul className={`flex justify-center`}>
                    {
                        api.map((list,index)=>(
                            <li className={`item ${selected === index?`item-active`:``}`} onClick={()=>setItemSelected(index)}>{list.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5`}>
                    {
                        showImages(selected)
                    }
            </div>
        </>
    );
}