//See: https://github.com/pablojim/highcharts-ng

$(function () {
  var myapp = angular.module('myapp', ["highcharts-ng"]);

  myapp.controller('myctrl', function ($scope) {

    $scope.addPoints = function () {
      var seriesArray = $scope.chartConfig.series
      var rndIdx = Math.floor(Math.random() * seriesArray.length);
      seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])

      // this is the important row, creating a new object
      $scope.chartConfig = angular.copy(this.chartConfig);
    };

    var series = 0;
    $scope.addSeries = function () {
      var rnd = []
      for (var i = 0; i < 10; i++) {
        rnd.push(Math.floor(Math.random() * 20) + 1)
      }
      $scope.chartConfig.series.push({
        data: rnd,
        id: 'series_' + series++
      })

      // this is the important row, creating a new object
      $scope.chartConfig = angular.copy(this.chartConfig);
    }

    $scope.removeRandomSeries = function () {
      var seriesArray = $scope.chartConfig.series
      var rndIdx = Math.floor(Math.random() * seriesArray.length);
      seriesArray.splice(rndIdx, 1)

      // this is the important row, creating a new object
      $scope.chartConfig = angular.copy(this.chartConfig);
    }

    $scope.swapChartType = function () {
      if (this.chartConfig.chart.type === 'line') {
        this.chartConfig.chart.type = 'bar'
      } else {
        this.chartConfig.chart.type = 'line'
        this.chartConfig.chart.zoomType = 'x'
      }

      // this is the important row, creating a new object
      $scope.chartConfig = angular.copy(this.chartConfig);
    };

    $scope.chartConfig = {
      chart: {
        type: 'bar'
      },
      series: [{
        data: [10, 15, 12, 8, 7],
        id: 'series1'
      }],
      title: {
        text: 'Hello'
      }
    }

  });
})
