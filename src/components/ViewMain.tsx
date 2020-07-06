import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {createStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      ...theme.mixins.toolbar,
      paddingTop: 8,
      paddingBottom: 4,
      paddingLeft: 16,
      paddingRight: 16,
    },
    main: {
      flexGrow: 1,
    },
  }),
);

const ViewMain: React.FC<React.PropsWithChildren<any>> = (props: React.PropsWithChildren<any>) => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div className={classes.toolbar}/>
      {props.children}
    </main>
  );
};

export default ViewMain;
