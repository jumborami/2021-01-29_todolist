import React from "react";
import { useMediaQuery } from "react-responsive";

const Mobile: React.FC = ({ children }) => {
  const isMobile = useMediaQuery({
    query: '(min-width: 320px)',
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>
};

const Tablet: React.FC = ({ children }) => {
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return <React.Fragment>{isTablet && children}</React.Fragment>
};

const PC: React.FC = ({ children }) => {
  const isPC = useMediaQuery({
    query: '(min-width: 1024px)',
  });
  return <React.Fragment>{isPC && children}</React.Fragment>
};

const PCwide: React.FC = ({ children }) => {
  const isPCwide = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  return <React.Fragment>{ isPCwide && children}</React.Fragment>
};

export { Mobile, Tablet, PC, PCwide };


