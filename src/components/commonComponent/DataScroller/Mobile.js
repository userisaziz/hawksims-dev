import { motion } from "framer-motion";
import Image from "next/image";
export default function MobileDevice({ json, currentIndex, sectionRefs }) {
  return (
    <>
      <motion.div
        key={json[currentIndex]?.imgUrl}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative w-full h-96 `}
      >
        {json[currentIndex]?.imgUrl && (
          <Image
            src={json[currentIndex].imgUrl}
            alt={json[currentIndex].heading}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        )}
      </motion.div>

      <div className="flex">
        <div className={`  flex flex-col items-center mx-4 space-y-4 `}>
          {json.map((item, index) => (
            <div
              key={index}
              onClick={() => handleScroll(index)}
              className={`cursor-pointer flex flex-col rounded-lg items-center ${
                index === currentIndex ? "text-blue-400" : "text-gray-500"
              }`}
            >
              <motion.div
                className={`w-[8px] rounded-lg h-32 bg-blue-400 ${
                  index === currentIndex ? "opacity-100" : "opacity-40"
                }`}
                layout
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
        </div>

        <div className={`md:w-1/2 space-y-8  `}>
          {json.map((item, index) => (
            <motion.div
              key={item.heading}
              ref={sectionRefs[index].sectionRef}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleScroll(index)}
            >
              <h2 className="text-xl mb-2">{item.heading}</h2>

              <p
                className={`text-[12px] mb-5 ${
                  currentIndex == index ? "flex min-h-[240px]" : "hidden"
                }`}
              >
                {item.description}
              </p>

              {index < json.length - 1 ? (
                <hr className="text-gray-50 mt-5" />
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
