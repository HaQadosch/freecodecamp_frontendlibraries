import React from 'react'
import './editor.css'

interface IEditor {
  textValue: string
  updateAction: React.Dispatch<React.SetStateAction<string>>
}

export const Editor: React.FC<IEditor> = ({ textValue, updateAction }) => {
  return (
    <article id="markdown__cell">
      <label htmlFor="editor">Markdown</label>
      <textarea
        name="editor" id="editor"
        cols={ 80 } rows={ 30 }
        placeholder='Your Markdown Text Here.'
        value={ textValue }
        onChange={ handleChange }>
      </textarea>
    </article >
  )

  function handleChange ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>): void {
    if (value !== null) {
      updateAction(value)
    }
  }
}
