    sequenceDiagram
    participant browser
    participant server
    participant database

    browser->>browser: The user writes something into the text field to create a new note
    browser->>browser: The user clicks the "Submit" button
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server->>database: The server saves the new note to the database
    activate database
    database-->>server: The ID of the note saved to the database
    deactivate database
    server-->>browser: The server sends the ID of the new note
    deactivate server
    browser->>browser: The browser receives the ID of the new note and reloads the HTML page to show all the notes
