    sequenceDiagram
    participant browser
    participant server

    browser->>browser: User writes new note content
    browser->>browser: User clicks submit button
    Note right of browser: The browser sends a POST request to the server with the new note data

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa, {"content": "New note content"}
    activate server
    server-->>browser: Status code 201 Created
    deactivate server

    Note right of browser: The browser executes the callback function that adds the new note to the list of notes
