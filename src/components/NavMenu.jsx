import React from "react";
import { Link } from "react-router-dom";
import { IoAirplane, IoBed } from "react-icons/io5";
import { BsCarFrontFill } from "react-icons/bs";
import { MdDashboard, MdOutlineAttractions } from "react-icons/md";

const NavMenu = () => {
    return (
        <div className=" bg-blue-900 relative">
            <div className=" max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    <h2>Travell.com</h2>
                    <div>
                        <Link>Register</Link>
                        <Link>Sign In</Link>
                    </div>
                </div>
                <div className="flex gap-5 items-center flex-wrap">
                    <span className="flex items-center gap-2 cursor-pointer">
                        <IoBed /> Stays
                    </span>
                    <span className="flex items-center gap-2 cursor-pointer">
                        <IoAirplane /> Fligts
                    </span>
                    <span className="flex items-center gap-2 cursor-pointer">
                        <BsCarFrontFill /> Car
                    </span>
                    <span className="flex items-center gap-2 cursor-pointer">
                        <MdOutlineAttractions /> Attractions
                    </span>
                    <span className="flex items-center gap-2 cursor-pointer">
                        <MdDashboard /> Dashboard
                    </span>
                </div>
                <div className="pb-10">
                    <h1>The great getaway, your way</h1>
                    <p>
                        Save at least 15% on stays worldwide, from relaxing
                        retreats to off-grid adventures
                    </p>
                </div>
                <div>
                    <div className="flex gap-1 justify-between border-4 bg-yellow-400 border-yellow-400 absolute -bottom-6 max-w-7xl w-full">
                        <span className="flex items-center gap-2 cursor-pointer bg-white">
                            <IoBed />
                            <input
                                type="text"
                                name=""
                                id=""
                                className=" outline-none"
                            />
                        </span>
                        <span className="flex items-center gap-2 cursor-pointer bg-white">
                            <IoBed />
                            <p>Check-in date - Check-out date</p>
                        </span>
                        <span className="flex items-center gap-2 cursor-pointer bg-white">
                            <IoBed />
                            <p>1 adult. 0 children. 1 room</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;
