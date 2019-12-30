import React from 'react'
import './editor.css'

interface IEditor {

}
const ipsum = 'Nothing of value comes to you without fucking working at it. To go partway is easy, but mastering anything requires hard fucking work. This design is fucking brilliant. Design is all about fucking relationships—the relationship of form and content, the relationship of elements, the relationship of designer and user. You are not your fucking work. Practice won’t get you anywhere if you mindlessly fucking practice the same thing. Change only occurs when you work deliberately with purpose toward a goal. You are not your fucking work. You need to sit down and sketch more fucking ideas because stalking your ex on facebook isn’t going to get you anywhere.'

export const Editor: React.FC<IEditor> = () => {
  return (
    <article>
      <label htmlFor="editor">Markdown</label>
      <textarea
        name="editor" id="editor"
        cols={ 80 } rows={ 30 }
        placeholder='Your Markdown Text Here.'>
      </textarea>
    </article >
  )
}
