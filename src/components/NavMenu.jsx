import React from "react";
import { Link } from "react-router-dom";
import { IoAirplane, IoBed } from "react-icons/io5";
import { BsCarFrontFill, BsFillPersonFill } from "react-icons/bs";
import { MdDashboard, MdOutlineAttractions } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

const NavMenu = () => {
    return (
        <div className="bg-blue-900">
            <div className="max-w-7xl mx-auto px-5 relative">
                <div className="flex justify-between items-center py-5">
                    <h2 className="text-2xl font-semibold text-white">
                        Travell.com
                    </h2>
                    <div className="flex gap-2">
                        <Link
                            to="/register"
                            className="bg-white px-3 py-1 text-blue-800 font-semibold"
                        >
                            Register
                        </Link>
                        <Link
                            to="signin"
                            className="bg-white px-3 py-1 text-blue-800 font-semibold"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
                <div className="flex gap-5 items-center flex-wrap">
                    <span className="hero-menu">
                        <IoBed /> Stays
                    </span>
                    <span className="hero-menu">
                        <IoAirplane /> Fligts
                    </span>
                    <span className="hero-menu">
                        <BsCarFrontFill /> Car
                    </span>
                    <span className="hero-menu">
                        <MdOutlineAttractions /> Attractions
                    </span>
                    <span className="hero-menu">
                        <MdDashboard /> Dashboard
                    </span>
                </div>
                <div className="pb-20 pt-5">
                    <h1 className="text-white font-bold text-4xl pt-5">
                        The great getaway, your way
                    </h1>
                    <p className="text-white pt-3 text-lg">
                        Save at least 15% on stays worldwide, from relaxing
                        retreats to off-grid adventures
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 justify-around border-4 bg-yellow-400 border-yellow-400 absolute -bottom-6 w-full ">
                    <span className="hero-search">
                        <IoBed className="text-2xl" />
                        <input
                            type="text"
                            name=""
                            id=""
                            className="outline-none"
                            placeholder="Where you want to go?"
                        />
                    </span>
                    <span className="hero-search">
                        <FaRegCalendarAlt className="text-2xl" />
                        <p>Check-in date - Check-out date</p>
                    </span>
                    <span className="hero-search">
                        <BsFillPersonFill className="text-2xl" />
                        <p>1 adult. 0 children. 1 room</p>
                    </span>
                    <span className=" flex justify-center items-center px-5 bg-blue-900 text-white font-bold text-lg">
                        <button className=" tracking-wider">Search</button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;
