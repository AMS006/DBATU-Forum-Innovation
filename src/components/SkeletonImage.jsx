import React from 'react'
import ContentLoader from 'react-content-loader';


const SkeletonImage = ({height,width}) => {
  return (
    <ContentLoader width={width} height={height}>
      <rect x="0" y="0" rx="5" ry="5" width={'100%'} height={'100%'} />
    </ContentLoader>
  )
}

export default SkeletonImage