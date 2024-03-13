import React from "react";

export default (props) => {
  return (
    <React.Fragment>
      <h1>
        Bom dia {props.nome}, voce tem {props.idade}
      </h1>
      <h1>Vamos</h1>
    </React.Fragment>
  );
};
