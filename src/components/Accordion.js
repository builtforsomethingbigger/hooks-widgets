// THIS ACCORDION COMPONENT LEVERAGES THE {useState} HOOK AND SEMANTIC UI
// TO GIVE HOVER/DROPDOWN FUNCTIONALITY TO THE ACCORDION STYLE WIDGET

import React, { useState } from 'react'
import { render } from '@testing-library/react'

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : ''

        return (
            // use React.Fragment to remove the double border placed by Semantic UI
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}
export default Accordion