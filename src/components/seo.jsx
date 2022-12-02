import React from 'react';
import PropTypes from 'prop-types';

const SEO = ({ data }) => {
  const metaDescription = data.description;
  const metaImage = `${data.siteUrl}/${data.imageShare}`;

  return (
    <>
      <title>{data.title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="og:url" content={data.siteUrl} />
      <meta name="og:title" content={data.title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:image" content={metaImage} />
      <meta name="og:type" content="website" />
    </>
  );
};

SEO.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};

export default SEO;
