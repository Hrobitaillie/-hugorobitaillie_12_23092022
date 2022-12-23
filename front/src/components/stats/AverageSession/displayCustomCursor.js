/** 
 * Display customized Cursor in the average session graph.
 * (the background color in dark red and red)
 * 
 * @param { Objects } e - Information about cursor 
 *
 * 
 * Change the background gradient while cursor moove
 */

export const displayCustomCursor = (e) => {
    const durationSessionsChart = document.querySelector(
      ".duration-sessions-chart"
    );

    if (e.isTooltipActive === true) {
      const lineChart = document.querySelector(
        ".duration-sessions-chart__line-chart"
      );
      const lineChartWidth = lineChart.clientWidth;
      const colorStopPourcentage =
        (e.activeCoordinate.x / lineChartWidth) * 100;
      durationSessionsChart.style.backgroundImage = `linear-gradient(90deg, rgba(255, 0, 0, 1) ${colorStopPourcentage}%, rgba(0, 0, 0, .1) ${colorStopPourcentage}%, rgba(0, 0, 0, .1) 100%)`;
    } else {
      durationSessionsChart.style.backgroundImage = null;
    }
};