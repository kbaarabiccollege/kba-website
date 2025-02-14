import { motion } from "framer-motion";

const Button = ({name}) => {
  return (
    <motion.button
      className="relative px-4 py-3  border lg:px-6 lg:py-3 bg-[#07294D] text-white font-semibold text-md rounded-lg md:rounded-3xl shadow-lg overflow-hidden group"
    >
      {/* Background Hover Effect */}
      <motion.span
        className="absolute inset-0  transition-transform transform scale-x-0 group-hover:scale-x-100"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Text sliding effect */}
      <motion.span
        className="relative block"
        initial={{ x: 0 }}
        whileHover={{ x: ["0%", "50%", "0%"] }} // Move left and reappear from right
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {name}
      </motion.span>
    </motion.button>
  );
};

export default Button;
