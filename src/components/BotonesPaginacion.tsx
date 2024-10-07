import React from "react";
import type { BotonesPaginacionTypes } from "../types/index";

const BotonesPaginacion = (props: BotonesPaginacionTypes) => {
  const { handleBackPage, handleNextPage } = props;

  return (
    <div className="flex justify-end w-full gap-1 mt-10">
      <button
        onClick={handleBackPage}
        className="px-2 py-1 transition-all border border-transparent bg-main_celeste hover:border-main_celeste hover:bg-black"
      >
        <i className="ri-arrow-left-line"></i>
      </button>
      <button
        onClick={handleNextPage}
        className="px-2 py-1 transition-all border border-transparent bg-main_celeste hover:border-main_celeste hover:bg-black"
      >
        <i className="ri-arrow-right-line"></i>
      </button>
    </div>
  );
};

export default BotonesPaginacion;
