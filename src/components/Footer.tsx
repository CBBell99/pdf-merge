import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className='footer'>
        <p>
          Created <b>by</b> Chris Bell &copy; {year}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
