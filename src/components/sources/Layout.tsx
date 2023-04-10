import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import GlobalStyle from '../../resources/style/globalStyle';
import { Helmet } from 'react-helmet';
import AppLoading from './AppLoading';

interface SkyC {
  align?: string;
}

interface LayoutType {
  children: React.ReactNode;
  align?: string;
  title?: string;
}

const Layout: React.FC<LayoutType> = ({ children, align, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Helmet>
        <title>{title || '손기연'}</title>
      </Helmet>
      <GlobalStyle />
      {isLoading && <AppLoading />}
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
              <a
                href="https://sonky740.github.io/Guide_es6/dist/"
                target="_blank"
                rel="noreferrer"
                title="Guide_es6 새 창으로 이동"
              >
                Guide
              </a>
              <a
                href="https://sonkyblog.vercel.app/"
                target="_blank"
                rel="noreferrer"
                title="Sonky_Blog 새 창으로 이동"
              >
                Blog
              </a>
              <Link to="/about">About</Link>
            </nav>
          </div>
        </SkyHeader>

        <SkyContainer align={align}>{children}</SkyContainer>
      </SkyLayout>
    </>
  );
};

const SkyLayout = styled.div`
  min-width: 320px;
`;

const SkyHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  padding: 0.8rem 1.6rem;
  font-size: 2.4rem;
  background-color: rgba(26, 27, 30, 0.3);
  backdrop-filter: blur(15px);
  z-index: 10;

  > div {
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

export default Layout;
