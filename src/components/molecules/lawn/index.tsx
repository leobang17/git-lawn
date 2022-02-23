import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 300px;
  width: 500px;
  background-color: skyblue;
`;

const Lawn = () => {
  const [curDate, setCurDate] = useState<number>(Date.now());
  useEffect(() => {
    console.log(curDate);
    const datebuilder = new Date(curDate - 90);
    const lastdate = new Date(curDate);
    lastdate.setDate(lastdate.getDate() - 90);

    console.log(datebuilder.toString());
    console.log(lastdate);
  }, []);

  return (
    <Div>
      <div>efef</div>
      <div>fef</div>
    </Div>
  );
};

export default Lawn;
