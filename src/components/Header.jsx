import React, { useState, useEffect } from 'react';
// import menuLinks from './data/menuLinks.json';

const Header = () => {
  const [menuLinks, setMenuLinks] = useState([]);

  const loadMenuLinksData = async () => {
    const resp = await fetch(`https://rhz91hml28.execute-api.us-east-2.amazonaws.com/Production/menuLinks`);
    let jsonData = await resp.json();
    setMenuLinks(jsonData);
  };
  useEffect(() => {
    loadMenuLinksData();
  }, []);

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
          <ul>
            {menuLinks.map((link) => {
              return (
                <li>
                  <a className={`icon ${link.class}`} href={link.href}>
                    <span>{link.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
