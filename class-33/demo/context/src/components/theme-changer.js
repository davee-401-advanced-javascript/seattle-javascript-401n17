import React, {useContext} from 'react';

import {ThemeContext} from '../context/theme-context.js';

function Changer() {

  const themeContext = useContext(ThemeContext);

  return (
    <button onClick={themeContext.toggleMode}>Change the theme</button>
  )
}

export default Changer;
