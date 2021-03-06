import styled, { css } from 'styled-components';
import { ButtonProps } from './type';

export const ButtonDiv = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: 45px;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.fontSize};
  line-height: 24px;
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  border: none;
  outline: none;
  cursor: pointer;
  transition: 1s ease;
  padding: 0 10px;
  &:disabled {
    background: rgba(105, 105, 105, 0.3) !important;
  }
  @media (max-width: 1024px) {
    width: ${(props) => props.smallWidth};
    }
`;
