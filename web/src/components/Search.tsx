import { TextField, Button } from "@mui/material";
import { useState } from "react";

type Props = {
  onClick?: (text: string) => void;
}

export const Search = (props: Props) => {
  const [text, setText] = useState<String>('');

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const test = () => {
    props.onClick(text)
  }

  return (
    <div>
      <TextField 
        id="outlined-basic" 
        label="Outlined" 
        variant="outlined" 
        onChange={change}/>
      <p>{ text }</p>
      <Button variant="text" onClick={test}>検索</Button>
    </div>
  );
}
