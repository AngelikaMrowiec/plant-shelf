import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function FormLayout() {
  const location = useLocation();

  return (
    <div key={"DDD"} className="bg-[url('src/assets/small-bg2.png')] md:bg-[url('src/assets/mid-bg.png')] bg-fixed bg-cover bg-center h-dvh w-full flex items-center justify-center">
      <motion.div
        key={location.pathname}
        className="relative flex justify-center items-center w-full h-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
        }}
      >
        <Outlet />
      </motion.div>
    </div>
  );
}
