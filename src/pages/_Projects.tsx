import React, { useEffect, useRef, useState } from "react";
import CardProyecto from "../components/_CardProyecto";
import { CardsProyectos } from "../libs/Proyectos";
import type { ProyectosType } from "../types/index";
import ContainerFiltrosBotones from "../components/_ContainerFiltrosBotones";
import BotonesPaginacion from "../components/_BotonesPaginacion";
import ScrollReveal from "scrollreveal";

const Projects = () => {
  const [filtered, setFiltered] = useState<ProyectosType[]>(CardsProyectos);
  const [currentProyects, setCurrentProyects] = useState<ProyectosType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);

  const limit = 6;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      const totalPages = Math.ceil(filtered.length / limit);
      return Math.min(prevPage + 1, totalPages - 1);
    });
  };

  const handleBackPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  useEffect(() => {
    const startIndex = currentPage * limit;
    const endIndex = startIndex + limit;
    setCurrentProyects(filtered.slice(startIndex, endIndex));

    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage, filtered]);

  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true,
  });

  sr.reveal(".proyecto__section");

  return (
    <section
      ref={sectionRef}
      id="proyectos"
      className="px-6 py-20 lg:px-0 bg-bg_negro"
    >
      <h2 className="font-semibold text-center proyecto__section subtitle">
        Proy
        <span className="bg-gradient-to-r from-main_celeste to-[#0057a0] bg-clip-text text-transparent">
          ectos
        </span>
      </h2>
      <div className="container">
        <ContainerFiltrosBotones
          setCurrentPage={setCurrentPage}
          setFiltered={setFiltered}
        />

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {currentProyects.length === 0 && (
            <h3 className="text-center">No hay proyectos disponibles</h3>
          )}

          {currentProyects.length > 0 &&
            currentProyects.map((pro) => (
              <CardProyecto key={pro.id} card={pro} />
            ))}
        </div>

        <BotonesPaginacion
          handleNextPage={handleNextPage}
          handleBackPage={handleBackPage}
        />
      </div>
    </section>
  );
};

export default Projects;
