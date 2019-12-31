import React from 'react'
import './preview.css'

interface IPreview {
  textValue: string
}

export const Preview: React.FC<IPreview> = ({ textValue }) => {
  return (
    <article id="preview__cell">
      <label htmlFor="preview">Preview</label>
      <textarea
        name="preview" id="preview"
        cols={ 80 } rows={ 30 }
        readOnly
        value={ textValue }
      >
      </textarea>
    </article>
  )
}
