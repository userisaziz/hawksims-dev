"use client";
import { usePathname, useRouter } from "next/navigation";

const Breadcrumb = ({blog}) => {
  const pathname = usePathname();
  const router = useRouter();
  const pathSegments = pathname ? pathname.split("/").filter(Boolean) : [];
  if(!isNaN(pathSegments[2] && pathSegments[0] !== 'what-we-do')){
  pathSegments.splice(2,1,blog?.attributes?.title);
  
  }
  const handleClick = (index) => {
    const path = "/" + pathSegments.slice(0, index + 1).join("/");
    router.push(path);
  };
  const showHome = pathSegments.length === 1;

  return (
    <div aria-label="breadcrumb">
      <ol className="flex text-lg text-white">
        {showHome && (
          <li
            className={`flex items-start capitalize text-[12px] sm:text-[14px] font-normal ${
              pathSegments[0] === "search" ? "text-[#52545B]" : ""
            }`}
          >
            <a
              onClick={() => router.push("/")}
              className="hover:underline cursor-pointer"
            >
              Home
            </a>
            <span
              className={`mx-2 ${
                pathSegments[0] === "search" ? "text-[#52545B]" : "text-white"
              }`}
            >
              /
            </span>
          </li>
        )}
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const name = segment?.replace(/-/g, " ");

          return (
            <li
              key={index}
              className={`flex items-start capitalize text-[12px] sm:text-[14px] font-normal ${
                isLast ? "text-blue-500" : ""
              }`}
            >
              {!isLast ? (
                <a
                  onClick={() => handleClick(index)}
                  className="hover:underline cursor-pointer"
                >
                  {decodeURIComponent(name)}
                </a>
              ) : (
              <>
              {console.log(name,'name')}
                <span>
                {name === "privacy"
                      ? "Privacy Policy"
                      : name === "terms"
                      ? "Terms & Conditions"
                      : name === "data catalyst services"
                      ? "Data Catalyst Solutions" // Fixed this condition
                      : name === "data-catalyst-solutions"
                      ? "Data Catalyst Solutions"
                      : name === "analytics services"
                      ? "Analytics Solutions"
                      : name === "ai enabled solution"
                      ? "Ai Enabled Solutions"
                      : decodeURIComponent(name)}
                </span>
              </>
              )}
              {!isLast && <span className="mx-2 text-white">/</span>}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Breadcrumb;
