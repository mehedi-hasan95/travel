import React from "react";

const Offers = () => {
    return (
        <div className="container-wrap">
            <div className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div
                    className={`bg-[url('https://i.ibb.co/Rz788ff/relux.jpg')] bg-cover bg-gray-500 object-cover h-full w-full py-10`}
                >
                    <div className="text-white px-5">
                        <h4 className="text-2xl font-semibold">
                            Escape for a while
                        </h4>
                        <p className=" max-w-xs pt-5">
                            Enjoy the freedom of a monthly stay on travelers.com
                        </p>
                        <button className="bg-blue-600 px-3 py-2 rounded-md block mt-5 hover:bg-blue-950 transition duration-500 font-semibold">
                            Discover monthly stays
                        </button>
                    </div>
                </div>
                <div
                    className={`bg-[url('https://i.ibb.co/3cS74Tn/travel.jpg')] bg-cover bg-gray-500 object-cover h-full w-full py-10`}
                >
                    <div className="text-white px-5">
                        <h4 className="text-2xl font-semibold">
                            The great getaway, your way
                        </h4>
                        <p className=" max-w-xs pt-5">
                            Save at least 15% on stays worldwide, from relaxing
                            retreats to off-the-grid adventures
                        </p>
                        <button className="bg-blue-600 px-3 py-2 rounded-md block mt-5 hover:bg-blue-950 transition duration-500 font-semibold">
                            Find Getaway Deals
                        </button>
                    </div>
                </div>
            </div>
            {/* travelers section  */}
            <div className="pt-10">
                <h2 className="text-2xl font-semibold">
                    Connect with other travelers
                </h2>
                <div className="flex flex-wrap gap-5">
                    <div className="pt-2 pb-5 group">
                        <img
                            src="https://i.ibb.co/bdtC2F1/tr.jpg"
                            alt=""
                            className="rounded-2xl transition-transform group-hover:scale-105 duration-200"
                        />
                        <div>
                            <h4 className="text-xl group-hover:font-bold duration-200">
                                Travel discussions
                            </h4>
                            <p>View forum</p>
                            <p>559,436 travelers</p>
                        </div>
                    </div>
                    <div className="pt-2 pb-5 group">
                        <img
                            src="https://i.ibb.co/rx4qTqj/tr2.jpg"
                            alt=""
                            className="rounded-2xl transition-transform group-hover:scale-105 duration-200"
                        />
                        <div>
                            <h4 className="text-xl group-hover:font-bold">
                                More communities
                            </h4>
                            <p>View All</p>
                            <p>559,436 travelers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;
