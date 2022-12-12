import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLayoutState, setAnimatedState } from "../store/layoutSlice";
import Footer from "./Footer";
import Header from "./Header";
import PageLoad from "./PageLoad";

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  const animated = useSelector(selectLayoutState);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(setAnimatedState(true)), 800);
  }, []);

  return (
    <AnimatePresence>
      {animated ? (
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      ) : (
        <PageLoad />
      )}
    </AnimatePresence>
  );
};

export default Layout;
