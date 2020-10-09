import React from 'react';
//import { Boxplot, computeBoxplotStats } from 'boxplot';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import * as PropTypes from 'prop-types';
import * as ss from 'simple-statistics';
import { stylesFactory, useTheme } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const BoxPlotPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  const styles = getStyles();

  const myBoxStyle = {
    fill: options.boxColor.replace('-', ''),
    fillOpacity: 0.4,
    stroke: options.boxColor.replace('-', ''),
    strokeWidth: 1,
  };

  const myWhiskerStyle = {
    stroke: options.boxColor.replace('-', ''),
    strokeWidth: options.lineWidth,
  };

  const myMedianStyle = {
    stroke: options.medianColor.replace('-', ''),
  };

  const myOutlierStyle = {
    fill: options.boxColor.replace('-', ''),
  };

  const values = data.series
    .map(series => series.fields.find(field => field.type === 'number'))
    .map(field => field?.values);

  const numSeries = data.series.length;

  //const vals = values[0] !== undefined ? values[0].toArray() : [];
  //const min = Math.min(...values.map(val => (val === undefined ? 0 : Math.min(...val.toArray()))));
  //const max = Math.max(...values.map(val => (val === undefined ? 10 : Math.max(...val.toArray()))));

  const params = {
    width: options.seriesOrientation === 'horizontal' ? width - 20 : width / numSeries,
    height: options.seriesOrientation === 'horizontal' ? height / numSeries : height - 20,
    orientation: options.seriesOrientation,
    min: options.minScale, //options.autoscale ? Number((min - (max - min) / 10).toPrecision(2)) : options.minScale,
    max: options.maxScale, //options.autoscale ? Number((max + (max - min) / 10).toPrecision(2)) : options.maxScale,
  };

  const plot = series => (
    <Boxplot
      width={params.width}
      height={params.height}
      orientation={params.orientation}
      boxStyle={myBoxStyle}
      whiskerStyle={myWhiskerStyle}
      medianStyle={myMedianStyle}
      outlierStyle={myOutlierStyle}
      whiskerStrokeWidth={options.lineWidth}
      medianStrokeWidth={options.lineWidth}
      axis={{
        label: series.name,
        min: params.min,
        max: params.max,
        gridLines: options.gridLines,
        numTicks: options.numTicks,
        autoScale: options.autoscale,
      }}
      stats={computeBoxplotStats(series.fields.find(field => field.name === 'Value').values.toArray())}
      options={options}
    />
  );

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <div>{data.series.map(serie => plot(serie))}</div>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});

function computeBoxplotStats(data) {
  const quartile2 = ss.median(data);

  const quartile1 = ss.quantile(data, 0.25);
  const quartile3 = ss.quantile(data, 0.75);
  const percentile10 = ss.quantile(data, 0.1);
  const percentile90 = ss.quantile(data, 0.9);
  const interQuartileRange = quartile3 - quartile1;

  const lowerOutlierCutoff = quartile1 - 1.5 * interQuartileRange;
  const upperOutlierCutoff = quartile3 + 1.5 * interQuartileRange;

  const outliers = [] as any;
  const nonOutliers = [] as any;
  data.forEach(datum => {
    if (datum < lowerOutlierCutoff || datum > upperOutlierCutoff) {
      outliers.push(datum);
    } else {
      nonOutliers.push(datum);
    }
  });

  const minNonOutliers = ss.min(nonOutliers);
  const maxNonOutliers = ss.max(nonOutliers);
  const min = ss.min(data);
  const max = ss.max(data);
  const mean = ss.mean(data);
  const std = ss.standardDeviation(data);

  return {
    quartile1,
    quartile2,
    quartile3,
    percentile10,
    percentile90,
    lowerOutlierCutoff,
    upperOutlierCutoff,
    minNonOutliers,
    maxNonOutliers,
    min,
    max,
    mean,
    std,
    outliers,
  };
}

