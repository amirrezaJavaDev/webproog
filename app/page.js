'use client'
import HeaderComp from "@/components/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine,faBox,faComment,faHeadset,faShieldAlt,faSliders} from "@fortawesome/free-solid-svg-icons";
import {GalleryComponent} from "@/components/GalleryComponent";
import{ThemeProvider} from "@/components/ThemeContext";
import useDarkMode from "@/hook/useDarkMode";

export default function AppPageLayout(){
    return(
       <>
           <header className={`shadow`}>
                   <HeaderComp/>
           </header>
           <section>
               <div className={`container mx-auto py-4 px-10 lg:px-20`}>
                 <div className={`flex flex-col lg:flex-row items-center gap-x-7`}>
                     <div>
                         <h1 className={`font-bold text-2xl mb-5 dark:text-white`}>طراحی سایت با <span className={`text-indigo-600`}>جدید ترین فریمورک ها</span></h1>
                         <p className={`text-gray-700 text-justify leading-8 mb-6 dark:text-white`}>
                             می توانید با ثبت نام در سایت نمونه پروژه های موجود را مشاهده کنید ویا با فریمورک های روز دنیا آشنابشین
                             پس حتما در سایت ما ثبت نام کنید.
                         </p>
                         <button className={`btn reg-btn`}>عضویت</button>
                         <button className={`btn log-btn mr-5`}>ورود</button>
                     </div>
                     <img src="/images/animal-1.png"/>
                 </div>
               </div>
           </section>

           <div className="h-[80px] overflow-hidden" >
               <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
                   <path d="M0.00,49.98 C150.00,150.00 479.96,-57.72 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="stroke-none	 fill-gray-100">
                   </path>
               </svg>
           </div>
           <section className={`bg-gray-100 pb-12`}>
              <div className={`container  mx-auto py-6 px-10 lg:px-20`}>
                  <div className={`text-center`}>
                      <h1 className={`text-2xl font-bold mb-5 dark:text-black`}>چرا ما؟</h1>
                      <p className={`text-gray-700 leading-8 mb-6 dark:text-black`}>
                        ما با تیم های قدر کار می کنیم و از پیدا کردن باگ های تشکیل شده توسط افراد ترسی نداریم:\ همه اش الکی بابا
                      </p>
                  </div>
                  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  text-right`}>
                      <div className={`flex`}>
                         <div className={`p-4 rounded-full border border-1 border-indigo-600`}>
                             <i className={` text-[2rem] leading-0   text-indigo-600`}>
                             <FontAwesomeIcon icon={faShieldAlt}
                                              className={`leading-0 text-[2rem]`}
                             ></FontAwesomeIcon></i> </div>
                          <p className={`mr-5 my-auto`}>مقاوم در برابر حملات سایبری از قبیلDDOS,DNSو...</p>
                      </div>
                      <div className={`flex`}>
                         <div className={` p-4 rounded-full border border-1 border-indigo-600`}>
                             <i className={`text-[2rem] leading-0   text-indigo-600`}>
                             <FontAwesomeIcon icon={faHeadset}
                                              className={`leading-0 text-[2rem]`}
                             ></FontAwesomeIcon></i> </div>
                          <p className={`mr-5 my-auto`}>پشتیبانی 24 ساعته در تمامی محصولات و خدمات ما پذیرا می باشد.</p>
                      </div>
                      <div className={`flex`}>
                         <div className={`p-4 rounded-full border border-1 border-indigo-600`}>
                             <i className={`text-[2rem] leading-0   text-indigo-600`}>
                             <FontAwesomeIcon icon={faComment}
                                              className={`leading-0 text-[2rem]`}
                             ></FontAwesomeIcon></i> </div>
                          <p className={`mr-5 my-auto`}>ما پذیرای نظرات و انتقادات شما می باشیم.</p>
                      </div>
                      <div className={`flex`}>
                         <div className={`p-4 rounded-full border border-1 border-indigo-600`}>
                             <i className={`text-[2rem] leading-0   text-indigo-600`}>
                             <FontAwesomeIcon icon={faSliders}
                                              className={`leading-0 text-[2rem]`}
                             ></FontAwesomeIcon></i> </div>
                          <p className={`mr-5 my-auto`}>قابلیت شخصی سازی پنل های شخصی خود و قابل تغییر کردن است.</p>
                      </div>
                      <div className={`flex`}>
                         <div className={`p-4 rounded-full border border-1 border-indigo-600`}>
                             <i className={`text-[2rem] leading-0   text-indigo-600`}>
                             <FontAwesomeIcon icon={faBox}
                                              className={`leading-0 text-[2rem]`}
                             ></FontAwesomeIcon></i> </div>
                          <p className={`mr-5 my-auto`}>ارسال تمامی محصولات به صورت پکبندی مناسب با کالا می باشد.</p>
                      </div>
                      <div className={`flex`}>
                         <div className={`p-4 rounded-full border border-1 border-indigo-600 `}>
                             <i className={`text-[2rem] leading-0   text-indigo-600`}>
                             <FontAwesomeIcon icon={faChartLine}
                                              className={`leading-0 text-[2rem]`}
                             ></FontAwesomeIcon></i> </div>
                          <p className={`mr-5 my-auto`}>وضعیت خرید خود را در نمودار های کاربری مشاهده کنید.</p>
                      </div>
                  </div>
              </div>
           </section>
           <div className="h-[80px] overflow-hidden" >
               <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
                  <path d="M0.00,49.98 C150.00,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" className="stroke-none	 fill-gray-100">
                 </path>
               </svg>
           </div>

           <section>
               <div className={`container lg:w-3/4 mx-auto py-4 px-10 lg:px-20`}>
                   <div className={`text-center mb-12`}>
                       <h1 className={`text-2xl font-bold mb-5 dark:text-white`}>پنل <span className={`text-indigo-600`}>محصولات</span></h1>
                       <p className={`text-gray-700 leading-8 mb-6 dark:text-white`}>
                           ما با تیم های قدر کار می کنیم و از پیدا کردن باگ های تشکیل شده توسط افراد ترسی نداریم:\ همه اش الکی بابا
                       </p>
                   </div>
                   <div className={`flex flex-col lg:flex-row justify-between gap-7 `}>
                       <div className={`product-card`}>
                           <div className={`product-card-header`}>
                               <h1 className={`text-2xl font-bold`}>مقدماتی</h1>
                               <p className={`my-6`}><span className={`text-2xl font-bold`}>500,000</span>تومان</p>
                               <p className={`font-bold text-gray-700`}>ماهانه</p>
                           </div>
                           <hr/>
                           <div className={`space-y-4 py-5`}>
                               <p className={`font-bold text-2xl`}>دامنه رایگان</p>
                               <p>ساب دامنه رایگان</p>
                               <p>پیاده سازی رایگان</p>
                               <p>ثبت گواهی SSL</p>
                           </div>
                           <div className={`py-8`}>
                               <button className={`btn reg-btn`}>خرید</button>
                           </div>
                       </div>
                       <div className={`product-card bg-indigo-600 dark:bg-indigo-600 `}>
                           <div className={`product-card-header text-white`}>
                               <h1 className={`text-2xl font-bold`}>مقدماتی</h1>
                               <p className={`my-6`}><span className={`text-2xl font-bold`}>1,500,000</span>تومان</p>
                               <p className={`font-bold text-gray-700  text-white`}>ماهانه</p>
                           </div>
                           <hr/>
                           <div className={`space-y-4  text-white py-5`}>
                               <p className={`font-bold text-2xl`}>دامنه رایگان</p>
                               <p>ساب دامنه رایگان</p>
                               <p>پیاده سازی رایگان</p>
                               <p>ثبت گواهی SSL</p>
                           </div>
                           <div className={`py-8`}>
                               <button className={`btn log-btn`}>خرید</button>
                           </div>
                       </div>
                       <div className={`product-card`}>
                           <div className={`product-card-header`}>
                               <h1 className={`text-2xl font-bold`}>مقدماتی</h1>
                               <p className={`my-6`}><span className={`text-2xl font-bold`}>500,000</span>تومان</p>
                               <p className={`font-bold text-gray-700`}>ماهانه</p>
                           </div>
                           <hr/>
                           <div className={`space-y-4 py-5`}>
                               <p className={`font-bold text-2xl`}>دامنه رایگان</p>
                               <p>ساب دامنه رایگان</p>
                               <p>پیاده سازی رایگان</p>
                               <p>ثبت گواهی SSL</p>
                           </div>
                           <div className={`py-8`}>
                               <button className={`btn reg-btn`}>خرید</button>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
           <section className={`mt-24`}>
               <div className={`container lg:w-3/4 mx-auto py-4 px-10 lg:px-20`}>
                   <div className={`text-center mb-12`}>
                       <h1 className={`text-2xl font-bold mb-5 dark:text-white`}>گالری <span className={`text-indigo-600`}>نمونه کار</span></h1>
                       <p className={`text-gray-700 leading-8 mb-6 dark:text-white`}>
                           ما با تیم های قدر کار می کنیم و از پیدا کردن باگ های تشکیل شده توسط افراد ترسی نداریم:\ همه اش الکی بابا
                       </p>
                   </div>
                   <GalleryComponent/>
               </div>
           </section>


           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
       </>
    );
}