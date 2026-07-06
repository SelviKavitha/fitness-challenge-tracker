import { FiUsers, FiTrendingUp } from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";

function ChallengeStats() {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm max-w-md">
      <h2 className="font-medium text-md text-slate-900 mb-8">
        Challenge Stats
      </h2>

      <div className="space-y-8">
        {/* Participants */}
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-lg bg-orange-50 flex items-center justify-center">
            <FiUsers className="text-orange-500 text-2xl" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">892</h3>
            <p className="text-gray-500 text-sm">
              Active Participants
            </p>
          </div>
        </div>

        {/* Completion */}
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
            <FiTrendingUp className="text-green-500 text-2xl" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              78%
            </h3>
            <p className="text-gray-500 text-sm">
              Completion Rate
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center">
            <HiOutlineBadgeCheck className="text-purple-500 text-2xl" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              4.8
            </h3>
            <p className="text-gray-500 text-sm">
              Average Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChallengeStats;