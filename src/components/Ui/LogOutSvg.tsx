const LogOutSvg = ({ width, height }: { width: string; height: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 82}
      height={height || 82}
      viewBox="0 0 42 42"
      fill="none"
    >
      <circle cx="21" cy="21" r="21" fill="#1E1E2D" />
      <path
        d="M22.5278 29.9594L26.6941 29.0285C27.4572 28.8589 28 28.1786 28 27.3938V15.6062C28 14.8214 27.4572 14.1411 26.695 13.9715L22.5287 13.0406C21.4872 12.8079 20.5 13.6041 20.5 14.6763V28.3247C20.5 29.3959 21.4872 30.1921 22.5278 29.9594Z"
        stroke="white"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.3123 20.5188V22.4032"
        stroke="white"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 25.2485V27.1725C13 28.2136 13.8391 29.0568 14.875 29.0568H17.6875"
        stroke="white"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 17.7111V15.8267C13 14.7856 13.8391 13.9424 14.875 13.9424H17.6875"
        stroke="white"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 21.4797H17.6875"
        stroke="white"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.8127 23.3642L17.6877 21.4798L15.8127 19.5955"
        stroke="white"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LogOutSvg;
