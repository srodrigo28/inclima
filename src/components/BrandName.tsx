type BrandNameProps = {
  className?: string;
  redClassName?: string;
  prefix?: string;
  suffix?: string;
};

const BrandName = ({
  className,
  redClassName = "text-red-500",
  prefix,
  suffix,
}: BrandNameProps) => {
  return (
    <span className={className}>
      {prefix ? <>{prefix} </> : null}
      <span>In </span>
      <span className={redClassName}>Clima</span>
      {suffix ? <> {suffix}</> : null}
    </span>
  );
};

export default BrandName;
