import React, { Component } from "react";
import ReactDOM from "react-dom";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
const dataJson = {
  chart: {
    xAxisName: "Country",
    yAxisName: "Reserves (MMbbl)",
    numberSuffix: "K",
    theme: "fusion"
  },
  data: [
    {
      label: "Venezuela",
      value: "290"
    },
    {
      label: "Saudi",
      value: "260"
    },
    {
      label: "Canada",
      value: "180"
    },
    {
      label: "Iran",
      value: "140"
    },
    {
      label: "Russia",
      value: "115"
    },
    {
      label: "UAE",
      value: "100"
    },
    {
      label: "US",
      value: "30"
    },
    {
      label: "China",
      value: "30"
    }
  ]
};

const Chart = props => {
  const type = props.type;
  let chartConfigs = {
    type: type,
    dataFormat: "json",
    dataSource: dataJson
  };

  return <ReactFC {...chartConfigs} />;
};

export default Chart;
