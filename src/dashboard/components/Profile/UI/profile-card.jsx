const Card = ({ children, className }) => {
  const classes = 'bg-white py-5 px-7 rounded-custom-sm ' + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
