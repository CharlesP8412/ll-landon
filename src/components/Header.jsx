import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [menuLinks, setMenuLinks] = useState([]);

  const loadMenuLinksData = async () => {
    const resp = await fetch(`${props.aws}/Production/menuLinks`);
    let jsonData = await resp.json();
    setMenuLinks(jsonData);
  };
  useEffect(() => {
    loadMenuLinksData();
  }, []);

  const parsedList = menuLinks.map((link, index) => {
    return (
      <li key={index}>
        <a className={`icon ${link.class}`} href={link.href}>
          <span>{link.text}</span>
        </a>
      </li>
    );
  });

  return (
    <header id='intro'>
      <article className='fullheight'>
        <div className='hgroup'>
          <h1>Landon Hotel</h1>
          <h2>West London</h2>
          <p>
            <a href='#welcome'>
              <img src='https://landonhotel.com/images/misc/arrow.png' alt='down arrow' />
            </a>
          </p>
        </div>
      </article>

      <nav id='nav'>
        <div className='navbar'>
          <div className='brand'>
            <a href='#welcome'>
              Landon <span>Hotel</span>
            </a>
          </div>
          <ul>{parsedList}</ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
