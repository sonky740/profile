import React from "react";
import { Layout } from "../components/index";

// main
const IndexPage = () => {
  return (
    <Layout>
      <main className="container">
        <section className="main-section1">
          <h2 className="tit-main1" data-text="ABOUT">ABOUT</h2>
          <article className="about">
            <h3 className="tit-sub1">이 사이트에 대하여</h3>

            <dl className="dl-type1">
              <dt>이 사이트는 무엇인가?</dt>
              <dd>4년차 웹 퍼블리셔 손기연의 포트폴리오이자 개인적인 코딩가이드 사이트입니다.<br />코딩 가이드에 대해선 추후 업데이트 예정입니다.</dd>
            </dl>

            <dl className="dl-type1">
              <dt>이 사이트는 어떤 구조로 되어있나?</dt>
              <dd><a href="https://www.gatsbyjs.com/" className="color-a" target="_blank" rel="noreferrer">Gatsby</a> 프레임워크를 사용하였으며 디자인, 코딩 모두 제 손을 거쳤습니다. </dd>
            </dl>

            <dl className="dl-type1">
              <dt>다른 프레임워크를 두고 왜 Gatsby를 사용하였는지?</dt>
              <dd>
                이 사이트를 만들면서 다짐했던 게 새로운 프레임워크를 쓰자였습니다. 그래서 프레임워크를 찾아보다가 처음엔 국내에선 그다지 알려지지 않았지만 요즘 떠오르는 GO 언어를 활용한 <a href="https://gohugo.io/" className="color-a" target="_blank" rel="noreferrer">Hugo</a>로 만들었다가 GO 언어를 새로 배워야 하는 것과 익힌다고 하여도 국내에선 범용성이 많이 떨어져 그나마 익숙한 React로 눈을 돌린 와중에 <a href="https://create-react-app.dev/" className="color-a" target="_blank" rel="noreferrer">CRA</a>, <a href="https://nextjs.org/" className="color-a" target="_blank" rel="noreferrer">Nextjs</a>, <a href="https://www.gatsbyjs.com/" className="color-a" target="_blank" rel="noreferrer">Gatsby</a> 3개로 좁혀졌습니다.<br />
                CRA는 포스코 차세대 MES 프로젝트 때 써봤기에 제외하였고<br />
                Nextjs를 받아서 빌드해보니 내용이 별로 없음에도 불구하고 시간이 오래 걸렸습니다.<br />
                그렇게 자연스럽게 Gatsby로 만들게 되었습니다.
              </dd>
            </dl>

            <dl className="dl-type1">
              <dt>이 사이트는 어디에 배포되고 있나?</dt>
              <dd>
                이 사이트는 두 곳에 배포됩니다.<br />
                하나는 제 NAS의 <a href="http://sonky.myasustor.com" className="color-a" target="_blank" rel="noreferrer">sonky.myasustor.com</a>,<br />
                하나는 Github의 <a href="https://sonky740.github.io/PF/" className="color-a" target="_blank" rel="noreferrer">sonky740.github.io/PF/</a><br />
                두 곳 모두 동일한 내용으로 올라갑니다.
              </dd>
            </dl>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
