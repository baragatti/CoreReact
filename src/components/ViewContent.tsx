import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {createStyles} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    viewContent: {
      display: 'flex',
      width: '100%',
      maxWidth: 960,
      padding: 16,
      marginLeft: 'auto',
      marginRight: 'auto',
      '& > *': {
        flexGrow: 1,
      },
    },
  }),
);

const ViewContent: React.FC<React.PropsWithChildren<any>> = (props: React.PropsWithChildren<any>) => {
  const classes = useStyles();

  return (
    <main className={classes.viewContent}>
      {props.children}
    </main>
  );
};

export default ViewContent;
