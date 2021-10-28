import React from 'react';

function Footer() {
  return (
    <footer>
      Math Magicians &copy; Copyright &nbsp;
      {new Date().getFullYear()}
      , audited by Simo Nkosi.
    </footer>
  );
}

export default Footer;
