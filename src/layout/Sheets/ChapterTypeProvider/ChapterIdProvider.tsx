import React, { createContext, useContext } from "react";

const ChapterIdContext = createContext<string>("");

export const useChapterIdContext = () => useContext(ChapterIdContext);

interface Props {
  id: string;
  children: React.ReactNode;
}
const ChapterIdProvider = ({ id, children }: Props) => {
  return (
    <ChapterIdContext.Provider value={id}>{children}</ChapterIdContext.Provider>
  );
};

export default ChapterIdProvider;
