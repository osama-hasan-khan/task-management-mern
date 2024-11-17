import { LucideIcon } from "lucide-react";

const StatsCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Completed</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1">12</p>
        </div>

        <div className={`p-3 rounded-xl`}>
          <LucideIcon />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
