const Bcs = ({
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
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_2165_4347)">
        <mask
          id="mask0_2165_4347"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2165_4347)">
          <path
            d="M6.66642 5.0832L12 2L17.3336 5.0832L15.3336 6.1664L12 4.2496L8.58322 6.1664L6.66642 5.0832ZM17.2496 8.9168L15.3328 7.8336L12 9.7504L8.58322 7.8336L6.66642 8.9168V11.1672L10 13.084V17.0008L11.9168 18.1672L13.8336 17.0008V13.1672L17.1672 11.2504V8.9168H17.2496ZM17.2496 15.0832V12.8336L15.3336 14V16.1664L17.2496 15.0832ZM18.6664 15.8336L15.3328 17.7504V20L20.6664 16.9168V10.7504L18.6664 12V15.8336ZM16.7504 7L18.6672 8.1664V10.4168L20.584 9.2504V7L18.6672 5.8336L16.7504 7ZM10 18.5832V20.8328L11.9168 21.9992L13.8336 20.8328V18.5832L11.9168 19.7496L10 18.5832ZM6.66642 15.0832L8.58322 16.1664V13.9168L6.66642 12.7504V15.0832ZM10 7L11.9168 8.1664L13.9168 7L12 5.8336L10 7ZM5.24962 8.1664L7.24962 7L5.24962 5.8336L3.33362 7V9.2496L5.25042 10.416V8.1664H5.24962ZM5.24962 12L3.33282 10.8336V17L8.66642 20.0832V17.8336L5.33282 15.9168V12H5.24962Z"
            fill="#F0B90B"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2165_4347">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Bcs;
