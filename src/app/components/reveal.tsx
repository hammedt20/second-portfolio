import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

const Reveal = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInview]);
  return (
    <div ref={ref} className={`${className} relative overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: .3 }}
      >
        {children}
      </motion.div>
      
    </div>
  );
};

export default Reveal;
