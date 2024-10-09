import React, { useEffect, useRef, useState } from "react";
import CardProyecto from "../components/_CardProyecto";
import { CardsProyectos } from "../libs/Proyectos";
import type { ProyectosType } from "../types/index";
import ContainerFiltrosBotones from "../components/_ContainerFiltrosBotones";

const Projects = () => {
  const [filtered, setFiltered] = useState<ProyectosType[]>(CardsProyectos);
  const [currentProyects, setCurrentProyects] = useState<ProyectosType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const limit = 6;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      const totalPages = Math.ceil(filtered.length / limit);
      return Math.min(prevPage + 1, totalPages - 1);
    });
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = Math.max(prevPage - 1, 0);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      return newPage;
    });
  };

  useEffect(() => {
    const startIndex = currentPage * limit;
    const endIndex = startIndex + limit;
    setCurrentProyects(filtered.slice(0, endIndex));
  }, [currentPage, filtered]);

  return (
    <section
      ref={sectionRef}
      id="proyectos"
      className="px-6 py-20 lg:px-0 bg-bg_negro"
    >
      <h2
        data-aos="fade-down"
        data-aos-duration="1000"
        className="font-semibold text-center proyecto__section subtitle"
      >
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
            currentProyects.map((pro, index) => (
              <CardProyecto key={pro.id} card={pro} index={index} />
            ))}
        </div>

        <div className="flex justify-center mt-5">
          {currentPage > 0 && (
            <button
              onClick={handlePreviousPage}
              className="px-4 py-2 mx-2 text-white bg-red-500 rounded"
            >
              Cargar Menos
            </button>
          )}
          {currentProyects.length < filtered.length && (
            <button
              onClick={handleNextPage}
              className="px-4 py-2 mx-2 text-white bg-blue-500 rounded"
            >
              Cargar Más
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
