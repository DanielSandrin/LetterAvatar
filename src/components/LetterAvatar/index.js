import React from 'react';

import { Avatar, Circle } from './styles';

function LetterAvatar({children}) {
  return (
    <Avatar>
      <circle cx="32" cy="32" r="32"/>
      <text x="32" y="43">{children}</text>
    </Avatar>
  );
}

export default LetterAvatar;