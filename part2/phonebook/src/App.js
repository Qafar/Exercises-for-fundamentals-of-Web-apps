import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const notes = [
    {
      id: 1,
      content: 'HTML is easy',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      important: true
    }
  ]

  // return (
  //   <div>
  //     <h1>Notes</h1>
  //     <ul>
  //       <li>{notes[0].content}</li>
  //       <li>{notes[1].content}</li>
  //       <li>{notes[2].content}</li>
  //     </ul>
  //   </div>
  // )

  return (
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map(note =>
              <Note key={note.id} note={note.content} />
          )}
        </ul>
      </div>
  )
}

export default App