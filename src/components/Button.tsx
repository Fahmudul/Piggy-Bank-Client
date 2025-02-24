const Button = ({
  className,
  type,
  text,
}: {
  className?: string;
  type: "button" | "submit" | "reset";
  text: string;
}) => {
  return (
    <button
      type={type}
      className={`${className} bg-[#0066FF] h-14 py-4 px-6 rounded-lg`}
    >
      {text}
    </button>
  );
};

export default Button;
