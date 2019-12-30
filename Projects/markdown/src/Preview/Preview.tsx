import React from 'react'
import './preview.css'

interface IPreview {

}

export const Preview: React.FC<IPreview> = () => {
  return (
    <article id="preview">
      <label htmlFor="preview">Preview</label>
      <textarea
        name="preview" id="preview"
        cols={ 80 } rows={ 30 }
        readOnly></textarea>
    </article>
  )
}
