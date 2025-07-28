import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CaseStudySwiperCard = ({
  cardContainerClass,
  titleClass,
  id,
  textContainerClass,
  descClass,
  imgUrl,
  blogLength,
  heading,
  description,
  isWhitePaperInternalPage = false,
  readMoreButtonText,
}) => {
  const router = useRouter();
  const handleReadBlog = () => {
    router.push(
      `/our-resources/${
        isWhitePaperInternalPage ? "whitepapers" : "case-studies"
      }/${id}`
    );
  };

  return (
    <div className={`${cardContainerClass} cursor-pointer`} onClick={handleReadBlog}>
      <div className="relative   w-full h-full transition-transform duration-300 group-hover:scale-125">
        {imgUrl && (
          <Image
            className="w-full h-full transition-transform duration-300"
            src={imgUrl}
            layout="fill"
            objectFit="cover"
            alt="Icon"
          />
        )}
      </div>
      <div className={textContainerClass}>
        <p className="text-xs mb-0.5 lg:text-base !text-[#FFF]">{blogLength}</p>
        <h3 className={`${titleClass} !text-[#FFF]`}>{heading}</h3>
        <p className={`${descClass} !text-[#FFF]`}>{`${description?.slice(
          0,
          43
        )}...`}</p>
        <button
          onClick={handleReadBlog}
          className="mt-2 hidden group-hover:flex text-white py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          {`${readMoreButtonText}`} &rarr;
        </button>
      </div>
    </div>
  );
};

export default CaseStudySwiperCard;
