import type { SetStateAction } from "react";
import type React from "react";

export interface PropsLayouts {
  title: string;
}

export interface PropsButton {
  title: string;
  param: string;
  estilosButton: string;
  estilosImage?: string;
  icon?: string;
  onClick: (tecno: string) => void;
}

export interface ProyectosType {
  id: number;
  title: string;
  description: string;
  image: string;
  iconos: string[];
  filter: string;
}

export interface CardProyectsProps {
  card: ProyectosType;
  index: number;
}

export interface ContainerFiltersBotones {
  setFiltered: React.Dispatch<SetStateAction<ProyectosType[]>>;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
}

export interface BotonesPaginacionTypes {
  handleNextPage: () => void;
  handleBackPage: () => void;
}

export interface IconHabilidadesProps {
  image: string;
  title: string;
}
