import { SvgIconProps } from "../Icon";
import React, { FC, ReactElement } from "react";

const IconCopy2: FC<SvgIconProps> = ({ className = "" }): ReactElement => (
  <svg viewBox="0 0 14 10" className={className}>
    <path
      d="M4.3335 3.33317H9.66683V4.6665H4.3335V3.33317ZM12.4002 3.99984H13.6668C13.6668 2.15984 12.1735 0.666504 10.3335 0.666504H7.66683V1.93317H10.3335C11.4735 1.93317 12.4002 2.85984 12.4002 3.99984ZM1.60016 3.99984C1.60016 2.85984 2.52683 1.93317 3.66683 1.93317H6.3335V0.666504H3.66683C1.82683 0.666504 0.333496 2.15984 0.333496 3.99984C0.333496 5.83984 1.82683 7.33317 3.66683 7.33317H6.3335V6.0665H3.66683C2.52683 6.0665 1.60016 5.13984 1.60016 3.99984ZM11.6668 3.99984H10.3335V5.99984H8.3335V7.33317H10.3335V9.33317H11.6668V7.33317H13.6668V5.99984H11.6668V3.99984Z"
      fill="#6E7686"
    />
  </svg>
);

export default IconCopy2;
