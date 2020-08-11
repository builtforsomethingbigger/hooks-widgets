//GOOGLE TRANSLATE API KEY WILL ONLY WORK ON LOCALHOST:3000

import React, { useState, useEffect } from 'react'

const Convert = ({ language, text }) => {

    useEffect(() => {
        console.log('New Language or Text')
    }, [language, text])

    return(
        <div>Convert</div>
    )
}
export default Convert