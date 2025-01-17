import { IconProps } from "../Icons.Type";

const CreateIcon = ({ size = 18, fill = "balck", className = "", ...rest }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.954915 2.06107C0 3.3754 0 5.25027 0 9C0 12.7497 0 14.6246 0.954915 15.9389C1.26331 16.3634 1.6366 16.7367 2.06107 17.0451C3.3754 18 5.25027 18 9 18C12.7497 18 14.6246 18 15.9389 17.0451C16.3634 16.7367 16.7367 16.3634 17.0451 15.9389C18 14.6246 18 12.7497 18 9C18 5.25027 18 3.3754 17.0451 2.06107C16.7367 1.6366 16.3634 1.26331 15.9389 0.954915C14.6246 0 12.7497 0 9 0C5.25027 0 3.3754 0 2.06107 0.954915C1.6366 1.26331 1.26331 1.6366 0.954915 2.06107ZM9.75 6C9.75 5.58579 9.41421 5.25 9 5.25C8.58579 5.25 8.25 5.58579 8.25 6V8.25H6C5.58579 8.25 5.25 8.58579 5.25 9C5.25 9.41421 5.58579 9.75 6 9.75H8.25V12C8.25 12.4142 8.58579 12.75 9 12.75C9.41421 12.75 9.75 12.4142 9.75 12V9.75H12C12.4142 9.75 12.75 9.41421 12.75 9C12.75 8.58579 12.4142 8.25 12 8.25H9.75V6Z"
        fill={fill}
      />
    </svg>
  );
};

export default CreateIcon;
