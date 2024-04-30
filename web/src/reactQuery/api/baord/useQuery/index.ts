import { BoardSearchQuery } from '../../../types/searchQuery';
import axios from 'axios';
import { Board } from '../../../../../../prisma/client/index';

// TODO: ReactQueryを利用する
export const getBoards = async (query: BoardSearchQuery): Promise<Board[]> => {
  const { data } = await axios.get('http://localhost:3000/boards', {
    params: query,
  });
  return data as Board[];
};
