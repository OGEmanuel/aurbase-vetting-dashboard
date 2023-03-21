import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
  const displayOverlay = useSelector(state => state.show.modal);

  return (
    <footer
      className={`text-xs md:text-base xl:text-lg font-semibold xl:opacity-50 text-extra-4 flex flex-col md:flex-row gap-5 md:gap-0 justify-between mt-16 pb-10 md:pb-5 max-width 
      ${displayOverlay ? 'opacity-100' : 'opacity-50'}
      
      `}
    >
      <p>© 2022 Aurbase Technologies inc</p>
      <ul className="flex flex-col md:flex-row gap-5 md:gap-10">
        <li>
          <Link to="/">Privacy & Policy</Link>
        </li>
        <li>
          <Link to="/">Terms & Conditions</Link>
        </li>
        <li>
          <Link to="/">Code of Conduct</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
