const ExperienceCard = ({ logo, name, grade, address, startDate, endDate = "present" }) => {
    return (
        <div className="bg-[#1c1c1c] p-6 rounded-2xl border border-gray-800 shadow-md text-white w-full max-w-4xl mx-auto flex justify-between items-start hover:shadow-lg transition-shadow duration-300 my-10">
            {/* Left Section */}
            <div className="flex items-start space-x-4">
                <img
                    src={logo} // Replace with your logo path
                    alt="Dev Hots"
                    className="h-10 w-10 object-contain rounded-md"
                />
                <div>
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-gray-500 text-md">{grade}</p>
                    <p className="text-gray-500 text-sm">{address}</p>
                </div>
            </div>

            {/* Right Section - Dates */}
            <div className="text-sm text-gray-400 mt-2 md:mt-0 whitespace-nowrap">
                {startDate} - {endDate}
            </div>
        </div>
    );
};

export default ExperienceCard;
