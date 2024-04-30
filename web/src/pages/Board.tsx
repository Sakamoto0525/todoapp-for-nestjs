import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
// TODO: export const Boardと命名が被って気持ち悪い
import { Board as BoardModel } from "../../../prisma/client/index"

export const Board = () =>{
  const location = useLocation()
  // TODO: setBoardId は Go の _ みたいな書き方できないの
  const [boardId] = useState<{ id: number }>(location.state as { id: number })
  const [board, setBoard] = useState<BoardModel>({} as BoardModel)

  useEffect(() => {
    // TODO: const hoge = async () => { みたいな別途関数に切り出したい
    (async () => {
      // TODO: Repositoryパターンを使ってfetchBoardByIdとかに切り出したい
      const res = await axios.get(`http://localhost:3000/boards/${boardId.id}`);

      setBoard(res.data);
    })();
  }, [boardId, board])

  return (
    <div>
      <p>{ board.id }</p>
      <p>{ board.title }</p>
      <p>{ board.description }</p>
    </div>
  )
}
