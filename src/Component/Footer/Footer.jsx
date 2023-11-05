import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <div className="my-12">

         <footer className="relative pt-8 p3-6">
            <div className="">
               <div className="container mx-auto flex flex-wrap text-left lg:text-left bg-indigo-500 py-5 text-white">
                  <div className="w-full lg:w-6/12 px-4">
                     <h4 className="text-3xl fonat-semibold text-blueGray-700">Lets keep in touch!</h4>
                     <h5 className="text-lg mt-4 mb-2 text-gray-950">
                        Find us on any of these platforms, we respond 1-2 business days.
                     </h5>
                     <div className="mt-6 lg:mb-0 mb-6">
                        <button className="text-blue-500 bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                           <i className="fab fa-twitter"></i>
                        </button>
                        <button className="bg-white  shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                           <i className="fab fa-facebook-f" style={{ color: "#0944f6" }}></i>
                        </button>
                        <button className="text-pink-400 bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                           <i className="fab fa-instagram"></i>
                        </button>
                        <button className="text-red-600 bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                           <i className="fab fa-youtube "></i>
                        </button>
                     </div>
                  </div>

                  <div className="w-full lg:w-6/12 px-4">
                     <div className="flex flex-wrap items-top mb-6">
                        <div className="w-full lg:w-4/12 px-4 ml-auto">
                           <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                           <ul className="list-unstyled text-black">
                              <li>
                                 <Link className="font-semibold block pb-2 text-md">About Us</Link>
                              </li>
                              <li>
                                 <Link className="font-semibold block pb-2 text-md">Blog</Link>
                              </li>
                              <li>
                                 <Link className="font-semibold block pb-2 text-md">FaceBook</Link>
                              </li>
                           </ul>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                           <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                           <ul className="list-unstyled">
                              <li>
                                 <Link className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm">MIT License</Link>
                              </li>
                              <li>
                                 <Link className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm">Terms &amp; Conditions</Link>
                              </li>
                              <li>
                                 <Link className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm">Privacy Policy</Link>
                              </li>
                              <li>
                                 <Link className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm">Contact Us</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>

               <hr className="my-3 border-blueGray-300" />

               <div className="flex flex-wrap items-center md:justify-between justify-center bg-indigo-500 text-white py-2">
                  <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                     <div className="text-sm text-blueGray-500 font-semibold py-1">
                        Copyright © <span id="get-current-year">2023</span>
                        <Link className="text-blueGray-500 hover:text-gray-800"> - The Library. </Link>
                        All Rights Reserve.
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
};

export default Footer;