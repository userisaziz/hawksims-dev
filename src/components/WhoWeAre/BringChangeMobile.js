import { motion } from "framer-motion";
import BgLinesSvg from "./svg-components/Bring-change-bgLines";

export default function BringChangeMobile({ isMainCard, change }) {
  return (
    <motion.div
      key={change.id}
      className="relative border rounded-lg shadow-md flex-col w-full md:w-full h-[450px] bg-gray-50 overflow-hidden"
    >
      <motion.div
        className={`parent-bg-line-section absolute
              bottom-1/4 left-0
              w-4 h-4 bg-[#5F80F6] rounded-full`}
        initial={{ scale: 0 }}
        animate={{ scale: isMainCard ? 120 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ originX: 0.5, originY: 0.5 }}
      />

      <motion.div className="h-[100%] flex justify-end flex-col relative z-10">
        {isMainCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <BgLinesSvg isHovered={isMainCard} />
          </motion.div>
        )}

        <motion.div
          className="slide-up-section px-5 flex flex-col justify-start"
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: isMainCard ? -100 : 0,
            x: isMainCard ? 10 : 0,
            opacity: isMainCard ? 1 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {change.img(isMainCard)}
        </motion.div>

        <motion.div
          className="slide-up-section px-10 flex flex-col justify-start"
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: isMainCard ? -80 : 0,
            opacity: isMainCard ? 1 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white">{change.heading}</h2>
        </motion.div>

        <motion.div
          className="px-10 text-white"
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: isMainCard ? -80 : 0,
            opacity: isMainCard ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          {change.desc}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
