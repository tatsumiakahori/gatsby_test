import * as React from "react"
import type { PageProps } from "gatsby";
import * as styles from '../styles/components/footer.module.scss';

const Footer:  React.FC<PageProps> = () => {
    return (
        <footer className={styles.footer}>
            <p>©test工務店 All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;