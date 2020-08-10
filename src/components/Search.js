// THIS IS A WIKI SEARCH COMPONENT THAT LEVERAGES THE {useState} AND
// {useEffect} HOOKS TO DETECT WHEN 'TERM' HAS CHANGED
// IT ALSO PULLS FROM THE WIKI API


import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {

    const [term, setTerm] = useState('programming')
    const [results, setResults] = useState([])

    useEffect(() => {
    //useEffect does not allow for async to be declared in the main argument
    //in order to work around this, you must use a helper method and call async
        //within that method:
        const search = async() => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                },
            })
            setResults(data.query.search)
        }
        if (term) {
            search()
        }
    }, [term])

    //or you can simplify it:
        // (async() => {
        //     const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        //         params: {
        //             action: 'query',
        //             list: 'search',
        //             origin: '*',
        //             format: 'json',
        //             srsearch: term
        //         },
        //     })
        //     setResults(data.query.search)
        // })()
                


                const renderedResults = results.map((result) => {
                    return(
                        <div key={result.pageid} className="item">
                            <div className="right floated content">
                                <a className="ui button" target="_blank" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                            </div>
                            <div className="content">
                                <div className="header">{result.title}</div>
                                    {/* {result.snippet} will return the data along with HTML tags (ie: <span>, <p>) */}
                                    {/* To resolve this, we use the "dangerouslySetInnerHTML" property */}
                                <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                                    {/* BEWARE: using the dagnerouslySetInnerHTML property on JSX can introduce Cross-Site Scripting Attacks */}
                                    {/* Mitigate your risk - Make sure your HTML source is trustworthy!!! */}
                            </div>
                        </div>
                    )
                })

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
            <div className="ui celled list">{renderedResults}</div>
        </div>
    )
}
export default Search