import { atom } from 'recoil';

export const scoreState = atom<number>({
    key: 'score',
    default: 0,
  });
  
export const levelState = atom<"EASY" | "NORMAL" | "HARD">({
    key: 'level',
    default: 'EASY',
  });

export const resetClickedState = atom<boolean>({
    key: 'resetClicked',
    default: false,
  });

export const showModalState = atom({
    key: 'showModal',
    default: false,
  });
  