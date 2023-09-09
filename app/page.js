'use client'
import HeaderComp from "@/components/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine,faBox,faComment,faHeadset,faShieldAlt,faSliders} from "@fortawesome/free-solid-svg-icons";
import {GalleryComponent} from "@/components/GalleryComponent";
import { FaInstagram,FaTelegram,FaFacebook,FaLinkedin } from "react-icons/fa6";
import useAOS from "@/hook/useAOS";

export default function AppPageLayout(){
    useAOS()
    return(
       <>
           <header className={`shadow`}>
                   <HeaderComp/>
           </header>
           <section>
               <div className={`container mx-auto py-4 px-10 lg:px-20`}>
                 <div className={`flex flex-col lg:flex-row items-center gap-x-7`}>
                     <div data-aos="fade-up">
                         <h1 className={`font-bold text-2xl mb-5 dark:text-white`}>طراحی سایت با <span className={`text-indigo-600`}>جدید ترین فریمورک ها</span></h1>
                         <p className={`text-gray-700 text-justify leading-8 mb-6 dark:text-white`}>
                             می توانید با ثبت نام در سایت نمونه پروژه های موجود را مشاهده کنید ویا با فریمورک های روز دنیا آشنابشین
                             پس حتما در سایت ما ثبت نام کنید.
                         </p>
                         <button className={`btn reg-btn`}>عضویت</button>
                         <button className={`btn log-btn mr-5`}>ورود</button>
                     </div>
                     <img src="/images/animal-1.png" data-aos="fade-up" data-aos-delay="400"/>
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
                  <div data-aos="fade-up" className={`text-center`}>
                      <h1 className={`text-2xl font-bold mb-5 dark:text-black`}>چرا ما؟</h1>
                      <p className={`text-gray-700 leading-8 mb-6 dark:text-black`}>
                        ما با تیم های قدر کار می کنیم و از پیدا کردن باگ های تشکیل شده توسط افراد ترسی نداریم:\ همه اش الکی بابا
                      </p>
                  </div>
                  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  text-right`}>
                      <div data-aos="zoom-in" data-aos-delay="400" className={`flex`}>
                         <div className={`p-4 rounded-full border border-1 border-indigo-600`}>
                             <i className={` text-[2rem] leading-0   text-indigo-600`}>
                             <FontAwesomeIcon icon={faShieldAlt}
                                              className={`leading-0 text-[2rem]`}
                             ></FontAwesomeIcon></i> </div>
                          <p className={`mr-5 my-auto`}>مقاوم در برابر حملات سایبری از قبیلDDOS,DNSو...</p>
                      </div>
                      <div data-aos="zoom-in" data-aos-delay="450" className={`flex`}>
                         <div className={` p-4 rounded-full border border-1 border-indigo-600`}>
                             <i className={`text-[2rem] leading-0   text-indigo-600`}>
                             <FontAwesomeIcon icon={faHeadset}
                                              className={`leading-0 text-[2rem]`}
                             ></FontAwesomeIcon></i> </div>
                          <p className={`mr-5 my-auto`}>پشتیبانی 24 ساعته در تمامی محصولات و خدمات ما پذیرا می باشد.</p>
                      </div>
                      <div data-aos="zoom-in" data-aos-delay="500" className={`flex`}>
                         <div className={`p-4 rounded-full border border-1 border-indigo-600`}>
                             <i className={`text-[2rem] leading-0   text-indigo-600`}>
                             <FontAwesomeIcon icon={faComment}
                                              className={`leading-0 text-[2rem]`}
                             ></FontAwesomeIcon></i> </div>
                          <p className={`mr-5 my-auto`}>ما پذیرای نظرات و انتقادات شما می باشیم.</p>
                      </div>
                      <div data-aos="zoom-in" data-aos-delay="550" className={`flex`}>
                         <div className={`p-4 rounded-full border border-1 border-indigo-600`}>
                             <i className={`text-[2rem] leading-0   text-indigo-600`}>
                             <FontAwesomeIcon icon={faSliders}
                                              className={`leading-0 text-[2rem]`}
                             ></FontAwesomeIcon></i> </div>
                          <p className={`mr-5 my-auto`}>قابلیت شخصی سازی پنل های شخصی خود و قابل تغییر کردن است.</p>
                      </div>
                      <div data-aos="zoom-in" data-aos-delay="600" className={`flex`}>
                         <div className={`p-4 rounded-full border border-1 border-indigo-600`}>
                             <i className={`text-[2rem] leading-0   text-indigo-600`}>
                             <FontAwesomeIcon icon={faBox}
                                              className={`leading-0 text-[2rem]`}
                             ></FontAwesomeIcon></i> </div>
                          <p className={`mr-5 my-auto`}>ارسال تمامی محصولات به صورت پکبندی مناسب با کالا می باشد.</p>
                      </div>
                      <div data-aos="zoom-in" data-aos-delay="650" className={`flex`}>
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
                   <div data-aos="fade-up-left" className={`text-center mb-12`}>
                       <h1 className={`text-2xl font-bold mb-5 dark:text-white`}>پنل <span className={`text-indigo-600`}>محصولات</span></h1>
                       <p className={`text-gray-700 leading-8 mb-6 dark:text-white`}>
                           ما با تیم های قدر کار می کنیم و از پیدا کردن باگ های تشکیل شده توسط افراد ترسی نداریم:\ همه اش الکی بابا
                       </p>
                   </div>
                   <div className={`flex flex-col lg:flex-row justify-between gap-7 `}>
                       <div data-aos="flip-left" data-aos-delay="400" className={`product-card`}>
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
                       <div data-aos="flip-left" data-aos-delay="500" className={`product-card bg-indigo-600 dark:bg-indigo-600 `}>
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
                               <button className={`btn log-btn dark:text-black`}>خرید</button>
                           </div>
                       </div>
                       <div data-aos="flip-left" data-aos-delay="600" className={`product-card`}>
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
                   <div data-aos="fade-up-left" className={`text-center mb-12`}>
                       <h1 className={`text-2xl font-bold mb-5 dark:text-white`}>گالری <span className={`text-indigo-600`}>نمونه کار</span></h1>
                       <p className={`text-gray-700 leading-8 mb-6 dark:text-white`}>
                           ما با تیم های قدر کار می کنیم و از پیدا کردن باگ های تشکیل شده توسط افراد ترسی نداریم:\ همه اش الکی بابا
                       </p>
                   </div>
                   <GalleryComponent/>
               </div>
           </section>

           <section>
               <div className={`container mx-auto py-4 px-10 lg:w-4/5 lg:px-20`}>
                   <div className={`flex flex-col lg:flex-row items-center gap-x-7`}>
                       <div data-aos="fade-up">
                           <h1 className={`font-bold text-2xl mb-5 dark:text-white`}>دوست داری آخرین اخبار <span className={`text-indigo-600`}>ما رو دریافت کنی؟</span></h1>
                           <p className={`text-gray-700 text-justify leading-8 mb-6 dark:text-white`}>
                              با وارد کردن ایمیل خود در بخش زیر می توانید از اخرین اخبار ما با خبر شوید.
                           </p>
                           <form action="#">
                               <div>
                                   <label className={`contact-label`} for="email">ایمیل:</label>
                                   <input className={`contact-input`} id="email" type="email" placeholder={'وارد کردن ایمیل'}/>
                               </div>
                               <div className={`mt-5`}>
                                   <label className={`contact-label`} for="textarea">متن:</label>
                                   <textarea
                                       className={`contact-textarea`}
                                       rows="4"
                                       id="textarea"
                                       placeholder={'پیام...'}></textarea>
                               </div>
                               <button className={`btn mt-3 reg-btn dark:log-btn dark:text-black`}>ارسال</button>
                           </form>
                       </div>
                       <img data-aos="fade-up"
                            data-aos-delay="400"
                            src="/images/email-2.png"/>
                   </div>
               </div>
           </section>
           <footer className={`bg-gray-100 dark:bg-gray-800`}>
               <div className={`container mx-auto py-4 px-10  lg:px-20`}>
                    <div className={`flex flex-col lg:flex-row items-center justify-between `}>
                        <div
                            data-aos="fade-down"
                            className={`dark:text-white mb-6 lg:mb-0`} >
                            <h1 className={`text-2xl font-bold dark:text-white mb-4`}>WebProg.ir</h1>
                            <p className={`text-gray-700 leading-8 dark:text-white`}>ممنونم از این که تا اینجای سایت رو دنبال کردین امید وارم که خوش تون آمده باشد.</p>
                            <div className={`flex space-x-reverse space-x-4`}>
                                <a href="#"><i className={`text-4xl`}><FaInstagram/></i></a>
                                <a href="#"><i className={`text-4xl`}><FaFacebook/></i></a>
                                <a href="#"><i className={`text-4xl`}><FaLinkedin/></i></a>
                                <a href="#"><i className={`text-4xl`}><FaTelegram/></i></a>
                            </div>
                        </div>
                        <div className={`grid grid-cols-2 dark:text-white lg:grid-cols-4 gap-8`}>
                            <div data-aos="fade-down"
                                 data-aos-delay="400" >
                                <h2 className={`leading-8 font-bold border-b-2 border-indigo-600 mb-3`}>بخش های سایت</h2>
                                <ul className={`space-y-3`}>
                                    <li>صفحه اصلی</li>
                                    <li>محصولات</li>
                                    <li>درباره ما</li>
                                    <li>تماس با ما</li>
                                </ul>
                            </div>
                            <div data-aos="fade-down"
                                 data-aos-delay="500">
                                <h2 className={`leading-8 font-bold border-b-2 border-indigo-600 mb-3`}>محصولات</h2>
                                <ul className={`space-y-3`}>
                                    <li>بزودی</li>
                                    <li>محصولات</li>
                                    <li>بزودی</li>
                                    <li>بزودی</li>
                                </ul>
                            </div>
                            <div data-aos="fade-down"
                                 data-aos-delay="600">
                                <h2 className={`leading-8 font-bold border-b-2 border-indigo-600 mb-3`}>بخش های سایت</h2>
                                <ul className={`space-y-3`}>
                                    <li>صفحه اصلی</li>
                                    <li>محصولات</li>
                                    <li>درباره ما</li>
                                    <li>تماس با ما</li>
                                </ul>
                            </div>
                            <div data-aos="fade-down"
                                 data-aos-delay="700">
                                <h2 className={`leading-8 font-bold border-b-2 border-indigo-600 mb-3`}>درباره ما</h2>
                                <ul className={`space-y-3`}>
                                    <li>درباره ما</li>
                                    <li>تماس با ما</li>
                                </ul>
                            </div>
                        </div>
                    </div>
               </div>
           </footer>
       </>
    );
}