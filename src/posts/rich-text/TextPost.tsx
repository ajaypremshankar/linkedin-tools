import React, { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import toUnicode from '../../utils/to-unicode';
import 'emoji-mart/css/emoji-mart.css'
import EmojiDialog from '../emoji/emoji-dialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default function TextPost() {
  var letters = /^[A-Za-z]{1}$/;
  const classes = useStyles();
  const [value, setValue] = React.useState({
    content: [''],
    cursor: 0
  });

  const inputRef = React.useRef<HTMLInputElement>();
  const updateSelectionStart = () => {
    if(inputRef) {
      setValue({...value, cursor: inputRef.current.selectionStart});
      console.log(value.cursor)
    }
  }

  useEffect(() => {
    console.log(value.cursor)
    const arr = value.content.slice(0, value.cursor);
    inputRef.current.selectionStart = arr.join('').length;
    inputRef.current.selectionEnd = arr.join('').length;
  }, [value.content])

  const [formats, setFormats] = React.useState(() => ['']);

  const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key.match(letters)) {
      const unicody = toUnicode(event.key, {bold: formats.includes('bold'), italic: formats.includes('italic')})
      let newValue = [...value.content];
      newValue.splice( value.cursor, 0, unicody )
      setValue({...value, content: newValue, cursor: value.cursor+1})
      event.preventDefault();
    } 
  }

  const setArrayValue = (s: string) => {
    const retVal = [];
    
    for (const ch of s) {
      retVal.push(ch);
    }
    
    setValue({...value, content: retVal})
  }

  const addEmoji = (emoji: string) => {
    let newValue = [...value.content];
    newValue.splice( value.cursor, 0, emoji )
    setValue({...value, content: newValue, cursor: value.cursor+1})
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <div>
          <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="text formatting">
            <ToggleButton value="bold" aria-label="bold"><FormatBoldIcon /></ToggleButton>
            <ToggleButton value="italic" aria-label="italic"><FormatItalicIcon /></ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined"><FormatUnderlinedIcon /></ToggleButton>
            <ToggleButton value="strikethrough" aria-label="strikethrough"><StrikethroughSIcon /></ToggleButton>
            {/**<Button>{ showEmoji ? <div style={{position: 'absolute', clear:'both'}}><EmojiPicker/></div> : <InsertEmoticonIcon onClick={() => setShowEmoji(true)}/> } </Button>*/}
            <EmojiDialog onSelect={addEmoji}/>
          </ToggleButtonGroup>
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={12}
            fullWidth
            onKeyPress={(e) => handleKeyPress(e)}
            onChange={(event) => setArrayValue(event.target.value)}
            onSelect={updateSelectionStart}
            inputRef={inputRef}
            value={value.content.join('')}
            style = {{width: '50%'}}
            variant="outlined"
          />
        </div>
      </div>
    </form>
  );
}
