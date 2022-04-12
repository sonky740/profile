import React from 'react';
import styled from 'styled-components';

interface DefaultTypes {
  children: React.ReactNode;
}

// 버튼 영역 지정
const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.6rem;
  row-gap: 1.6rem;

  > article,
  > div {
    position: relative;
    height: 32rem;
    padding: 2.4rem;
    border-radius: 1.6rem;
    background: #2b2c31;
    color: #bebebe;
    transition: all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);

    @media (min-width: 920px) {
      &:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0 2rem 2rem -0.8rem rgba(43, 44, 49, 0.32);
      } 
    }

    .bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 0 2.4rem 2.4rem;
      font-size: 1.6rem;
      color: #fff;

      > [class*='buttonArea'] {
        margin-top: 0.8rem;
      }
    }

    .content {
      font-size: 1.6rem;
      margin-top: 0.8rem;
    }

    h3 {
      font-size: 2rem;
      color: #ffbd39;
      margin-bottom: 1.6rem;
    }
  }

  .animated {
    opacity: 0;
    transform: translateY(3rem);
    transition: all 0.5s ease;

    &.fadeIn {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export default function BoxWrap({ children }: DefaultTypes) {
  return <Box>{children}</Box>;
}
