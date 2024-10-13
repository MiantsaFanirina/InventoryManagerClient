import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};


export type ProductType = {
  id: string;
  title: string;
  img: string;
  purchasePrice: number;
  sellingPrice: number;
  manufacturer: string;
  category: string;
};