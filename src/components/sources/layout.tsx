import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../../scss/common.scss';
import { Helmet } from 'react-helmet';

interface SkyC {
  align?: string;
}

interface DefaultTypes {
  children: React.ReactNode;
  align?: string;
  title?: string;
}

const SkyLayout = styled.div`
  min-width: 320px;
`;

const SkyHeader = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  height: 6rem;
  padding: 0.8rem 1.6rem;
  font-size: 2.4rem;
  background: rgba(26, 27, 30, 0.4);
  backdrop-filter: blur(15px);
  transform: translateX(-50%);
  z-index: 10;

  >div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }

  svg {
    text {
      stroke-width: 1;
      fill: #fff;
      stroke: #fff;
      font-size: 2.4rem;
      animation: stroke 3s linear;
      letter-spacing: 1px;

      @keyframes stroke {
        0% {
          fill: rgba(72, 138, 20, 0);
          stroke: #fff;
          stroke-dashoffset: 25%;
          stroke-dasharray: 0 50%;
          stroke-width: 2;
        }

        70% {
          fill: rgba(72, 138, 20, 0);
          stroke: #fff;
        }

        80% {
          fill: rgba(72, 138, 20, 0);
          stroke: #fff;
          stroke-width: 3;
        }

        100% {
          fill: #fff;
          stroke: rgba(54, 95, 160, 0);
          stroke-dashoffset: -25%;
          stroke-dasharray: 50% 0;
          stroke-width: 2;
        }
      }
    }
  }

  nav {
    font-size: 1.8rem;

    .test {
      color: transparent;
    }

    a {
      &:hover {
        color: #ffbd39;
      }

      + a {
        margin-left: 0.8rem;
      }
    }
  }

  @media screen and (max-width: 920px) {
    width: 100%;
    font-size: 2rem;

    nav {
      font-size: 1.6rem;
    }
  }
`;

const SkyContainer = styled.div<SkyC>`
  margin: auto;
  max-width: 1200px;
  padding: 6rem 2.4rem 2.4rem;

  text-align: ${(props) => (props.align === 'center' ? 'center' : 'left')};

  > section {
    + section {
      margin-top: 2.4rem;
    }
  }

  @media screen and (max-width: 920px) {
    width: 100%;
  }
`;

export default function Layout({ children, align, title }: DefaultTypes) {
  return (
    <>
      <Helmet>
        <title>{title || '손기연'}</title>
      </Helmet>
      <SkyLayout>
        {/* <!-- ### 헤더 ### --> */}
        <SkyHeader>
          <div>
            <h1>
              <Link to="/">
                {/* 손기연 */}
                <svg width="72" height="36" viewBox="0 0 72 36">
                  <text x="0" y="85%">
                    손기연
                  </text>
                </svg>
              </Link>
            </h1>
            <nav>
              {/* <Link to="/test" className="test">
                Test
              </Link> */}
              <a href="https://sonky740.github.io/Guide_es6/dist/" target="_blank" rel="noreferrer" title="Guide_es6 새 창으로 이동">
                Guide_ES6
              </a>
              {/* <a
                href="https://sonky740.github.io/Guide/"
                target="_blank"
                rel="noreferrer"
              >
                Guide_ES5
              </a> */}
              <Link to="/about">About</Link>
            </nav>
          </div>
        </SkyHeader>

        <SkyContainer align={align}>{children}</SkyContainer>
      </SkyLayout>
    </>
  );
}
