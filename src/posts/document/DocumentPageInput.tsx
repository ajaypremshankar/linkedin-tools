import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PageButtons from './PageButtons';
import { OutlinedInputProps } from '@material-ui/core';

interface PageInputProps {
    addPage: (atIndex: number) => void,
    removePage: (atIndex: number) => void,
    changePageContent: (atIndex: number, data: string) => void,
    index: number,
    data: string,
}
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      justifyContent: "center"
    },
  }));

export default function DocumentPageInput(props: PageInputProps) {
    const classes = useStyles();

    const [pageState, setPageState] = useState(props.data);

    const changeText = (value: string) => {
      props.changePageContent(props.index, value)
      setPageState(value)
    }

    return (
            <div className={classes.root}>
              <TextField
               id="outlined-basic"
                label="Outlined"
                 variant="outlined"
                 value={pageState}
                 onChange={(event) => changeText(event.target.value)} />
              <PageButtons
               add={() => props.addPage(props.index)}
               remove={() => props.removePage(props.index)}/></div>
    );
}