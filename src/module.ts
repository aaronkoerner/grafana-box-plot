import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { BoxPlotPanel } from './BoxPlotPanel';

export const plugin = new PanelPlugin<SimpleOptions>(BoxPlotPanel).setPanelOptions(builder => {
  return builder
    .addRadio({
      path: 'seriesOrientation',
      defaultValue: 'horizontal',
      name: 'Series orientation',
      settings: {
        options: [
          {
            value: 'horizontal',
            label: 'Horizontal',
          },
          {
            value: 'vertical',
            label: 'Vertical',
          },
        ],
      },
    })
    .addBooleanSwitch({
      path: 'gridLines',
      name: 'Show Grid Lines',
      defaultValue: false,
      category: ['Axis'],
    })
    .addNumberInput({
      path: 'numTicks',
      name: 'Number of Ticks',
      defaultValue: 10,
      category: ['Axis'],
    })
    .addBooleanSwitch({
      path: 'autoscale',
      name: 'Autoscale',
      defaultValue: true,
      category: ['Axis'],
    })
    .addNumberInput({
      path: 'minScale',
      name: 'Minimum',
      defaultValue: 0,
      showIf: (config: SimpleOptions) => !config.autoscale,
      category: ['Axis'],
    })
    .addNumberInput({
      path: 'maxScale',
      name: 'Maximum',
      defaultValue: 100,
      showIf: (config: SimpleOptions) => !config.autoscale,
      category: ['Axis'],
    })
    .addNumberInput({
      path: 'lineWidth',
      name: 'Line Width',
      defaultValue: 1,
    })
    .addColorPicker({
      path: 'boxColor',
      name: 'Box Color',
      defaultValue: 'lime',
    })
    .addColorPicker({
      path: 'medianColor',
      name: 'Median Color',
      defaultValue: 'white',
    })
    .addSelect({
      path: 'whiskerStat',
      defaultValue: 'minMaxNonOutliers',
      name: 'Whisker Placement',
      category: ['Statistics'],
      settings: {
        options: [
          {
            value: 'minMaxNonOutliers',
            label: 'Min/Max of Non-Outliers',
          },
          {
            value: 'iqr',
            label: 'Box +/- 1.5 x Interquartile Range',
          },
          {
            value: 'percentile10',
            label: '10th/90th Percentile',
          },
          {
            value: 'std',
            label: 'Mean +/- 1 Standard Deviation',
          },
        ],
      },
    })
    .addBooleanSwitch({
      path: 'showMedian',
      name: 'Show Median',
      defaultValue: true,
      category: ['Statistics'],
    })
    .addBooleanSwitch({
      path: 'showMean',
      name: 'Show Mean',
      defaultValue: false,
      category: ['Statistics'],
    })
    .addBooleanSwitch({
      path: 'showOutliers',
      name: 'Show Outliers',
      defaultValue: true,
      category: ['Statistics'],
    });
});
