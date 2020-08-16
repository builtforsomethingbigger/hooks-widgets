import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Korean',
        value: 'kor'
    },
    {
        label: 'Spanish',
        value: 'es'
    }
]

const Translate = () => {

    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')

    return(
        <div id="Main">
            <div className="ui form">
                <div className="field">
                    <label>ENTER TEXT</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown 
                label="SELECT A LANGUAGE"
                options={options} 
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr/>
            <h3 className="ui header">OUTPUT:</h3>
            <Convert 
                text={text}
                language={language}
            />
        </div>
    )
}
export default Translate