const Boxplot = ({
  width,
  height,
  orientation,
  axis,
  stats,
  style,
  whiskerStrokeWidth,
  whiskerStyle,
  boxStyle,
  medianStrokeWidth,
  medianStyle,
  outlierRadius,
  outlierStyle,
  className,
  options,
}) => {
  let xMin,
    xMax,
    transforms,
    labelTransforms,
    scale,
    labelPad,
    xCenter,
    chartHeight,
    chartWidth,
    chartPad,
    tickLabelWidth;
  const padding = 5;
  const maxVal = axis.autoScale ? stats.max + (stats.max - stats.min) / 10 : axis.max;
  const minVal = axis.autoScale ? stats.min - (stats.max - stats.min) / 10 : axis.min;
  const range = maxVal - minVal;
  const labelHeight = 12;
  const labelWidth = 6 * axis.label.length;

  if (Math.abs(maxVal) > Math.abs(minVal)) {
    tickLabelWidth = 8 * Math.ceil(Math.log10(Math.abs(maxVal)) + 2);
  } else {
    tickLabelWidth = 8 * Math.ceil(Math.log10(Math.abs(minVal)) + 2);
  }

  const ticks = new Array(axis.numTicks + 1);
  for (var i = 0; i < ticks.length; i++) {
    ticks[i] = minVal + (range * i) / axis.numTicks;
  }

  if (orientation === 'vertical') {
    labelPad = labelHeight + 5;
    //basically providing 6 pixels per digit + "."
    xMin = tickLabelWidth + 3 * padding;
    xMax = width > 205 ? 200 : width - 2 * padding;
    xCenter = (xMax + xMin) / 2;

    chartPad = labelHeight;
    chartHeight = height - 2 * padding - labelPad - chartPad;
    scale = chartHeight / range;

    // Coordinate system: +y at the top, +x to the right.
    transforms = [`translate (0, ${chartHeight + chartPad})`, `scale(1, -1)`];
    labelTransforms = [`translate (0, ${height - labelHeight})`];
  } else {
    xMin = labelHeight;
    labelPad = tickLabelWidth / 2;
    xMax = height > 200 + 2 * padding + 2 * labelHeight ? 200 : height - 2 * padding - 2 * labelHeight;
    xCenter = (xMax + xMin) / 2;

    chartPad = tickLabelWidth / 2 + 5;
    chartHeight = width - 2 * padding - labelPad - chartPad;
    //chartHeight = width - 2 * padding - chartPad;
    scale = chartHeight / range;

    // Coordinate system: +y at the right, +x to the top.
    transforms = [`translate (${labelPad}, ${height - 2 * padding - labelHeight}) `, `rotate(-90)`];
    labelTransforms = [`translate (${-xCenter}, ${labelHeight})`];
  }

  const svgVertStyle = {
    display: 'inline-block',
    padding: `${padding}px`,
  };
  const svgHorzStyle = {
    display: 'block',
    padding: `${padding}px`,
  };

  let whiskerLow, whiskerHigh;
  switch (options.whiskerStat) {
    case 'iqr':
      whiskerLow = stats.lowerOutlierCutoff;
      whiskerHigh = stats.upperOutlierCutoff;
      break;
    case 'percentile10':
      whiskerLow = stats.percentile10;
      whiskerHigh = stats.percentile90;
      break;
    case 'std':
      whiskerLow = stats.mean - stats.std;
      whiskerHigh = stats.mean + stats.std;
      break;
    case 'minMaxNonOutliers':
    default:
      whiskerLow = stats.minNonOutliers;
      whiskerHigh = stats.maxNonOutliers;
  }

  const title = `Low Whisker: ${Math.round(whiskerLow * 100) / 100}
1st Quartile: ${Math.round(stats.quartile1 * 100) / 100}
Mean: ${Math.round(stats.mean * 100) / 100}
Median: ${Math.round(stats.quartile2 * 100) / 100}
3rd Quartile: ${Math.round(stats.quartile3 * 100) / 100}
High Whisker: ${Math.round(whiskerHigh * 100) / 100}`;

  var gridStyle = {
    stroke: whiskerStyle.stroke,
    strokeWidth: whiskerStyle.strokeWidth,
    strokeOpacity: 0.25,
  };

  const tickLine = tick => (
    <line
      x1={xMin - 2 * padding}
      x2={axis.gridLines ? xMax : xMin - padding}
      y1={scale * (tick - minVal)}
      y2={scale * (tick - minVal)}
      strokeWidth={whiskerStrokeWidth}
      style={axis.gridLines ? gridStyle : whiskerStyle}
    />
  );
  const tickLabel = tick => (
    <text
      x={orientation === 'vertical' ? tickLabelWidth : labelPad + scale * (tick - minVal)}
      y={
        orientation === 'vertical'
          ? chartHeight + chartPad - scale * (tick - minVal) + labelHeight / 2
          : height - 2 * padding - 1
      }
      fill="white"
      textAnchor={orientation === 'vertical' ? 'end' : 'middle'}
    >
      {Math.round(tick * 10) / 10}
    </text>
  );

  return (
    <svg
      width={width}
      height={height}
      className={className}
      style={orientation === 'vertical' ? svgVertStyle : svgHorzStyle}
    >
      <title>{title}</title>
      <g transform={labelTransforms.join(' ')} style={style}>
        <text x={xCenter} y="0" fill="white" textAnchor={orientation === 'vertical' ? 'middle' : 'left'}>
          {axis.label}
        </text>
      </g>
      <g transform={transforms.join(' ')} style={style}>
        <line
          key="axis"
          x1={xMin - 2 * padding}
          x2={xMin - 2 * padding}
          y1={0}
          y2={scale * range}
          strokeWidth={whiskerStrokeWidth}
          style={whiskerStyle}
        />
        {ticks.map(tick => tickLine(tick))}
      </g>
      <g style={style}>{ticks.map(tick => tickLabel(tick))}</g>
      <g transform={transforms.join(' ')} style={style}>
        <rect
          key="box"
          x={xMin}
          width={xMax - xMin}
          y={scale * (stats.quartile1 - minVal)}
          height={scale * (stats.quartile3 - stats.quartile1)}
          style={boxStyle}
        />
        <line
          key="tick-low"
          x1={xMin}
          x2={xMax}
          y1={scale * (whiskerLow - minVal)}
          y2={scale * (whiskerLow - minVal)}
          strokeWidth={whiskerStrokeWidth}
          style={whiskerStyle}
        />
        <line
          key="whisker-low"
          x1={xCenter}
          x2={xCenter}
          y1={scale * (whiskerLow - minVal)}
          y2={scale * (stats.quartile1 - minVal)}
          strokeWidth={whiskerStrokeWidth}
          style={whiskerStyle}
        />
        {options.showMedian ? (
          <line
            key="median"
            x1={xMin}
            x2={xMax}
            y1={scale * (stats.quartile2 - minVal)}
            y2={scale * (stats.quartile2 - minVal)}
            strokeWidth={medianStrokeWidth}
            style={medianStyle}
          >
            <title>Median: {stats.quartile2}</title>
          </line>
        ) : (
          ''
        )}
        {options.showMean ? (
          <line
            key="mean"
            x1={xMin}
            x2={xMax}
            y1={scale * (stats.mean - minVal)}
            y2={scale * (stats.mean - minVal)}
            strokeWidth={medianStrokeWidth}
            style={medianStyle}
          >
            <title>Mean: {stats.mean}</title>
          </line>
        ) : (
          ''
        )}
        <line
          key="whisker-high"
          x1={xCenter}
          x2={xCenter}
          y1={scale * (whiskerHigh - minVal)}
          y2={scale * (stats.quartile3 - minVal)}
          strokeWidth={whiskerStrokeWidth}
          style={whiskerStyle}
        />
        <line
          key="tick-high"
          x1={xMin}
          x2={xMax}
          y1={scale * (whiskerHigh - minVal)}
          y2={scale * (whiskerHigh - minVal)}
          strokeWidth={whiskerStrokeWidth}
          style={whiskerStyle}
        />
        {options.showOutliers
          ? stats.outliers.map((outlier, index) => (
              <ellipse
                key={'outlier-${index}'}
                cx={xCenter}
                cy={scale * (outlier - minVal)}
                rx={outlierRadius}
                ry={outlierRadius}
                strokeWidth="0"
                style={outlierStyle}
              >
                <title>{outlier}</title>
              </ellipse>
            ))
          : ''}
      </g>
    </svg>
  );
};

