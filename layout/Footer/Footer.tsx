import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.footer__copyright}>
				&copy; {new Date().getFullYear()} <span>РуНетСофт</span>
				{" "} Все права защищены.
			</p>
		</footer>
	)
}

export default Footer;