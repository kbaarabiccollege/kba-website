import { motion } from "framer-motion";

const ApplyNowButton = () => {
  return (
    <motion.button
      className="relative px-2 py-1 border lg:px-6 lg:py-3 lg:rounded-2xl text-white font-semibold text-lg rounded-lg shadow-lg overflow-hidden group"
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
        Apply Now
      </motion.span>
    </motion.button>
  );
};

export default ApplyNowButton;
