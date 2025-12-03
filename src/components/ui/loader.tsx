import { GraduationCap } from "lucide-react";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center gap-4 h-fit w-fit rounded-full p-1 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-blue-600 dark:text-blue-400 animate-bounce ease-in-out duration-1000" />
      </div>
    </div>
  );
};

export default Loader;
