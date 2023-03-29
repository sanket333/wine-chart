import './App.css';
import chartData from './Wine-Data.json'
import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { filterDataForScatterChart,filterDataForBarChart, getOption } from './utils.js'


function App() {

  useEffect(() => {
    // creating echarts instances
    const myScatterChart = echarts.init(document.getElementById('scatter'));
    const myBarChart = echarts.init(document.getElementById('bar'));
    // getting required filtered axis data
    const scatterData = filterDataForScatterChart(chartData, 'Color intensity', 'Hue');
    const barData = filterDataForBarChart(chartData, 'Alcohol', 'Malic Acid');
    // getting Options to draw
    const scatteredOptions = getOption({ xAxis: scatterData.xAxis, yAxis: scatterData.yAxis, type: 'scatter' })
    const barOptions = getOption({ xAxis: barData.xAxis, yAxis: barData.yAxis, type: 'bar' })
    // plotting the chart
    myScatterChart.setOption(scatteredOptions)
    myBarChart.setOption(barOptions)
  })
  return (
    <div className="App">
      <div id="scatter"></div>
      <div id="bar"></div>
    </div>
  );
}

export default App;
