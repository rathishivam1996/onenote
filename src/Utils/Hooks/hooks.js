import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = ({ options }) => {
  const [targetRef, setTargetRef] = useState(null);

  const [isIntersecting, setIsIntersecting] = useState(false);
  const callbackFun = (entries) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    if (!targetRef) return;

    const observer = new IntersectionObserver(callbackFun, options);
    if (targetRef) {
      observer.observe(targetRef);
    }

    // eslint-disable-next-line consistent-return
    return () => {
      if (targetRef) observer.unobserve(targetRef);
    };
  }, [targetRef, options, isIntersecting]);

  return [setTargetRef, isIntersecting];
};

const useScrollYPosition = () => {
  const [scrollPosition, setScrollPorition] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPorition(window.pageYOffset);
    };
    window.addEventListener("scroll", updateScrollPosition);
    // set initail scroll position on load
    updateScrollPosition();
    // clean-up
    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, [scrollPosition]);
  return scrollPosition;
};

const useScrollYDirection = (props) => {
  const { thr = 0 } = props;

  const [scrollDir, setScrollDir] = useState("up");
  const blocking = useRef(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = window.pageYOffset;

    const updateScrollDir = () => {
      const currScrollY = window.pageYOffset;

      // if cury > prev y === -ve transform
      // if curr < prev === +ve transform

      if (Math.abs(currScrollY - prevScrollY.current) >= thr) {
        const newScrollDir = currScrollY > prevScrollY.current ? "down" : "up";
        setScrollDir(newScrollDir);
        prevScrollY.current = currScrollY > 0 ? currScrollY : 0;
      }
      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDir);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return scrollDir;
};

const useTranslate = () => {
  const height = useRef(64);
  const [translateY, setTranslateY] = useState(0);
  const blocking = useRef(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = Math.round(window.pageYOffset);

    const updateScrollDir = () => {
      const currScrollY = Math.round(window.pageYOffset);

      // if cury > prev y === -ve transform
      // if curr < prev === +ve transform

      if (height.current > 0 && currScrollY > prevScrollY.current) {
        // console.log(`******************************************`);
        // console.log(`currScrollY = ${currScrollY}`);
        // console.log(`prevScrollY = ${prevScrollY.current}`);
        const temp = currScrollY - prevScrollY.current;
        const set = Math.max(translateY - temp, -64);
        setTranslateY(set);
        height.current = Math.max(height.current - temp, 0);
        // console.log(`temp {currScrollY - prevScrollY} = ${temp}`);
        // console.log(`set {Math.max(translateY - temp, -64)} = ${set}`);
        // console.log(
        //   `height {Math.max(height.current - temp, 0)} = ${height.current}}`
        // );
        // console.log(`******************************************`);
      } else if (
        height.current >= 0 &&
        height.current < 64 &&
        currScrollY < prevScrollY.current
      ) {
        // console.log(`#########################################`);
        // console.log(`currScrollY = ${currScrollY}`);
        // console.log(`prevScrollY = ${prevScrollY.current}`);
        const temp = prevScrollY.current - currScrollY;
        const set = Math.min(translateY + temp, 0);
        setTranslateY(set);
        height.current = Math.min(height.current + temp, 64);
        // console.log(`temp {prevScrollY.current - currScrollY} = ${temp}`);
        // console.log(`set {Math.min(translateY + temp, 0)} = ${set}`);
        // console.log(
        //   `height {Math.min(height.current + temp, 64)} = ${height.current}}`
        // );
        // console.log(`#########################################`);
      }

      prevScrollY.current = currScrollY > 0 ? currScrollY : 0;
      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDir);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [translateY]);

  return [translateY, height.current];
};

export {
  useScrollYPosition,
  useScrollYDirection,
  useTranslate,
  useIntersectionObserver,
};
