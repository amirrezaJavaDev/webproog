'use client'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {faMoon} from "@fortawesome/free-solid-svg-icons/faMoon";
import {faSun} from "@fortawesome/free-solid-svg-icons/faSun";
import Link from "next/link";
import { useState } from "react";
import useDarkMode from "@/hook/useDarkMode";

export default function HeaderComp(){
    const [colorTheme,setTheme] = useDarkMode();

    const [dropdown,setDropDown] = useState(false);
    const [mobileDropDown,setMobileDropDown] = useState(false);
    function handelIcon(){
        if(colorTheme === 'dark'){
            return faMoon;
        }else {
            return faSun;
        }
    }
    const handleDropDown = ()=>{
        setDropDown(!dropdown);
    };

    const handleMobileDropDown = ()=>{
        setMobileDropDown(!mobileDropDown);
    };
    return(
        <div className={`container mx-auto py-4 `}>
            <nav className={`relative flex justify-between items-center`}>
                {/*desktop*/}
               <div className={`hidden md:flex items-center dark:text-white`} >
                    <div>
                        <button className={`btn reg-btn`}>عضویت </button>
                        <button className={`btn log-btn`}>ورود</button>
                    </div>
                    <div className={`mr-5`}>
                       <ul className={`flex gap-7`}>
                           <li className={`${dropdown?"":"nav-item-active"}`}>صفحه اصلی</li>
                           <div>
                               <li className={`nav-item ${dropdown?"nav-item-active":""}`} onMouseEnter={handleDropDown} >
                                   محصولات
                                   <FontAwesomeIcon icon={faChevronDown} className={`fas fa-chevron-down text-[0.7rem] mr-2`}></FontAwesomeIcon>
                               </li>
                               <div className={`absolute top-12 bg-white border rounded-lg py-4 px-5 hover:cursor-pointer ${dropdown?"block":"hidden"}`}  onMouseLeave={handleDropDown}>
                                   <ul className={`space-y-3 dark:text-black`}>
                                       <li className={`hover:text-indigo-600`}><Link href="#">سرور اختصاصی</Link></li>
                                       <li className={`hover:text-indigo-600`}><Link href="#">طراحی سایت</Link></li>
                                       <li className={`hover:text-indigo-600`}><Link href="#">SEO</Link></li>
                                       <li className={`hover:text-indigo-600`}><Link href="#">طراحی اپلیکیشن</Link></li>
                                   </ul>
                               </div>
                           </div>
                           <li className={`nav-item`}>درباره ما</li>
                           <li className={`nav-item`}>تماس با ما</li>
                       </ul>
                   </div>
               </div>
               {/*mobile*/}
                <div className={`md:hidden`}>
                    <div>
                        <i className={`px-2`} onClick={handleMobileDropDown}>
                            <FontAwesomeIcon icon={mobileDropDown?faTimes:faBars} className={`${mobileDropDown?"fas fa-times":"fas fa-bars"} text-xl`}></FontAwesomeIcon>
                        </i>
                    </div>
                    <div className={`absolute top-12 bg-white border rounded-lg py-4 px-6 w-full  ${mobileDropDown?"":"hidden"}`}>
                        <ul className={`flex flex-col gap-7 text-center`}>
                                <li>صفحه اصلی</li>
                                <div>
                                    <li onClick={handleDropDown} >
                                        محصولات
                                        <FontAwesomeIcon icon={faChevronDown} className={`fas fa-chevron-down text-[0.7rem] mr-2`}></FontAwesomeIcon>
                                    </li>
                                    <div className={`max-w-max mx-auto bg-white border rounded-lg py-4 px-5 hover:cursor-pointer ${dropdown?"block":"hidden"}`} >
                                        <ul className={`space-y-3`}>
                                            <li className={`hover:text-indigo-600`}><Link href="#">محصول شماره 1</Link></li>
                                            <li className={`hover:text-indigo-600`}><Link href="#">محصول شماره 2</Link></li>
                                            <li className={`hover:text-indigo-600`}><Link href="#">محصول شماره 3</Link></li>
                                            <li className={`hover:text-indigo-600`}><Link href="#">محصول شماره 4</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <li>درباره ما</li>
                                <li>تماس با ما</li>
                        </ul>
                        <div className={`flex flex-col gap-5 mt-3`}>
                            <button className={`btn reg-btn`}>عضویت</button>
                            <button className={`btn log-btn`}>ورود</button>
                        </div>
                    </div>
                </div>
               {/* logo */}
               <div className={`flex`}>
                   <div>
                       <button className={`leading-0`}
                               onClick={()=>setTheme(colorTheme)}
                       >
                           <FontAwesomeIcon icon={handelIcon()}
                                            className={`btn log-btn dark:reg-btn  fas fa-moon`}></FontAwesomeIcon>
                       </button>
                   </div>
                    <h1 className={`px-2 font-bold text-2xl dark:text-white`}>WebProg.ir</h1>
                </div>
            </nav>
        </div>
    );
}