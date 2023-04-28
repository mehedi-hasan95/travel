import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoAirplane, IoBed } from "react-icons/io5";
import { BsCarFrontFill, BsFillPersonFill } from "react-icons/bs";
import { MdDashboard, MdOutlineAttractions } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const NavMenu = () => {
    const { pathname } = useLocation();
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adault: 1,
        children: 0,
        room: 1,
    });
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    // Handle Operations

    const handleOptions = (name, operatior) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]:
                    operatior === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    return (
        <div className="bg-blue-900">
            <div className="max-w-7xl mx-auto px-5 xl:px-0 relative">
                <div className="flex justify-between items-center py-5">
                    <Link to="/" className="text-2xl font-semibold text-white">
                        Travell.com
                    </Link>
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
                <div className={`flex gap-5 items-center flex-wrap pb-10`}>
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
                {pathname === "/" && (
                    <div>
                        <div className="pb-20">
                            <h1 className="text-white font-bold text-4xl pt-5">
                                The great getaway, your way
                            </h1>
                            <p className="text-white pt-3 text-lg">
                                Save at least 15% on stays worldwide, from
                                relaxing retreats to off-grid adventures
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 justify-around border-4 bg-yellow-400 border-yellow-400 relative -bottom-6 w-full ">
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
                            <span className="hero-search relative select-none">
                                <FaRegCalendarAlt className="text-2xl" />
                                <p
                                    className="w-full"
                                    onClick={() => setOpenDate(!openDate)}
                                >{`${format(
                                    date[0].startDate,
                                    "dd/MM/yy"
                                )} to ${format(
                                    date[0].endDate,
                                    "dd/MM/yy"
                                )}`}</p>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) =>
                                            setDate([item.selection])
                                        }
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        minDate={new Date()}
                                        className=" absolute top-12 left-0"
                                    />
                                )}
                            </span>
                            <span className="hero-search select-none relative">
                                <BsFillPersonFill className="text-2xl" />
                                <p
                                    className="w-full"
                                    onClick={() => setOpenOptions(!openOptions)}
                                >
                                    {options.adault} adult. {options.children}{" "}
                                    children. {options.room} room
                                </p>
                                {openOptions && (
                                    <div className="absolute top-12 left-0 w-full bg-white">
                                        <div className="flex items-center justify-between mb-5">
                                            <h4>Adault: </h4>
                                            <div className="flex gap-5 items-center">
                                                <button
                                                    disabled={
                                                        options.adault <= 1
                                                    }
                                                    onClick={() =>
                                                        handleOptions(
                                                            "adault",
                                                            "d"
                                                        )
                                                    }
                                                    className="bg-gray-400 text-2xl px-3 disabled:cursor-not-allowed disabled:bg-slate-300"
                                                >
                                                    -
                                                </button>
                                                <span>{options.adault}</span>
                                                <button
                                                    onClick={() =>
                                                        handleOptions(
                                                            "adault",
                                                            "i"
                                                        )
                                                    }
                                                    className="bg-gray-400 text-2xl px-3"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mb-5">
                                            <h4>Children: </h4>
                                            <div className="flex gap-5 items-center">
                                                <button
                                                    disabled={
                                                        options.children <= 0
                                                    }
                                                    onClick={() =>
                                                        handleOptions(
                                                            "children",
                                                            "d"
                                                        )
                                                    }
                                                    className="bg-gray-400 text-2xl px-3 disabled:cursor-not-allowed disabled:bg-slate-300"
                                                >
                                                    -
                                                </button>
                                                <span>{options.children}</span>
                                                <button
                                                    onClick={() =>
                                                        handleOptions(
                                                            "children",
                                                            "i"
                                                        )
                                                    }
                                                    className="bg-gray-400 text-2xl px-3"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mb-5">
                                            <h4>Room: </h4>
                                            <div className="flex gap-5 items-center">
                                                <button
                                                    disabled={options.room <= 1}
                                                    onClick={() =>
                                                        handleOptions(
                                                            "room",
                                                            "d"
                                                        )
                                                    }
                                                    className="bg-gray-400 text-2xl px-3 disabled:cursor-not-allowed disabled:bg-slate-300"
                                                >
                                                    -
                                                </button>
                                                <span>{options.room}</span>
                                                <button
                                                    onClick={() =>
                                                        handleOptions(
                                                            "room",
                                                            "i"
                                                        )
                                                    }
                                                    className="bg-gray-400 text-2xl px-3"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </span>
                            <span className=" flex justify-center items-center px-5 bg-blue-900 text-white font-bold text-lg">
                                <button className=" tracking-wider">
                                    Search
                                </button>
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavMenu;
