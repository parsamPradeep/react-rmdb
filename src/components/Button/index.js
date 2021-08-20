import React from 'react';
import ProtoTypes from 'prop-types';

import { Wrapper } from './Button.styles';

const Button = ({ text, callback }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);
Button.prototype = {
  text: ProtoTypes.string,
  callback: ProtoTypes.func
};
export default Button;
