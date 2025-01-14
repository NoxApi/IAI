const Close = ({
  width,
  height,
  className,
}: {
  width: any;
  height: any;
  className: any;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <mask
        id="mask0_8710_5909"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16"
      >
        <rect width="16" height="16" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_8710_5909)">
        <path
          d="M3.28608 12.714C3.02573 12.4537 3.02573 12.0316 3.28608 11.7712L7.05732 8.00001L3.28608 4.22877C3.02573 3.96842 3.02573 3.54631 3.28608 3.28596C3.54643 3.02561 3.96854 3.02561 4.22889 3.28596L8.00013 7.0572L11.7714 3.28596C12.0317 3.02561 12.4538 3.02561 12.7142 3.28596C12.9745 3.54631 12.9745 3.96842 12.7142 4.22877L8.94294 8.00001L12.7142 11.7712C12.9745 12.0316 12.9745 12.4537 12.7142 12.7141C12.4538 12.9744 12.0317 12.9744 11.7714 12.7141L8.00013 8.94281L4.22889 12.714C3.96854 12.9744 3.54643 12.9744 3.28608 12.714Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default Close;
