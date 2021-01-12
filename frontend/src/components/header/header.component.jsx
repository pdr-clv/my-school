import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import SelectLang from './select-lang.component';
import headerData from '../../data/header.data';

import {
  HeaderStyles,
  HeaderContainer,
  LogoContainer,
  LinksContainer,
  OpenBtn,
  Logo,
  MenuLinks,
  CloseBtn,
  NavLink,
  MenuLinksBackground,
} from './header.styles';

const Header = (props) => {
  //props are coming from wirthRouter, has location property
  const currentroute = props.location.pathname;
  const [showNav, setShowNav] = useState(false);

  return (
    <HeaderStyles currentroute={currentroute}>
      <HeaderContainer>
        <LogoContainer>
          <OpenBtn onClick={() => setShowNav(!showNav)}>
            <span>&#9776;</span>
          </OpenBtn>
          <Logo>Logo</Logo>
        </LogoContainer>
        <LinksContainer>
          <MenuLinks showNav={showNav}>
            <CloseBtn onClick={() => setShowNav(!showNav)}>
              <span>&times;</span>
            </CloseBtn>
            {headerData.map((element, key) => (
              <NavLink
                key={key}
                to={element.linkTo}
                currentroute={currentroute}
                onClick={() => setShowNav(false)}
              >
                <FormattedMessage
                  id={`header.${element.linkName}`}
                  defaultMessage={element.linkName}
                />
              </NavLink>
            ))}
            <SelectLang setShowNav={setShowNav} />
          </MenuLinks>
          <MenuLinksBackground
            showNav={showNav}
            onClick={() => setShowNav(false)}
          />
        </LinksContainer>
      </HeaderContainer>
    </HeaderStyles>
  );
};

export default withRouter(Header);
