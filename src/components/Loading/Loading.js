import React from "react";
import HashLoader from "react-spinners/PropagateLoader";

import "./Loading.css";

const Loading = ({ loading }) => {
  return (
    <div className="load">
      <HashLoader
        color={"#0A043C"}
        loading={loading}
        size={20}
        className="load"
      />
    </div>
  );
};

export default Loading;
