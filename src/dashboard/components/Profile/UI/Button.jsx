const Button = ({ cancelHandler }) => {
  return (
    <div className="col-[1_/_-1] w-max ml-auto text-xs md:text-lg flex gap-2 md:gap-5">
      <button
        type="button"
        onClick={cancelHandler}
        className="border border-extra-7 font-semibold py-2.5 md:py-3 px-7 md:px-10 rounded-custom-sm"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="py-2.5 md:py-3 font-semibold px-7 md:px-10 rounded-custom-sm text-white bg-black"
      >
        Update
      </button>
    </div>
  );
};

export default Button;
