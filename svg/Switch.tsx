const Switch = ({
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
      viewBox="0 0 21 20"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.81455 12.538L16.6004 12.538C16.9606 12.538 17.25 12.2482 17.25 11.894C17.25 11.5398 16.9606 11.25 16.6004 11.25L4.502 11.25C3.8327 11.25 3.49859 12.0602 3.97334 12.532L7.02117 15.5608C7.27499 15.8131 7.68715 15.8131 7.94097 15.5608C8.19392 15.3094 8.19392 14.9025 7.94097 14.6512L5.81455 12.538Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1854 7.46199L4.39961 7.46199C4.03936 7.46199 3.75 7.75179 3.75 8.106C3.75 8.4602 4.03936 8.75 4.39961 8.75L16.498 8.75C17.1673 8.75 17.5014 7.93981 17.0267 7.46801L13.9788 4.43918C13.725 4.18694 13.3129 4.18694 13.059 4.43918C12.8061 4.69055 12.8061 5.09746 13.059 5.34883L15.1854 7.46199Z"
        fill="white"
      />
    </svg>
  );
};

export default Switch;
