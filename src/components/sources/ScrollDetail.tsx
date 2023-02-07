import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const ScrollMain = () => {
  const container = useRef<HTMLElement>(null);
  const [messageA, setMessageA] = useState({});
  const [messageB, setMessageB] = useState({});
  const [messageC, setMessageC] = useState({});
  const [messageD, setMessageD] = useState({});
  let yOffset = 0; // window.pageYOffset
  let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0; // 현재 활성화된(눈 앞에 보고있는) scene(scroll-section)
  let enterNewScene = false; // 새로운 scene이 시작된 순간 true

  useLayoutEffect(() => {
    setLayout();

    window.addEventListener('scroll', scrollCurrent);

    // ['resize', 'orientationchange'].forEach(function (events) {
    //   window.addEventListener(events, function () {
    //     window.location.reload();
    //   });
    // });

    return () => {
      ['resize', 'scroll'].forEach((events) => {
        window.removeEventListener(events, scrollCurrent);
      });
    };
  });

  const sceneInfo = [
    {
      // 0
      type: 'sticky',
      heightNum: 6,
      scrollHeight: 0,
      values: {
        messageA_opacity_in: [0, 1, { start: 0.05, end: 0.15 }],
        messageB_opacity_in: [0, 1, { start: 0.25, end: 0.35 }],
        messageC_opacity_in: [0, 1, { start: 0.45, end: 0.55 }],
        messageD_opacity_in: [0, 1, { start: 0.65, end: 0.75 }],
        messageA_translateY_in: [40, 0, { start: 0.05, end: 0.15 }],
        messageB_translateY_in: [40, 0, { start: 0.25, end: 0.35 }],
        messageC_translateY_in: [40, 0, { start: 0.45, end: 0.55 }],
        messageD_translateY_in: [40, 0, { start: 0.65, end: 0.75 }],
        messageA_opacity_out: [1, 0, { start: 0.2, end: 0.3 }],
        messageB_opacity_out: [1, 0, { start: 0.4, end: 0.5 }],
        messageC_opacity_out: [1, 0, { start: 0.6, end: 0.7 }],
        messageD_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],
        messageA_translateY_out: [0, -40, { start: 0.2, end: 0.3 }],
        messageB_translateY_out: [0, -40, { start: 0.4, end: 0.5 }],
        messageC_translateY_out: [0, -40, { start: 0.6, end: 0.7 }],
        messageD_translateY_out: [0, -40, { start: 0.8, end: 0.9 }],
      },
    },
  ];

  const setLayout = () => {
    // 각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      if (sceneInfo[i].type === 'sticky') {
        sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      } else if (sceneInfo[i].type === 'normal') {
        sceneInfo[i].scrollHeight =
          container.current!.offsetHeight + window.innerHeight * 0.5;
      }
      return (container.current!.style.height = `${sceneInfo[0].scrollHeight}px`);
    }

    yOffset = window.pageYOffset;

    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        currentScene = i;
        break;
      }
    }
  };

  const calcValues = (values: any, currentYOffset: number) => {
    let rv;
    // 현재 scene에서 스크롤된 범위를 비율로 구하기
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    if (values.length === 3) {
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;

      if (
        currentYOffset >= partScrollStart &&
        currentYOffset <= partScrollEnd
      ) {
        rv =
          ((currentYOffset - partScrollStart) / partScrollHeight) *
            (values[1] - values[0]) +
          values[0];
      } else if (currentYOffset < partScrollStart) {
        rv = values[0];
      } else if (currentYOffset > partScrollEnd) {
        rv = values[1];
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }

    return rv;
  };

  const playAnimation = () => {
    const values = sceneInfo[currentScene].values;
    const currentYOffset = yOffset - prevScrollHeight;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    const translate = (inOut: {}, currentY: number) => {
      return `translate3d(0,${calcValues(inOut, currentY)}%, 0)`;
    };

    switch (currentScene) {
      case 0:
        if (scrollRatio <= 0.22) {
          // in
          setMessageA((prevState) => {
            return {
              ...prevState,
              opacity: calcValues(values.messageA_opacity_in, currentYOffset),
              transform: translate(
                values.messageA_translateY_in,
                currentYOffset
              ),
            };
          });
        } else {
          // out
          setMessageA((prevState) => {
            return {
              ...prevState,
              opacity: calcValues(values.messageA_opacity_out, currentYOffset),
              transform: translate(
                values.messageA_translateY_out,
                currentYOffset
              ),
            };
          });
        }
        if (scrollRatio <= 0.42) {
          // in
          setMessageB((prevState) => {
            return {
              ...prevState,
              opacity: calcValues(values.messageB_opacity_in, currentYOffset),
              transform: translate(
                values.messageB_translateY_in,
                currentYOffset
              ),
            };
          });
        } else {
          // out
          setMessageB((prevState) => {
            return {
              ...prevState,
              opacity: calcValues(values.messageB_opacity_out, currentYOffset),
              transform: translate(
                values.messageB_translateY_out,
                currentYOffset
              ),
            };
          });
        }
        if (scrollRatio <= 0.62) {
          // in
          setMessageC((prevState) => {
            return {
              ...prevState,
              opacity: calcValues(values.messageC_opacity_in, currentYOffset),
              transform: translate(
                values.messageC_translateY_in,
                currentYOffset
              ),
            };
          });
        } else {
          // out
          setMessageC((prevState) => {
            return {
              ...prevState,
              opacity: calcValues(values.messageC_opacity_out, currentYOffset),
              transform: translate(
                values.messageC_translateY_out,
                currentYOffset
              ),
            };
          });
        }

        if (scrollRatio <= 0.82) {
          // in
          setMessageD((prevState) => {
            return {
              ...prevState,
              opacity: calcValues(values.messageD_opacity_in, currentYOffset),
              transform: translate(
                values.messageD_translateY_in,
                currentYOffset
              ),
            };
          });
        } else {
          // out
          setMessageD((prevState) => {
            return {
              ...prevState,
              opacity: calcValues(values.messageD_opacity_out, currentYOffset),
              transform: translate(
                values.messageD_translateY_out,
                currentYOffset
              ),
            };
          });
        }

        break;

      default:
        break;
    }
  };

  const scrollCurrent = () => {
    enterNewScene = false;
    prevScrollHeight = 0; // 초기화
    yOffset = window.pageYOffset;

    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight = sceneInfo[i].scrollHeight;
    }

    // if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
    //   enterNewScene = true;
    //   currentScene++;
    //   document.body.setAttribute('id', `show-scene-${currentScene}`);
    // }

    // if (yOffset < prevScrollHeight) {
    //   enterNewScene = true;
    //   if (currentScene === 0) {
    //     return false;
    //   }
    //   currentScene--;
    //   document.body.setAttribute('id', `show-scene-${currentScene}`);
    // }

    if (enterNewScene) {
      return false;
    }

    playAnimation();
  };

  return (
    <Section ref={container}>
      <Title>
        안녕하세요!
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28.879"
          height="23.6"
          viewBox="0 0 28.879 23.6"
          className="svg-img"
        >
          <path
            d="M21.208,17.538a1.471,1.471,0,0,1,2.1,0,1.508,1.508,0,0,1,0,2.1l-8.8,8.8a1.522,1.522,0,0,1-2.142,0l-8.8-8.8a1.485,1.485,0,0,1,2.1-2.1l6.28,6.3V1.47A1.477,1.477,0,0,1,13.436,0a1.461,1.461,0,0,1,1.47,1.47V23.838Z"
            transform="translate(0 23.733) rotate(-90)"
            fill="#fff"
          ></path>
        </svg>
      </Title>
      <Msg style={messageA}>
        <p>프론튼엔드 개발자 손기연입니다.</p>
      </Msg>
      <Msg style={messageB}>
        <p>여기는 제 포트폴리오 사이트구요.</p>
      </Msg>
      <Msg style={messageC}>
        <p>상단의 Blog에서 저의 다른 이야기도 보실 수 있습니다.</p>
      </Msg>
      <Msg style={messageD}>
        <p>잘 부탁드립니다!</p>
      </Msg>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  font-size: 4rem;

  @media screen and (max-width: 414px) {
    font-size: 3.2rem;
  }
`;

const Title = styled.h2`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -6rem;
  height: 100vh;
  text-align: center;

  .svg-img {
    position: absolute;
    left: 50%;
    margin-top: 10rem;
    transform: translateX(-50%) rotate(90deg);
    animation: down 0.6s infinite alternate-reverse ease-out;
    @keyframes down {
      0% {
        margin-top: 8rem;
      }
      100% {
        margin-top: 10rem;
      }
    }
  }
`;

const Msg = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 45%;
  text-align: center;
  opacity: 0;
`;

export default ScrollMain;
