import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

interface PageButtonProps {
  add: () => void,
  remove: () => void
}
export default function PageButtons(props: PageButtonProps) {
  return (
    <ButtonGroup disableElevation variant="outlined">
      <Button startIcon={<AddIcon/>} onClick={props.add}></Button>
      <Button startIcon={<RemoveIcon/>} onClick={props.remove}></Button>
    </ButtonGroup>
  );
}
