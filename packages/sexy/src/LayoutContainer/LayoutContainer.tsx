import React, { FC } from "react";

const LayoutContainer: FC = () => {
  const logMe = () => {
    alert("idemo");
  };
  return (
    <div>
      This might works!!!!!!!!! And it is sexy, and we know it.!!! Yeahhh
      <div>
        <button onClick={logMe}>Click me</button>
      </div>
    </div>
  );
};

export default LayoutContainer;
