import React from 'react'

const EmbedVideo = (props: any) => {
  const width = (props.width) ? props.width : '100%'
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <video
            loop
            muted
            autoplay
            playsinline
            src="${props.src}"
            width="${width}"
          />,
        `
      }}
      ></div>
  )
}

export default EmbedVideo
