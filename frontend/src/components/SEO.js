import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, canonical, robots = 'index, follow', children }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {robots && <meta name="robots" content={robots} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {children}
    </Helmet>
  );
};

export default SEO;
