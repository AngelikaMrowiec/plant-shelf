import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

export default function AnimatedLayout() {
  const location = useLocation();

  return (
    <motion.div
      key={location.hash}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
      }}
    >
      <Outlet />
    </motion.div>
  );
}
