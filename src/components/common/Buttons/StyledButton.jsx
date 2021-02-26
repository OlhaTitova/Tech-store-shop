import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {Button } from 'antd';
import {forDesktop, forTablet } from '../../../styles/mediaBreakPoints';

const StyledButton = styled(Button)`
font-weight: 600;
font-size: 14px;
line-height: 21px;
align-items: center;
background-color: #0156FF;
color: #fff;
width: 100%;
padding: 8px 10px;
border: 2px solid #0156FF;
height:auto !important;

${(props) => props.color === 'borderBlue' && css`
  background-color: #fff;
  color: #0156FF;
`};
${(props) => props.color === 'borderGrey' && css`
  background-color: #fff;
  color: #666666;
  border: 2px solid #666666;
`};
${(props) => props.color === 'black' && css`
  background-color: #000;
  border: 2px solid #000;
`};
${(props) => props.color === 'yellow' && css`
  background-color: #FFB800;
  border: 2px solid #FFB800;
  color: #232C65;
`};
${(props) => props.color === 'wite' && css`
  background-color: transparent;;
  border: 2px solid #ffffff;
  color: #ffffff;
`};
   
${(props) => props.size === 'xl' && css`
  width: 300px;
`};
${(props) => props.size === 'lg' && css`
  width: 200px;
`};
${(props) => props.size === 'md' && css`
  width: 180px;
`};
${(props) => props.size === 'sm' && css`
  width: 130px;
`};
${(props) => props.size === 'xs' && css`
  width: 120px;
`};

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
   
    ${(props) => props.size === 'xl' && css`
      width: 300px;
    `};
    ${(props) => props.size === 'lg' && css`
      width: 200px;
    `};
    ${(props) => props.size === 'md' && css`
      width: 180px;
     `};
    ${(props) => props.size === 'sm' && css`
      width: 130px;
     `};
    ${(props) => props.size === 'xs' && css`
      width: 120px;
    `};
  }
  
  @media(min-width: ${forDesktop.minWidth}px){

    padding: 14.5px 10px;

    ${(props) => props.size === 'xl' && css`
      width: 200px;
      padding: 8px 10px;
     `};
    ${(props) => props.size === 'lg' && css`
      width: 200px;
      padding: 8px 10px;
     `};
    ${(props) => props.size === 'md' && css`
      width: 180px;
     `};
    ${(props) => props.size === 'sm' && css`
      width: 150px;
     `};
    ${(props) => props.size === 'xs' && css`
      width: 120px;
      padding: 8px 10px;
  `};
  }
`
export default StyledButton;

Button.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
}
