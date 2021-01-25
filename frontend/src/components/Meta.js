import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Homey',
  description: 'Meet the best homeopaths',
  keywords: 'homeopathy, online homeopathy, cheap homeopathy, homeopaths',
}

export default Meta
