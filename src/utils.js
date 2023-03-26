// filtering the dataset for chart
export const filterDataByAxis = (chartData, row, col) => {
    let res = {
        xAxis: [],
        yAxis: [],
    };
    chartData.sort((a, b) => parseFloat(a[row]) - parseFloat(b[row]))
    res.xAxis = chartData.map((item) => item[row]);
    res.yAxis = chartData.map((item) => item[col]);
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
      console.log(option);
      return option;
}