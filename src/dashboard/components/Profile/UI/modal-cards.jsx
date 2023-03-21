const Card = ({ children, className }) => {
  const classes = 'bg-white py-7 px-12 rounded-custom ' + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
