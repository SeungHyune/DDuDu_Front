import { IconProps } from "../Icons.Type";

const ClockIcon = ({ size = 24, fill = "#A8D86F", className = "", ...rest }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <g clipPath="url(#clip0_505_529)">
        <path
          d="M5.52309 1.74491L4.45609 0.0559082C2.73004 1.06855 1.22141 2.41269 0.0170898 4.01091L1.68009 5.11991C2.72774 3.75412 4.03346 2.60742 5.52309 1.74491Z"
          fill={fill}
        />
        <path
          d="M22.3201 5.11991L23.9831 4.01091C22.7787 2.41269 21.2701 1.06855 19.5441 0.0559082L18.4771 1.74491C19.9667 2.60742 21.2724 3.75412 22.3201 5.11991Z"
          fill={fill}
        />
        <path
          d="M13 2.051V0H11V2.051C8.9543 2.2338 7.00091 2.98687 5.36189 4.2246C3.72287 5.46233 2.46397 7.13506 1.72831 9.05265C0.992654 10.9702 0.809739 13.0558 1.20036 15.0721C1.59098 17.0885 2.53947 18.9549 3.93801 20.459L2.01001 22.577L3.49001 23.923L5.42401 21.8C7.31825 23.2297 9.62681 24.0031 12 24.0031C14.3732 24.0031 16.6818 23.2297 18.576 21.8L20.51 23.926L21.99 22.58L20.062 20.462C21.4614 18.9579 22.4107 17.0914 22.8018 15.0745C23.1929 13.0577 23.0102 10.9716 22.2745 9.05344C21.5387 7.13531 20.2795 5.46214 18.6399 4.22423C17.0004 2.98632 15.0463 2.23337 13 2.051ZM14.293 15.707L11 12.414V7H13V11.586L15.707 14.293L14.293 15.707Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_505_529">
          <rect
            width="24"
            height="24"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ClockIcon;
