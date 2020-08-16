import React from 'react'
import Link from './Link'

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link href="/" className="item onHover">
                INFO MENU
            </Link>
            <Link href="/search" className="item onHover">
                SEARCH
            </Link> 
            <Link href="/dropdown" className="item onHover">
                DROPDOWN
            </Link> 
            <Link href="/translate" className="item onHover">
                TRANSLATE
            </Link>     
        </div>
    )
}
export default Header