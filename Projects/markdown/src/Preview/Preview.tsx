import React from 'react'
import './preview.css'

import marked from 'marked'
import createDOMPurify from "dompurify"

interface IPreview {
  textValue: string
}

const DOMPurify = createDOMPurify()

export const Preview: React.FC<IPreview> = ({ textValue }) => {
  const markedText = marked(textValue)
  var cleanedText = DOMPurify.sanitize(markedText)

  return (
    <article id="preview__cell">
      <p>Preview</p>
      <section id="preview" dangerouslySetInnerHTML={ createMarkup() } >
      </section>
    </article>
  )

  function createMarkup () {
    return { __html: cleanedText };
  }
}
