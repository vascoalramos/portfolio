import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const SEO = ({ data }) => {
  const metaDescription = data.description;
  const metaImage = `${data.siteUrl}/${data.imageShare}`;
  const lang = data.lang;

  return (
    <Helmet
      htmlAttributes={{lang}}
      title={data.title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: 'og:url',
          content: data.siteUrl,
        },
        {
          property: `og:title`,
          content: data.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },

        {
          property: 'og:image',
          content: metaImage,
        },
      ]}
    />
  );
};

SEO.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SEO;
