const Card = ({ children, className }) => {
  const classes =
    'bg-white py-6 md:py-7 px-6 md:px-12 rounded-custom w-[88.5%] max-width xl:w-auto ' +
    className;
  return <div className={classes}>{children}</div>;
};

export default Card;
