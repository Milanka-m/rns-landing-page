import React from "react";
import Link from "next/link";
import Image from "next/image"
import styles from "./Header.module.scss";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__navContainer}>
				<Link href='/'>
					<a className={styles.header__imgLink}>
						<Image
							src='/images/logo.webp'
							alt='logo'
							width={170}
							height={66}
						/>
					</a>
				</Link>
				<nav className={styles.header__nav}>
					<Link href="mailto:mailbox@runetsoft.ru">
						<a className={styles.header__navLink}>
							mailbox@runetsoft.ru
						</a>
					</Link>
					<ul className={styles.header__socialLinks}>
						<li>
							<a
								href='https://vk.com/runetsoft_official'
								className={styles.header__imgLink}
								target='_blank'
								rel='noopener noreferrer'>
								<Image
									src='/images/vk.webp'
									alt='vk-icon'
									width={24}
									height={24}
								/>
							</a>
						</li>
						<li>
							<a
								href='https://www.linkedin.com/company/2771998'
								className={styles.header__imgLink}
								target='_blank'
								rel='noopener noreferrer'>
								<Image
									src='/images/linkedin.webp'
									alt='linkedin-icon'
									width={20}
									height={20}
								/>
							</a>
						</li>
						<li>
							<a
								href='https://www.youtube.com/channel/UCCf3SWx2BYYUfPX2fUiKaeg'
								className={styles.header__imgLink}
								target='_blank'
								rel='noopener noreferrer'>
								<Image
									src='/images/youtube.webp'
									alt='youtube-icon'
									width={30}
									height={27}
								/>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header;