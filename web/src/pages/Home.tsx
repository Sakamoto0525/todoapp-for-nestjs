import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from '@mui/material';
import { getBoards } from "../reactQuery/api/baord/useQuery";
import { BoardSearchQuery } from "../reactQuery/types/searchQuery";
import { Board } from "../../../prisma/client";
import { Search } from "../components/Search";

type Props = {
  message: string
}

export const Home = (props: Props) => {
  const navigate = useNavigate();
  const [res, setRes] = useState<Board[]>([]);
  const [text, setText] = useState<String>('');

  useEffect(() => {
    (async() => {
      try{
        const data = await getBoards({} as BoardSearchQuery);
        setRes(data);
      } catch(error: any){
        console.error(error);
      }
    })();
  }, [])

  const UpdateText = (text: string) => {
    setText(text)
  }

  return (
    <div>
      <Search onClick={UpdateText}/>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        { res.map((item: any) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={item?.id}>
              <Button 
                color='success' 
                onClick={() => navigate('/board', { state: { id: item.id }})}
              >{item.title}</Button>
            </Grid>
          )
        })}
      </Grid>
      <p>{ props.message }</p>
      <button onClick={() => navigate('/todo')}>Todo</button>
    </div>
  )
}
