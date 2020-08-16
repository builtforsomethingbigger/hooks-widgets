import React from 'react'
import Link from './Link'

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link href="/" className="item nav blue">
                INFO MENU
            </Link>
            <Link href="/search" className="item nav blue">
                SEARCH
            </Link> 
            <Link href="/dropdown" className="item nav blue">
                DROPDOWN
            </Link> 
            <Link href="/translate" className="item nav blue">
                TRANSLATE
            </Link>     
        </div>
    )
}
export default Header