import React from "react";
import styled from "styled-components";

// 버튼 영역 지정
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 640px) {
    display: block;
  }

  > article,
  > div {
    position: relative;
    width: calc(50% - 8px);
    height: 320px;
    padding: 24px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.1);
    color: #bebebe;
    transition: all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);

    &:hover {
      transform: translateY(-10px) !important;
      box-shadow: 0 20px 20px -8px rgba(122, 122, 122, 0.32);
    }

    .bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 0 24px 24px;
      font-size: 16px;
      color: #fff;

      > [class*="buttonArea"] {
        margin-top: 8px;
      }
    }

    .content {
      font-size: 16px;
      margin-top: 8px;
    }

    h3 {
      font-size: 20px;
      color: #ffbd39;
      margin-bottom: 16px;
    }

    @media screen and (min-width: 641px) {
      &:nth-of-type(2n) {
        margin-left: 16px;
      }

      &:nth-of-type(2n) ~ * {
        margin-top: 16px;
      }
    }

    @media screen and (max-width: 640px) {
      width: 100%;
      margin-left: 0 !important;

      &:not(:first-child) {
        margin-top: 16px;
      }
    }
  }

  .animated {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.5s ease;

    &.fadeIn {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function BoxType({ children }) {
  return <Box>{children}</Box>;
}
