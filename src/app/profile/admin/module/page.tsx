import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { notFound } from "next/navigation";
import ModuleCard from "./ModuleCard";
import { getModules } from "@/actions/get.action";

export const dynamic = "force-dynamic";

const ModulePage = async () => {
  const modules: any = await getModules();

  if (!modules || modules.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Header with Create Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-2">
            Module
          </h1>
          <p className="text-lg text-gray-600">
            Learn from industry experts with practical, project-based Module.
          </p>
        </div>
        <Link
          href="/profile/admin/create-module"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md"
        >
          <FaPlus />
          Create New Module
        </Link>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules?.data?.map((module: any) => (
          <ModuleCard key={module._id} module={module} />
        ))}
      </div>
    </div>
  );
};

export default ModulePage;
