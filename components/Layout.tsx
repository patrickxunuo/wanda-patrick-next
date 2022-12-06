import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLayoutState, setAnimatedState } from "../store/layoutSlice";
import Footer from "./Footer";
import Header from "./Header";
import Thumbnail from "./Thumbnail";

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
    <>
      {animated && (
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      )}
      {!animated && <Thumbnail />}
    </>
  );
};

export default Layout;
