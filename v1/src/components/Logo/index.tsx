import React, { FC } from 'react';

import { LogoContainer } from './styles';
import LogoSvg from '../../images/logo_flat.svg';

const Logo: FC = () => <LogoContainer src={LogoSvg} alt="Logo" />;

export default Logo;
