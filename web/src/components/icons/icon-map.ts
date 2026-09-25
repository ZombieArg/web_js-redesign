import type { ComponentType, SVGProps } from "react";
import { InicioIcon } from "./svg/InicioIcon";
import { CeciliaIcon } from "./svg/CeciliaIcon";
import { DatosIcon } from "./svg/DatosIcon";
import { SoftwareIcon } from "./svg/SoftwareIcon";
import { ConsultoriaIcon } from "./svg/ConsultoriaIcon";
import { BusquedaIcon } from "./svg/BusquedaIcon";
import { ConfiguracionIcon } from "./svg/ConfiguracionIcon";
import { UsuariosIcon } from "./svg/UsuariosIcon";
import { NotificacionesIcon } from "./svg/NotificacionesIcon";
import { DocumentosIcon } from "./svg/DocumentosIcon";
import { SeguridadIcon } from "./svg/SeguridadIcon";
import { IntegracionesIcon } from "./svg/IntegracionesIcon";

export const iconMap = {
  inicio: InicioIcon,
  cecilia: CeciliaIcon,
  datos: DatosIcon,
  software: SoftwareIcon,
  consultoria: ConsultoriaIcon,
  busqueda: BusquedaIcon,
  configuracion: ConfiguracionIcon,
  usuarios: UsuariosIcon,
  notificaciones: NotificacionesIcon,
  documentos: DocumentosIcon,
  seguridad: SeguridadIcon,
  integraciones: IntegracionesIcon,
} satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>;

export type IconName = keyof typeof iconMap;
