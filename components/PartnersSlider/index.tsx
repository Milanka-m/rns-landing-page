import classNames from "classnames"
import React from "react"
import Slider from "react-slick"
import Image from "next/image"
import styles from "./PartnersSlider.module.scss"

interface IButtonProps {
	className?: any
	style?: any
	onClick?: any
}

interface ISliderProps {
	className?: any
}

const PartnersSlider: React.FC<ISliderProps> = ({ className }) => {
	const settings = {
		dots: false,
		adaptiveHeight: true,
		accessibility: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 7,
		slidesToScroll: 1,
		arrows: false,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<div className={styles.slider}>
			<Slider 
				{...settings} 
				className={classNames(className, "partnersSlider")}
			>
				<div className={classNames(className, "partnersSlider__slide")}>
					<Image
						src='/images/partners-logo-1.webp'
						alt='partners'
						width={140}
						height={140}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-logo-2.webp'
						alt='partners'
						width={140}
						height={140}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-logo-3.webp'
						alt='partners'
						width={140}
						height={140}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-logo-4.webp'
						alt='partners'
						width={140}
						height={140}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-logo-5.webp'
						alt='partners'
						width={140}
						height={140}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-logo-6.webp'
						alt='partners'
						width={140}
						height={140}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-logo-7.webp'
						alt='partners'
						width={140}
						height={140}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-logo-9.webp'
						alt='partners'
						width={140}
						height={140}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-logo-10.webp'
						alt='partners'
						width={140}
						height={140}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-logo-11.webp'
						alt='partners'
						width={140}
						height={140}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-logo-12.webp'
						alt='partners'
						width={140}
						height={140}
						objectFit='contain'
					/>
				</div>
			</Slider>
		</div>
	)
}

export default PartnersSlider
