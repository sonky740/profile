import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .scroll-section {
    position: relative;
    /* padding-top: calc(50vh - 8.4rem); */

    &-title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: calc(100vh - 8.4rem);
      font-size: 4rem;
      text-align: center;
    }

    &-message {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      top: 45%;
      font-size: 4rem;
      text-align: center;
    }
  }

  .sticky-elem {
    display: flex;
    position: fixed;
    left: 0;
    width: 100%;
    opacity: 0;

    .scroll-effect-end & {
      display: none !important;
    }
  }
`;

export default function ScrollMain() {
  const container = useRef(null);
  const messageA = useRef(null);
  const messageB = useRef(null);
  const messageC = useRef(null);
  const messageD = useRef(null);
  let yOffset = 0; // window.pageYOffset
  let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0; // 현재 활성화된(눈 앞에 보고있는) scene(scroll-section)
  let enterNewScene = false; // 새로운 scene이 시작된 순간 true

  const sceneInfo = [
    {
      // 0
      type: 'sticky',
      heightNum: 6,
      scrollHeight: 0,
      values: {
        messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
        messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
        messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
        messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
        messageA_translateY_in: [40, 0, { start: 0.1, end: 0.2 }],
        messageB_translateY_in: [40, 0, { start: 0.3, end: 0.4 }],
        messageC_translateY_in: [40, 0, { start: 0.5, end: 0.6 }],
        messageD_translateY_in: [40, 0, { start: 0.7, end: 0.8 }],
        messageA_opacity_out: [1, 0, { start: 0.25, end: 0.35 }],
        messageB_opacity_out: [1, 0, { start: 0.45, end: 0.55 }],
        messageC_opacity_out: [1, 0, { start: 0.65, end: 0.75 }],
        messageD_opacity_out: [1, 0, { start: 0.85, end: 0.95 }],
        messageA_translateY_out: [0, -40, { start: 0.25, end: 0.35 }],
        messageB_translateY_out: [0, -40, { start: 0.45, end: 0.55 }],
        messageC_translateY_out: [0, -40, { start: 0.65, end: 0.75 }],
        messageD_translateY_out: [0, -40, { start: 0.85, end: 0.95 }],
      },
    },
  ];

  const setLayout = () => {
    // 각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      if (sceneInfo[i].type === 'sticky') {
        sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      } else if (sceneInfo[i].type === 'normal') {
        sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight + window.innerHeight * 0.5;
      }
      return (container.current.style.height = `${sceneInfo[0].scrollHeight}px`);
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

    document.body.setAttribute('id', `show-scene-${currentScene}`);
  };

  const calcValues = (values, currentYOffset) => {
    let rv;
    // 현재 scene에서 스크롤된 범위를 비율로 구하기
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    if (values.length === 3) {
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;

      if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
        rv = ((currentYOffset - partScrollStart) / partScrollHeight) * (values[1] - values[0]) + values[0];
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

    const translate = (inOut, currentY) => {
      return `translate3d(0,${calcValues(inOut, currentY)}%, 0)`;
    };

    switch (currentScene) {
      case 0:
        if (scrollRatio <= 0.22) {
          // in
          messageA.current.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
          messageA.current.style.transform = translate(values.messageA_translateY_in, currentYOffset);
        } else {
          // out
          messageA.current.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
          messageA.current.style.transform = translate(values.messageA_translateY_out, currentYOffset);
        }

        if (scrollRatio <= 0.42) {
          // in
          messageB.current.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
          messageB.current.style.transform = translate(values.messageB_translateY_in, currentYOffset);
        } else {
          // out
          messageB.current.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
          messageB.current.style.transform = translate(values.messageB_translateY_out, currentYOffset);
        }

        if (scrollRatio <= 0.62) {
          // in
          messageC.current.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
          messageC.current.style.transform = translate(values.messageC_translateY_in, currentYOffset);
        } else {
          // out
          messageC.current.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
          messageC.current.style.transform = translate(values.messageC_translateY_out, currentYOffset);
        }

        if (scrollRatio <= 0.82) {
          // in
          messageD.current.style.opacity = calcValues(values.messageD_opacity_in, currentYOffset);
          messageD.current.style.transform = translate(values.messageD_translateY_in, currentYOffset);
        } else {
          // out
          messageD.current.style.opacity = calcValues(values.messageD_opacity_out, currentYOffset);
          messageD.current.style.transform = translate(values.messageD_translateY_out, currentYOffset);
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

  useLayoutEffect(() => {
    setLayout();

    window.addEventListener('scroll', function () {
      scrollCurrent();
    });

    // ['resize', 'orientationchange'].forEach(function (events) {
    //   window.addEventListener(events, function () {
    //     window.location.reload();
    //   });
    // });

    return () => {
      ['resize', 'scroll'].forEach(function (events) {
        window.removeEventListener(events, scrollCurrent);
      });
    };
  });

  return (
    <Section>
      <main className="container scroll-detail">
        <section className="main-section">
          <div ref={container} className="scroll-section">
            <h1 className="scroll-section-title">타이틀인데요</h1>
            <div ref={messageA} className="sticky-elem scroll-section-message">
              <p>첫번째 문단이구요.</p>
            </div>
            <div ref={messageB} className="sticky-elem scroll-section-message">
              <p>이러쿵 저러쿵해서 저러쿵하지 않나요?</p>
            </div>
            <div ref={messageC} className="sticky-elem scroll-section-message">
              <p>이건 세번째 문단인데 어떻게 생각하세요?</p>
            </div>
            <div ref={messageD} className="sticky-elem scroll-section-message">
              <p>어떻게 생각하긴요 아무 생각 없는데요.</p>
            </div>
          </div>
        </section>
      </main>
    </Section>
  );
}
