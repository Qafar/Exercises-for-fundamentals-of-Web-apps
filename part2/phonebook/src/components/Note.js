
const Note = ({note, key}) => {
    return (
        <div>
            {notes.map((content, key) =>
                <li key={key}>
                    {content}
                </li>
            )}
        </div>
    )
}

export default Note