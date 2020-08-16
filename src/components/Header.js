import React from 'react'
import Link from './Link'

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link href="/" className="item onHover blue">
                INFO MENU
            </Link>
            <Link href="/search" className="item onHover blue">
                SEARCH
            </Link> 
            <Link href="/dropdown" className="item onHover blue">
                DROPDOWN
            </Link> 
            <Link href="/translate" className="item onHover blue">
                TRANSLATE
            </Link>     
        </div>
    )
}
export default Header