import { IconProps } from "../Icons.Type";

const PrivacyIcon = ({ fill = "#B5B5B5", className = "", ...rest }: IconProps) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M12.75 6.318V5.24999C12.75 2.35051 10.3995 0 7.49999 0C4.60048 0 2.25 2.35051 2.25 5.24999V6.318C0.885023 6.91372 0.00196875 8.2607 0 9.74999V14.25C0.00246094 16.32 1.67994 17.9975 3.74998 18H11.25C13.32 17.9975 14.9975 16.32 15 14.25V9.74999C14.998 8.2607 14.115 6.91372 12.75 6.318ZM8.24998 12.75C8.24998 13.1642 7.9142 13.5 7.49999 13.5C7.08578 13.5 6.75 13.1642 6.75 12.75V11.25C6.75 10.8358 7.08578 10.5 7.49999 10.5C7.9142 10.5 8.24998 10.8358 8.24998 11.25V12.75ZM11.25 6.00001H3.74998V5.25002C3.74998 3.17897 5.4289 1.50001 7.49999 1.50001C9.57108 1.50001 11.25 3.17893 11.25 5.25002V6.00001Z"
        fill={fill}
      />
    </svg>
  );
};

export default PrivacyIcon;
