import React from 'react'
import { render } from '@testing-library/react'

const Accordion = ({ items }) => {

    const renderedItems = items.map(item => {
        return (
            // use React.Fragment to remove the double border placed by Semantic UI
            <React.Fragment key={item.title}>
                <div className="title active">
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
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