Boxplot.propTypes = {
  // Width of the svg element
  width: PropTypes.number.isRequired,
  // Height of the svg element
  height: PropTypes.number.isRequired,
  // Orientation of the plot. vertical means min values at the left,
  // horizontal means min values at the bottom.
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),

  // Minimum and maximum values for the axis. Values outside this
  // range are clipped.
  //min: PropTypes.number.isRequired,
  //max: PropTypes.number.isRequired,

  // The stats to plot.
  stats: PropTypes.shape({
    quartile1: PropTypes.number.isRequired,
    quartile2: PropTypes.number.isRequired,
    quartile3: PropTypes.number.isRequired,
    percentile10: PropTypes.number.isRequired,
    percentile90: PropTypes.number.isRequired,
    lowerOutlierCutoff: PropTypes.number.isRequired,
    upperOutlierCutoff: PropTypes.number.isRequired,
    minNonOutliers: PropTypes.number.isRequired,
    maxNonOutliers: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    mean: PropTypes.number.isRequired,
    std: PropTypes.number.isRequired,
    outliers: PropTypes.array,
  }),

  style: PropTypes.object,
  //tickStyle: PropTypes.object,
  whiskerStrokeWidth: PropTypes.number,
  whiskerStyle: PropTypes.object,
  boxStyle: PropTypes.object,
  medianStrokeWidth: PropTypes.number,
  medianStyle: PropTypes.object,
  outlierRadius: PropTypes.number,
  outlierStyle: PropTypes.object,

  // Pass through, to support styled-components.
  className: PropTypes.string,
};

Boxplot.defaultProps = {
  orientation: 'vertical',
  style: { strokeOpacity: 1, fillOpacity: 0.75 },
  //tickStyle: { stroke: 'black' },
  whiskerStrokeWidth: 1,
  // whiskerStyle: { stroke: 'black', strokeDasharray: '2,2' },
  whiskerStyle: { stroke: 'black' },
  boxStyle: { stroke: 'black', fill: 'black' },
  medianStrokeWidth: 2,
  medianStyle: { stroke: 'white' },
  outlierRadius: 2.5,
  outlierStyle: { stroke: 'black', fill: 'black' },
};
