import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const transitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // className="fixed bg-yellow-300 top-0 left-0 w-4/5 h-full z-50 shadow"
  // mask className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-50"

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div 
            key={key} 
            style={props}
            className="fixed bg-yellow-300 top-0 left-0 w-4/5 h-full z-50 shadow"
            >
              ✌️This is the Menu
            </animated.div>
          )
      )}
    </nav>
  );
}

export default Navigation;
