"use client";
import Image from "next/image";

export default function GenericModal({
  isOpen,
  onClose,
  children,
  img,
  title,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white  shadow-lg w-full max-w-lg p-6 max-h-[80vh] overflow-auto mt-20">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div>
              {img && (
                <Image
                  src={img}
                  alt={`${title}`}
                  className="bg-gray-100 rounded-full p-1 h-14 w-auto"
                />
              )}
            </div>
            <div>
              <h2 className="md:text-2xl text-lg  font-semibold text-footerBg">
                {title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-[25px]"
          >
            ✖
          </button>
        </div>

        <div className="space-y-6 mt-8">{children}</div>
      </div>
    </div>
  );
}
