import styled, { css } from "styled-components";
import { IbuttonStyled } from "./types";

export const ButtonContainer = styled.button<IbuttonStyled>`
  background: #565656;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  margin-bottom: 10px;

  ${({variant})=> variant !== "primary" && css`
    min-width: 167px;
    height: 33px;
    background: #72CCAA;
    border: none;

    &:hover {
      opacity: .6;
      transition: .4s
    }

    &::after {
      content:'';
      position: absolute;
      border: 1px solid #72CCAA;
      top: -5px;
      left: -6px;
      width: calc(100% + 11px);
      height: calc(100% + 10px);
      border-radius: 5px;
    }
  `}
`