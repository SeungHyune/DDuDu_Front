import { IconProps } from "../Icons.Type";

const DragIcon = ({ size = 12, fill = "#D9D9D9", className = "", ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 12 12"
      width={size}
      fill={fill}
      className={className}
      {...rest}
    >
      <circle
        cx="2"
        cy="2"
        r="2"
        fill={fill}
      />
      <circle
        cx="2"
        cy="10"
        r="2"
        fill={fill}
      />
      <circle
        cx="10"
        cy="2"
        r="2"
        fill={fill}
      />
      <circle
        cx="10"
        cy="10"
        r="2"
        fill={fill}
      />
    </svg>
  );
};

export default DragIcon;
