const Button = ({ cancelHandler }) => {
  return (
    <div className="col-[1_/_-1] w-max ml-auto font-semibold text-xs md:text-lg flex gap-5">
      <button
        type="button"
        onClick={cancelHandler}
        className="border border-extra-7 py-3 px-10 rounded-custom-lg"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="py-3 px-10 rounded-custom-lg text-white bg-black"
      >
        Update
      </button>
    </div>
  );
};

export default Button;
