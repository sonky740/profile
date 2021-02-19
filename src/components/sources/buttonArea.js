import React from "react";
import styled from "styled-components";

// 버튼 영역 지정
const ButtonArea = styled.div`
  display: flex;
  position: relative; // 하단 툴팁이 들어갈 경우
  flex-wrap: wrap;
  margin: 0 -4px;
  text-align: center;

  >* {
    margin: 2px 4px 2px;
  }
`

export default function BtnArea({children}) {
  return (
    <ButtonArea>
      {children}
    </ButtonArea>
  )
}