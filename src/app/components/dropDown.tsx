import { motion } from "motion/react";

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -15 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -15 },
      }}
      initial="hidden"
      animate="visible"
      exit={"exit"}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Dropdown;

export const NavReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
