import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const Mail = ({ ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    strokeWidth={1}
    stroke="currentColor"
    {...props}
  >
    <path d="m4 3c-1.10457 0-2 .89543-2 2v.2013l6.0001 3.23082 5.9999-3.23071v-.20141c0-1.10457-.8954-2-2-2z" />
    <path d="m14 6.33716-5.76285 3.10308c-.14799.07968-.32611.07968-.4741 0l-5.76305-3.10318v4.66294c0 1.1046.89543 2 2 2h8c1.1046 0 2-.8954 2-2z" />
  </svg>
);
