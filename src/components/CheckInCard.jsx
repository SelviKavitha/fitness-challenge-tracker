import { FaCheckCircle } from "react-icons/fa";

function CheckInCard({ title, description, buttonText, onCheckIn }) {
  return (
      <div className="bg-gradient-to-r from-orange-50 to-white border-2 border-orange-300 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Side */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-4">
          <FaCheckCircle className="text-orange-500 text-xsm" />

          <h2 className="text-xl font-bold text-slate-900">
            {title}
          </h2>
        </div>

        <p className="text-md text-gray-600 leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>

      {/* Right Side */}
      <button
        onClick={onCheckIn}
        className="bg-orange-500 hover:bg-orange-600 text-white text-md font-medium px-2 py-2 rounded transition"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default CheckInCard;