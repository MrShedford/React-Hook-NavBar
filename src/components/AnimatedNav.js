import React, { useEffect } from 'react';
import '../stylesheets/AnimatedNav.scss';

const AnimatedNav = props => {
  useEffect(() => {
    const indicator = document.querySelector('.nav-indicator');
    const items = document.querySelectorAll('.nav-item');
    const handleIndicator = el => {
      items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
      });

      indicator.style.width = `${el.offsetWidth}px`;
      indicator.style.left = `${el.offsetLeft}px`;
      indicator.style.backgroundColor = el.getAttribute('active-color');

      el.classList.add('is-active');
      el.style.color = el.getAttribute('active-color');
    };

    items.forEach((item, index) => {
      item.addEventListener('click', e => {
        handleIndicator(e.target);
      });
      item.classList.contains('is-active') && handleIndicator(item);
    });
  });
  function MakeTabs(navInfo) {
    const info = Object.keys(navInfo.navInfo).map(function(key, i) {
      return (
        <a
          href="#"
          className="nav-item is-active"
          active-color={navInfo.navInfo[key]}
          key={i}
        >
          {key}
        </a>
      );
    });
    return info;
  }

  return (
    <div>
      <nav className="nav">
        <MakeTabs navInfo={props.navInfo} />
        <span className="nav-indicator"></span>
      </nav>
    </div>
  );
};

export default AnimatedNav;
