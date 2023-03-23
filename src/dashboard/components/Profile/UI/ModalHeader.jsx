import close from '../../../../assets/close.svg';

const Header = ({ onClick, title }) => {
  return (
    <div className="flex justify-between mb-5 items-center">
      <p className="font-semibold md:text-[2.5rem]">{title}</p>
      <button onClick={onClick}>
        <img src={close} alt="" className="w-[1rem] md:w-auto" />
      </button>
    </div>
  );
};

export default Header;
