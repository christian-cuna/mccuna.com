import React, { FunctionComponent, useContext } from 'react';
import { IArticle } from '../models/IArticle';

const ArticleContext = React.createContext(null);

export type ArticleContextProvderProps = {
  article: IArticle;
};

export const ArticleContextProvder: FunctionComponent<ArticleContextProvderProps> = ({
  children,
  article,
}) => {
  return (
    <ArticleContext.Provider value={article}>
      {children}
    </ArticleContext.Provider>
  );
};

export type ArticleContext = {
  article: IArticle;
};

export const useArticleContext = (): ArticleContext => {
  const article = useContext(ArticleContext);
  return { article };
};
