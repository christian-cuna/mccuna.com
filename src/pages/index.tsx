import React, { FunctionComponent } from 'react';
import ThirdPersonDescription from '../components/ThirdPersonDescription';
import BlogSummary from '../components/BlogSummary';
import { graphql } from 'gatsby';
import { IndexQuery } from '../../gatsby-graphql';
import { IArticleBrief } from '../models/IArticleBrief';

export type Props = {
  data: IndexQuery;
};

const Index: FunctionComponent<Props> = ({ data }) => {
  const articles: IArticleBrief[] = data.allMdx.edges.map(edge => ({
    slug: edge.node.fields.blogSlug,
    description: edge.node.frontmatter.description,
    title: edge.node.frontmatter.title,
    date: new Date(edge.node.frontmatter.date).toDateString(),
  }));
  return (
    <>
      <BlogSummary articles={articles} />
      <ThirdPersonDescription />
    </>
  );
};

export const query = graphql`
  query Index {
    allMdx(limit: 5, sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
            description
          }
          fields {
            blogSlug
          }
        }
      }
    }
  }
`;

export default Index;
