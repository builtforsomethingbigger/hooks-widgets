// THIS IS A WIKI SEARCH COMPONENT THAT LEVERAGES THE {useState} AND
// {useEffect} HOOKS TO DETECT WHEN 'TERM' HAS CHANGED
// IT ALSO PULLS FROM THE WIKI API


import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {

    const [term, setTerm] = useState('')

    useEffect(() => {
        //useEffect does not allow for async to be declared in the main argument
        //in order to work around this, you must use a helper method and call async
            //within that method:
                //const search = async() => {
                    //await axios.get()
                //}, [term])
                //search()

            //or you can simplify it:
                (async() => {
                    await axios.get('https://en.wikipedia.org/w/api.php', {
                        params: {
                            action: 'query',
                            list: 'search',
                            origin: '*',
                            format: 'json',
                            srsearch: term
                        }
                    })
                })()
                }, [term])

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}
export default Search