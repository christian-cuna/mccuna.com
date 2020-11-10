import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

import { SiteMetadataQuery } from '../../../gatsby-graphql';

export type Props = {
  description: string;
  title: string;
};

const SEO: FunctionComponent<Props> = ({ description, title }) => {
  const { site }: SiteMetadataQuery = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang: 'en-US' }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        { name: 'description', content: metaDescription },
        { name: 'og:title', content: metaDescription },
        { name: 'og:description', content: metaDescription },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: site.siteMetadata.author },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: metaDescription },
      ]}
    />
  );
};

export default SEO;
