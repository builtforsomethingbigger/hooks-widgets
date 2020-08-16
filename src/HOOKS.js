import React, { useState } from 'react'


const [display, setDisplay] = useState(true)

return (
    <div>
        <button onClick={() => setDisplay(!display)}>
            Click Me
        </button>
        <div style={{display: display ? "block" : "none"}}>
            {/* PIECE OF CONTENT */}
        </div>
    </div>
)


