import {createMuiTheme, makeStyles} from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      '50': '#e3f2fd',
      '100': '#bbdefb',
      '200': '#90caf9',
      '300': '#64b5f6',
      '400': '#42a5f5',
      '500': '#2196f3',
      '600': '#1e88e5',
      '700': '#1976d2',
      '800': '#1565c0',
      '900': '#0d47a1',
      'A100': '#82b1ff',
      'A200': '#448aff',
      'A400': '#2979ff',
      'A700': '#2962ff',
      'main': '#1E96F3',
    },
  },
});

export const cardStyles = makeStyles(() => ({
  cardHeader: {
    padding: '8px 16px',
    borderBottom: 'solid 1px #e0e0e0',
  },
  cardHeaderContent: {
    display: 'flex',
  },
  cardHeaderActions: {
    marginLeft: 'auto',
  },
  cardContent: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  container: {
    width: '100%',
  },
}));
