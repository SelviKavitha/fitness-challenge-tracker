import {
  FaBullseye,
  FaCalendarAlt,
} from "react-icons/fa";

function OverviewTab({ challenge }) {
  return (
    <div>
      <div className="bg-white border rounded-2xl p-6">
        <h3 className="font-bold text-xl mb-4">
          About This Challenge
        </h3>

        <p className="text-gray-600">
          {challenge.description}
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <FaBullseye className="text-orange-500" />
              <div>
                <h4 className="font-semibold">
                  Challenge Goal
                </h4>
                <p className="text-gray-500">
                  {challenge.goal}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-orange-500" />
              <div>
                <h4 className="font-semibold">
                  Duration
                </h4>
                <p className="text-gray-500">
                  {challenge.duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewTab;