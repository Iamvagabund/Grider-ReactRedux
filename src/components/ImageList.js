import React from 'react'
import ImageShow from './ImageShow'

const ImageList = ({images}) => {
  const renderedImages = images.map((image, id) => {
    return <ImageShow image={image} key={id}/>
  })

  return (
    <div>
      {renderedImages}
    </div>
  )
}

export default ImageList