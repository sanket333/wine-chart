// filtering the dataset for chart
export const filterDataForScatterChart = (chartData, row, col) => {
    let res = {
        xAxis: [],
        yAxis: [],
    };
    
    chartData.sort((a, b) => parseFloat(a[row]) - parseFloat(b[row]))
    res.xAxis = chartData.map((item) => item[row]);
    res.yAxis = chartData.map((item) => item[col]);

    return res;
}

export const filterDataForBarChart = (chartData, row, col) => {
  let res = {
    xAxis: [],
    yAxis: [],
  }

  let rowArr = chartData.map(data => data[row])
  res.xAxis = [...new Set(rowArr)].sort((a,b) => a - b)
  
  res.xAxis.forEach(data => {
    let dataArr = chartData.filter((obj) => obj[row] === data )
    let sum = dataArr.reduce((a, val) => a + val[col], 0)
    res.yAxis.push(sum/dataArr.length)
  })

  return res;
}
// creating options to draw the chart
export const getOption = ({xAxis, yAxis, type}) => {
    let option = {
        xAxis: {
          data: xAxis
        },
        yAxis: {},
        title: {
          text: `${type} view`
        },
        series: [
          {
            type,
            data: yAxis
          }
        ]
      }
      return option;
}