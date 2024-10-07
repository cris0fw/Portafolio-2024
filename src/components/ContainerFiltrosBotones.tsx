import React from "react";
import Button from "../components/Button";
import type { ContainerFiltersBotones } from "../types/index";
import { CardsProyectos } from "../libs/Proyectos";

const ContainerFiltrosBotones = (props: ContainerFiltersBotones) => {
  const { setFiltered, setCurrentPage } = props;

  const filterProyectos = (tecnology: string) => {
    if (tecnology === "all") {
      setFiltered(CardsProyectos);
    } else {
      const filterProying = CardsProyectos.filter(
        (pro) => pro.filter === tecnology
      );
      setFiltered(filterProying);
    }
    setCurrentPage(0);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 my-5">
      <Button
        icon="/react-2.svg"
        estilosImage="w-4"
        estilosButton="px-2 py-2 bg-[#03949C] flex gap-2 rounded-md"
        param="reactjs"
        title="React js"
        onClick={() => filterProyectos("reactjs")}
      />
      <Button
        icon="/vue-9.svg"
        estilosImage="w-4"
        estilosButton="px-2 py-2 bg-[#569269] flex gap-2 rounded-md"
        param="vuejs"
        title="Vue js"
        onClick={() => filterProyectos("vuejs")}
      />
      <Button
        icon="/next-js.svg"
        estilosImage="w-4"
        estilosButton="px-2 py-2 bg-[#313640] flex gap-2 rounded-md"
        param="nextjs"
        title="Next js"
        onClick={() => filterProyectos("nextjs")}
      />
      <Button
        icon="/wordpress.svg"
        estilosImage="w-4"
        estilosButton="px-2 py-2 bg-[#03949C] flex gap-2 rounded-md"
        param="wordpress"
        title="Wordpress"
        onClick={() => filterProyectos("wordpress")}
      />
      <Button
        estilosImage="w-4"
        estilosButton="px-2 py-2 bg-[#C11119] flex gap-2 rounded-md"
        param="all"
        title="Borrar filtros"
        onClick={() => filterProyectos("all")}
      />
    </div>
  );
};

export default ContainerFiltrosBotones;
