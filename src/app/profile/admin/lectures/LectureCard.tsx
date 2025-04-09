"use client";
import { useDeletedLecture } from "@/hooks/post.hook";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEdit, FaTrash, FaDownload } from "react-icons/fa";

const LectureCard = ({ lecture }: { lecture: any }) => {
  const { mutate: deleteLectureMutation } = useDeletedLecture();
  const router = useRouter();

  const handleDelete = (id: string) => {
    deleteLectureMutation(id, {
      onSuccess: () => router.refresh(),
    });
  };

  const handleDownloadPdf = async (pdfUrl: string, index: number) => {
    try {
      // Create a temporary anchor element
      const link = document.createElement("a");
      link.href = pdfUrl;

      // Set the download attribute with a proper filename
      link.setAttribute(
        "download",
        `${lecture.title.replace(/\s+/g, "-")}-notes-${index + 1}.pdf`
      );

      // Set to open in new tab if download fails
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");

      // Trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Fallback for mobile devices
      setTimeout(() => {
        if (!document.body.contains(link)) {
          window.open(pdfUrl, "_blank");
        }
      }, 200);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback to opening in new tab
      window.open(pdfUrl, "_blank");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="flex-grow">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            {lecture.title}
          </h3>
          <div className="text-gray-600 mb-3">
            <strong>Video:</strong>{" "}
            <span
              className="text-blue-600 hover:text-blue-800 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.open(lecture.videoUrl, "_blank");
              }}
            >
              Watch Now
            </span>
          </div>
          <div className="mb-3">
            <strong>Lecture Notes:</strong>
            <ul className="mt-2 space-y-2">
              {lecture.pdfNotes.length > 0 ? (
                lecture.pdfNotes.map((pdf: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-2 rounded"
                  >
                    <span className="text-sm">PDF {index + 1}</span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDownloadPdf(pdf, index);
                      }}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      <FaDownload size={14} />
                      Download
                    </button>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 text-sm">No notes available</li>
              )}
            </ul>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Added: {new Date(lecture.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="p-4 border-t flex justify-between gap-3 bg-gray-50">
        <Link
          href={`/profile/admin/update-lecture/${lecture._id}`}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 px-3 py-1 rounded hover:bg-blue-50"
        >
          <FaEdit size={16} />
          <span className="text-sm">Edit</span>
        </Link>

        <button
          onClick={(e) => {
            e.preventDefault();
            handleDelete(lecture._id);
          }}
          className="flex items-center gap-2 text-red-600 hover:text-red-800 px-3 py-1 rounded hover:bg-red-50"
        >
          <FaTrash size={16} />
          <span className="text-sm">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default LectureCard;
