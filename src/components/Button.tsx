import React from "react";
import type { PropsButton } from "../types/index";

const Button = (props: PropsButton) => {
  const { estilosButton, estilosImage, icon, title, onClick, param } = props;

  return (
    <button onClick={() => onClick(param)} className={estilosButton}>
      {icon && <img src={icon} className={estilosImage} alt="Image icon" />}
      {title}
    </button>
  );
};

export default Button;
