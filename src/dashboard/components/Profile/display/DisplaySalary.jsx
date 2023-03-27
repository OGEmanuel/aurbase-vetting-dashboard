import Card from '../UI/profile-card';

const DisplaySalary = ({ salaryHandler, add, displayOverlay }) => {
  return (
    <Card>
      <div className="flex-between-center">
        <p className="p-head">SALARY EXPECTATION</p>
        <button className="flex-btn" onClick={salaryHandler}>
          <img src={add} alt="" className="w-[1rem] md:w-auto" />
          <p className="p-small">Edit</p>
        </button>
      </div>
      <hr
        className={`border-b border-extra-5 xl:opacity-40 my-4 xl:overflow-visible ${
          displayOverlay ? 'opacity-100' : 'opacity-40'
        } `}
      />
      {/* <p className="p-body w-[65%] py-2">
        click on the <span className="span-body">“+”</span> button to add your
        salary expectation
      </p> */}
      <div className="text-lg">
        <p className="font-semibold">Salary Range</p>
        <p>
          #<span>350,000.00</span>
          <span className="mx-1">-</span>#<span>350,000.00</span>
        </p>
      </div>
    </Card>
  );
};

export default DisplaySalary;
