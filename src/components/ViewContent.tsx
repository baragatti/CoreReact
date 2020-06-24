import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {createStyles} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    viewContent: {
      padding: 16,
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
