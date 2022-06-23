import React from "react";
import { Navigate, Route, Routes as Switch } from "react-router-dom";
import Results from "./Results";

const Routes = () => {
  const paths = ["/search", "/images", "/news", "/videos"];

  const renderMultiRoutes = ({ element, paths, ...rest }) =>
    paths.map((path) => (
      <Route key={path} path={path} {...rest} element={Element} />
    ));

  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/" element={<Navigate to="/search" />} />
        <Route exact path="/search" element={<Results />} />
        <Route exact path="/image" element={<Results />} />
        <Route exact path="/news" element={<Results />} />
        <Route exact path="/videos" element={<Results />} />
      </Switch>
    </div>
  );
};

export default Routes;
