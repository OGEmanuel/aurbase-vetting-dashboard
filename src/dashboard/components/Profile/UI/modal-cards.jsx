const Card = ({ children, className }) => {
  const classes = 'bg-white py-10 px-7 rounded-custom ' + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
