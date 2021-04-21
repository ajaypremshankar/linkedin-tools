import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


interface DocumentPostPreviewProps {
  pages: string[]
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DocumentPostPagePreview(props: DocumentPostPreviewProps) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      {props.pages.map((page) => <DocumentPostPage data={page} /> )}
    </div>
  );
}

interface DocumentPostPageProps {
  data: string
}

function DocumentPostPage(props: DocumentPostPageProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.data}
        </Typography>
      </CardContent>
    </Card>
  );
}
