import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DocumentPageInput from './DocumentPageInput';
import DocumentPostPagePreview from './DocumentPostPagePreview';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        justifyContent: "center"
    },
}));

export default function PostDocument() {
    const classes = useStyles();

    const [pagesState, setPageState] = useState([""]);

    const addPage = (atIndex: number) => {
        const newState = [
            // part of the array before the specified index
            ...pagesState.slice(0, atIndex+1),
            // inserted item
            "",
            // part of the array after the specified index
            ...pagesState.slice(atIndex+1)
        ]

        setPageState(newState)
    }

    const removePage = (atIndex: number) => {
        if (atIndex < 1) return;
        let newState = [...pagesState];
        delete newState[atIndex]
        setPageState(newState)
    }

    const setPageContent = (atIndex: number, data: string) => {
        let newState = [...pagesState];
        newState[atIndex] = data;
        setPageState(newState)
    }

    return (
        <div>
            {pagesState.map((page, index) => {
                return <DocumentPageInput
                    index={index}
                    data={page}
                    addPage={addPage}
                    removePage={removePage}
                    changePageContent={setPageContent} />
            })}
            <div>
                <DocumentPostPagePreview pages={pagesState} />
            </div>
        </div>
    );
}