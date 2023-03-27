import Card from '../UI/profile-card';

const DisplayAbout = ({ aboutHandler, pen, displayOverlay }) => {
  return (
    <Card>
      <div className="flex-between-center">
        <p className="p-head">ABOUT/CAREER OBJECTIVE</p>
        <button className="flex-btn" onClick={aboutHandler}>
          <img src={pen} alt="" className="w-[1rem] md:w-auto" />
          <p className="p-small">Edit</p>
        </button>
      </div>
      <hr
        className={`border-b border-extra-5 xl:opacity-40 my-4 xl:overflow-visible ${
          displayOverlay ? 'opacity-100' : 'opacity-40'
        } `}
      />
      <p className="text-[11px] md:text-lg text-tertiary pb-32">
        Tell us about yourself in 300 words
      </p>
    </Card>
  );
};

export default DisplayAbout;
