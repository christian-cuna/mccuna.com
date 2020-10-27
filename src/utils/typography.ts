import Typography from 'typography';
// import theme from 'typography-theme-lincoln';
// import theme from 'typography-theme-sutro';
//import theme from 'typography-theme-irving';
// import theme from 'typography-theme-lawton';
import theme from 'typography-theme-noriega';
// import theme from 'typography-theme-grand-view'; // looks good

const typography = new Typography(theme);

export const bodyColor = typography.options.bodyColor;

export default typography;
