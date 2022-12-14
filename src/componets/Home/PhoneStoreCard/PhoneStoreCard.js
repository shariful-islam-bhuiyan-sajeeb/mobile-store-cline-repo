import React from 'react';
import './PhoneStoreCard.css'
import {  FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PhoneStoreCard = ({ phoneStore, refetch }) => {
    const { price, resalePrice, used, name, img, description, location, category }=phoneStore
    
    return (
        <div className=" animation border-2 flex flex-col max-w-lg p-6 mx-auto space-y-4 overflow-hidden rounded-lg shadow-xl  text-black">
            <div className="flex space-x-4">
                <img alt="" src={img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{name}</a>
                    <span className="text-xs dark:text-gray-400">4 hours ago</span>
                </div>
            </div>
            <div>
                <img src={img} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-2xl font-bold "> Brand: {name}</h2>
                <p className="text-sm text-black">{description}</p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="space-x-2">
                    <Link> <FaArrowLeft className='text-2xl'></FaArrowLeft> </Link>
                </div>
                <div className="flex space-x-2 text-sm text-black">
                    <Link to={`/homeCategory/${category}`}><button className='animation2' >  <FaArrowRight className='text-3xl hover:text-green-500 '></FaArrowRight></button> </Link>
                </div>
            </div>
        </div>
    );
};

export default PhoneStoreCard;