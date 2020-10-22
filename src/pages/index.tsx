import React, { FunctionComponent } from 'react';
import BlogSummary from '../components/BlogSummary';
import { graphql } from 'gatsby';
import { IndexQuery } from '../../gatsby-graphql';
import { IArticleBrief } from '../models/IArticleBrief';
import PersonalInfoSide from '../components/PersonalInfoSide';
import IndexBlogDescription from '../components/BlogDescription';
import SubscribeForm from '../components/SubscribeForm';
import styled from 'styled-components';

export type Props = {
  data: IndexQuery;
};

const Index: FunctionComponent<Props> = ({ data }) => {
  const articles: IArticleBrief[] = data.allMdx.edges.map(edge => ({
    slug: edge.node.fields.blogSlug,
    description: edge.node.frontmatter.description,
    title: edge.node.frontmatter.title,
    date: new Date(edge.node.frontmatter.date).toDateString(),
    iconSrc: edge.node.frontmatter.iconSrc.childImageSharp.fixed,
  }));
  return (
    <S_Container>
      <IndexBlogDescription />
      <BlogSummary articles={articles} />
      <PersonalInfoSide />
      <SubscribeForm />
    </S_Container>
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
            iconSrc {
              childImageSharp {
                fixed(width: 38, height: 38) {
                  src
                  srcSet
                  height
                  width
                }
              }
            }
          }
          fields {
            blogSlug
          }
        }
      }
    }
  }
`;

const S_Container = styled.div`
  width: 80%;
`;

export default Index;
