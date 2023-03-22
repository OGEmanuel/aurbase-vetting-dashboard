const Card = ({ children, className }) => {
  const classes =
    'bg-white py-6 md:py-7 px-6 md:px-12 rounded-custom w-[88.5%] max-width xl:w-auto z-[9000] fixed top-[50%] left-[50%] xl:left-[60%] translate-x-[-50%] translate-y-[-50%] scroll overflow-auto ' +
    className;
  return <div className={classes}>{children}</div>;
};

export default Card;
