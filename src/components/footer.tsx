import * as React from "react"
import type { PageProps } from "gatsby";

const Footer:  React.FC<PageProps> = () => {
    return (
        <footer style={{textAlign: 'center'}}>
            <p>©marumaru工務店 All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;