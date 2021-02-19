import React from "react";
import { Layout, SectionType, FigureBox, Code } from "../../components/index";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Posco1 from '../../images/posco/posco1.png';

// main
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file1: file(relativePath: { eq: "posco/posco1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout align="center">
      {/* 포스코 */}
      <SectionType title="포스코 차세대 MES 3.0 시스템 UI 개선">
        <p>
          포스코 MES 시스템을 React로 재구축한 프로젝트입니다.<br />
          UI는 <a href="https://react.semantic-ui.com/" target="_blank" rel="noreferrer">Semantic-UI-React</a>를 기반으로 하였습니다.
        </p>
        <FigureBox>
          <figure>
            <a href={Posco1} target="_blank" rel="noreferrer">
              <Img fluid={data.file1.childImageSharp.fluid} alt="작업 중 일부분" />
            </a>
            <figcaption>
              ag-grid 와 rechart를 활용한 페이지<br />
              <a href="https://codepen.io/Sonky/project/editor/ZKezNM" target="_blank" rel="noreferrer">https://codepen.io/Sonky/project/editor/ZKezNM</a>
            </figcaption>
          </figure>
          <Code title="index.jsx" type="js">
{`import React, { Component } from 'react';
import { ContentLayout, Segment } from '@mes/mes-ui-react';
import SearchView from './SearchView';
import ButtonView1 from './ButtonView1';
import TableView from './TableView';
import ButtonView2 from './ButtonView2';
import ChartView from './ChartView';

class Index extends Component {
render() {
  return (
    <ContentLayout>
      <ContentLayout.Header title="폭예측 Simulator" />

      <SearchView />
      
      <Segment>
        <ButtonView1 />
        <TableView />
      </Segment>

      <Segment>
        <ButtonView2 />
        <ChartView />
      </Segment>
    </ContentLayout>
  );
}
}

export default Index;`}
          </Code>
          <Code title="datagrid.jsx" type="js">
{`import React, { Component } from 'react';
import { DataGrid } from '@mes/mes-ui-react';

class TableView extends Component {
state = {
  columnDefs: [
    {
      colId: 'col1',
      field: 'col1',
      headerName: '구분',
      headerCheckboxSelection: false,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    },
    { colId: 'col2', field: 'col2', headerName: 'SEQ' },
    { colId: 'col3', field: 'col3', headerName: '재료번호' },
    {
      colId: 'group1',
      headerName: '주문 Size',
      groupId: 'group1',
      children: [
        { colId: 'col4', field: 'col4', headerName: '두께' },
        { colId: 'col5', field: 'col5', headerName: '폭' },
      ],
    },
    {
      colId: 'group2',
      headerName: '소재 Size',
      groupId: 'group2',
      children: [
        { colId: 'col6', field: 'col6', headerName: '두께' },
        { colId: 'col7', field: 'col7', headerName: '폭' },
      ],
    },
    { colId: 'col8', field: 'col8', headerName: '중량' },
    { colId: 'col9', field: 'col9', headerName: 'S/T' },
    { colId: 'col10', field: 'col10', headerName: '품명' },
    { colId: 'col11', field: 'col11', headerName: '용도' },
    { colId: 'col12', field: 'col12', headerName: '재질' },
    { colId: 'col13', field: 'col13', headerName: '출강목표' },
    { colId: 'col14', field: 'col14', headerName: '폭 예측값' },
  ],
  rowData: [
    {
      col1: '',
      col2: '1',
      col3: 'CBH2751',
      col4: '0.930',
      col5: '1155.0',
      col6: '0.930',
      col7: '1155.0',
      col8: '12,300',
      col9: 'M',
      col10: 'FZG',
      col11: 'SE4U',
      col12: 'ZTTCLCSUAA',
      col13: 'WU3040YDTI1',
      col14: '1,153.5',
    },
  ],
  rowSelection: 'multiple',
};

onRowSelected = event => {
  console.log('onRowSelected : ', event);
};

onCellValueChanged = params => {
  console.log('onCellValueChanged : ', params);
};

onGridReady = params => {
  this.grid = {
    api: params.api,
    columnApi: params.columnApi,
  };
};

render() {
  const { columnDefs, rowData, rowSelection } = this.state;

  return (
    <DataGrid
      columnDefs={columnDefs}
      rowData={rowData}
      onGridReady={this.onGridReady}
      rowSelection={rowSelection}
      onRowSelected={this.onRowSelected}
      onCellValueChanged={this.onCellValueChanged}
      maxHeight={300}
    />
  );
}
}

export default TableView;`}
          </Code>
          <Code title="chart.jsx" type="js">
{`import React, { PureComponent } from 'react';
import { Chart } from '@mes/mes-ui-react';

class ChartView extends PureComponent {
constructor() {
  super();
  this.state = {
    chartData: [
      { name: 'CBH2551 [1153]', 폭: 1155 },
      { name: 'CBH2552 [1152]', 폭: 1155 },
      { name: 'CBH2553 [1150]', 폭: 1100 },
      { name: 'CBH2554 [1149]', 폭: 1100 },
      { name: 'CBH2555 [1152]', 폭: 1155 },
    ],
  };
}

render() {
  return <Chart.Bar data={this.state.chartData} />;
}
}

export default ChartView;`}
          </Code>
        </FigureBox>
      </SectionType>
    </Layout>
  )
}

export default IndexPage
