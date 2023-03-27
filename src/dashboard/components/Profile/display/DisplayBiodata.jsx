import Card from '../UI/profile-card';

const DisplayBiodata = ({ bioHandler, pen, dp, displayOverlay }) => {
  return (
    <Card>
      <div className="flex-between-center">
        <p className="p-head">BIO DATA</p>
        <button className="flex-btn" onClick={bioHandler}>
          <img src={pen} alt="" className="w-[1rem] md:w-auto" />
          <p className="p-small">Edit</p>
        </button>
      </div>
      <hr
        className={`border-b border-extra-5 xl:opacity-40 my-4 xl:overflow-visible ${
          displayOverlay ? 'opacity-100' : 'opacity-40'
        } `}
      />
      <div className="flex items-center gap-5">
        <img src={dp} alt="user" className="w-[5rem] md:w-auto" />
        <div className="font-semibold">
          <p className="text-sm md:text-lg xl:text-2xl mb-1 md:mb-2 xl:mb-0 text-extra-4">
            {/* Firstname Lastname */}
            Joseph Micheal
          </p>
          <div className="text-[0.625rem] md:text-sm flex flex-col gap-1">
            <p>Designer</p>
            <p>
              {/* State, Country */}
              Ontario, Canada
            </p>
          </div>
        </div>
      </div>
      <hr
        className={`border-b border-extra-5 xl:opacity-40 my-4 xl:overflow-visible ${
          displayOverlay ? 'opacity-100' : 'opacity-40'
        } `}
      />
      <div className="flex flex-col gap-4 text-xs md:text-base xl:text-lg">
        <div className="flex justify-between">
          <p>Email Address</p>
          <p className="font-semibold">Joemickey@work.com</p>
        </div>
        <div className="flex justify-between">
          <p>Phone Number</p>
          <p className="font-semibold">
            {/* N/A */}
            +1334567890
          </p>
        </div>
        <div className="flex justify-between">
          <p>Gender</p>
          <p className="font-semibold">
            {/* N/A */}
            Male
          </p>
        </div>
        <div className="flex justify-between">
          <p>Country of Residence</p>
          <p className="font-semibold">
            {/* N/A */}
            Canada
          </p>
        </div>
        <div className="flex justify-between">
          <p>Country of citizenship</p>
          <p className="font-semibold">
            {/* N/A */}
            Nigeria
          </p>
        </div>
      </div>
    </Card>
  );
};

export default DisplayBiodata;
