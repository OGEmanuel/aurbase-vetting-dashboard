import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-lg font-semibold opacity-50 text-extra-4 flex flex-col md:flex-row gap-5 md:gap-0 justify-between mt-16 pb-10 md:pb-5">
      <p>© 2022 Aurbase Technologies inc</p>
      <ul className="flex flex-col md:flex-row gap-5 md:gap-10">
        <li>
          <Link to="">Privacy & Policy</Link>
        </li>
        <li>
          <Link to="">Terms & Conditions</Link>
        </li>
        <li>
          <Link to="">Code of Conduct</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
