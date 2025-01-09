const Polygon = ({
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
      <g clipPath="url(#clip0_2165_4373)">
        <mask
          id="mask0_2165_4373"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="21"
          height="20"
        >
          <rect x="0.5" width="20" height="20" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2165_4373)">
          <path
            d="M8.41783 7.59311L6.85504 6.68994L2.16666 9.39944V14.7998L6.85504 17.5L11.5434 14.7998V6.4013L14.145 4.90223L16.7465 6.4013V9.39944L14.145 10.8985L12.5822 9.99534V12.3976L14.145 13.3007L18.8333 10.6006V5.20019L14.145 2.5L9.45658 5.20019V13.5987L6.85504 15.0978L4.25351 13.5987V10.5912L6.85504 9.09218L8.41783 9.99534V7.59311Z"
            fill="#6C00F6"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2165_4373">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Polygon;
