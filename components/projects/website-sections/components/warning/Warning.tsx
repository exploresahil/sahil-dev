"use client";
import "./style.scss";
import { useState } from "react";
import { MdWarning } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import useMeasure from "react-use-measure";
import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import { warningDragVariants, warningMainVarients } from "@/utils/anim";

type Props = {
  title: string;
  desc: string;
};

const Warning = ({ title, desc }: Props) => {
  const [isOpen, setisOpen] = useState<boolean>(true);
  const controls = useDragControls();
  const y = useMotionValue(0);
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setisOpen(false);
  };
  return (
    <>
      {isOpen && !isDesktop && (
        <motion.div
          variants={warningMainVarients}
          initial="initial"
          animate="enter"
          className="warning"
          onClick={handleClose}
          ref={scope}
        >
          <motion.div
            id="drawer"
            variants={warningDragVariants}
            initial="initial"
            animate="enter"
            className="drag-cont"
            onClick={(e) => e.stopPropagation()}
            transition={{
              ease: [0.76, 0, 0.24, 1],
            }}
            drag="y"
            dragControls={controls}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
            style={{ y }}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            ref={drawerRef}
          >
            <div className="drag-btn-cont">
              <button onPointerDown={(e) => controls.start(e)} />
            </div>
            <div className="content">
              <MdWarning />
              <h2>{title}</h2>
              <p>({desc})</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Warning;
