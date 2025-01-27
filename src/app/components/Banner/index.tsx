import React from 'react';

import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';

import { ReactComponent as CrossIcon } from 'assets/icons/cross.svg';

const BannerContainer = styled(Box)`
  ${({ theme }) => theme.mediaWidth.upMedium`
   margin: 25px 40px 0;
  `}
  ${({ theme }) => theme.mediaWidth.upLarge`
   margin: 25px auto 0;
   max-width: 1280px;
   padding: 0 40px;
  `}
  margin: 25px 16px 0;
`;

const BannerStyled = styled(Flex)<{ close?: boolean }>`
  padding: 15px 25px;
  border-radius: 10px;
  background: #0b284c;
  border: 2px solid #2ca9b7;
  line-height: 1.7;
  ${props => props.close && `display: none;`}
`;

const IconButton = styled.button`
  flex-shrink: 1;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 2px;
`;

export const Banner = props => {
  const [close, onClose] = React.useState(false);

  return (
    <BannerContainer>
      <BannerStyled alignItems="center" close={close}>
        <Box flex="1">{props.children}</Box>
        <IconButton onClick={() => onClose(true)}>
          <CrossIcon width="25px" height="25px" />
        </IconButton>
      </BannerStyled>
    </BannerContainer>
  );
};
