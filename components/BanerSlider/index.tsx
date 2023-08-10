import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import styles from "./BanerSlider.module.scss";

interface IButtonProps {
	className?: any
	style?: any
	onClick?: any
}

interface ISliderProps {
	className?: any
}

const NextArrow: React.FC<IButtonProps> = ({ className, style, onClick }) => {
	return (
		<button
			className={classNames(className, "nextarr")}
			style={{ ...style }}
			onClick={onClick}>
			<div className={styles.nextarr__btn}>
				<span className={styles.nextarr__btnLeft}></span>
				<span className={styles.nextarr__btnRight}></span>
			</div>
		</button>
	)
}
const PrevArrow: React.FC<IButtonProps> = ({ className, style, onClick }) => {
	return (
		<button
			className={classNames(className, "prevarr")}
			style={{ ...style }}
			onClick={onClick}>
			<div className={styles.prevarr__btn}>
				<span className={styles.prevarr__btnLeft}></span>
				<span className={styles.prevarr__btnRight}></span>
			</div>
		</button>
	)
}

const BanerSlider: React.FC<ISliderProps> = ({ className }) => {
	const settings = {
		centerMode: true,
		centerPadding: "1px",
		dots: false,
		adaptiveHeight: true,
		accessibility: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		initialSlide: 0,
	}

	return (
		<div>
			<Slider 
				{...settings} 
				className={classNames(className, "banerSlider")}
			>
				<div>
					<Image
						src='/images/baner-slider-4.webp'
						alt='baner'
						width={1440}
						height={940}
						objectFit='cover'
					/>
					<div className={styles.banner__content}>
						<div className={styles.banner__textCenter}>
							<h1 className={styles.banner__title}>
								Наша команда
							</h1>
							<p className={styles.banner__subtitle}>
								«На что ты готов чтобы стать частью нашей компании?»
							</p>
							<span className={styles.banner__text}>
								HR-отдел
							</span>
							<span className={styles.banner__text}>
								Арнаутовская Валерия, Гарифуллина Розалина, Ратгольц Инна
							</span>
						</div>
					</div>
				</div>
				<div>
					<Image
						src='/images/baner-slider-1.webp'
						alt='baner'
						width={1440}
						height={940}
						objectFit='cover'
					/>
					<div className={styles.banner__content}>
						<div className={styles.banner__textCenter}>
							<h1 className={styles.banner__title}>
								Наша команда
							</h1>
							<p className={styles.banner__subtitle}>
								«Слыш, а ты точно опытный специалист?»
							</p>
							<span className={styles.banner__text}>
								Руководители проектного офиса
								</span>
							<span className={styles.banner__text}>
								Шевелева Дарья, Валерия Козлова
							</span>
						</div>
					</div>
				</div>
				<div>
					<Image
						src='/images/baner-slider-2.webp'
						alt='baner'
						width={1440}
						height={940}
						objectFit='cover'
					/>
					<div className={styles.banner__content}>
						<div className={styles.banner__textCenter}>
							<h1 className={styles.banner__title}>
								Наша команда
							</h1>
							<p className={styles.banner__subtitle}>
								«Твои баги за версту видно»
							</p>
							<span className={styles.banner__text}>
								Отдел тестирования
								</span>
							<span className={styles.banner__text}>
								Фоменко Иван, Годлевская Дарья, Стерхова Дарья, Цыбина Ирина, Кузнецов Сергей
							</span>
						</div>
					</div>
				</div>
				<div>
					<Image
						src='/images/baner-slider-5.webp'
						alt='baner'
						width={1440}
						height={940}
						objectFit='cover'
					/>
					<div className={styles.banner__content}>
						<div className={styles.banner__textCenter}>
							<h1 className={styles.banner__title}>
								Наша команда
							</h1>
							<p className={styles.banner__subtitle}>
								«Мы попробуем тебя продать, но это будет сложно»
							</p>
							<span className={styles.banner__text}>
								Маркетинг и диджитал продвижение
							</span>
							<span className={styles.banner__text}>
								Вахлова Наталия, Савченко Дарья, Сотников Виктор
							</span>
						</div>
					</div>
				</div>
				<div>
					<Image
						src='/images/baner-slider-3.webp'
						alt='baner'
						width={1440}
						height={940}
						objectFit='cover'
					/>
					<div className={styles.banner__content}>
						<div className={styles.banner__textCenter}>
							<h1 className={styles.banner__title}>
								Наша команда
							</h1>
							<p className={styles.banner__subtitle}>
								«А ты готов держать темп?»
							</p>
							<span className={styles.banner__text}>
								Бессменное руководство компании
							</span>
							<span className={styles.banner__text}>
								Кириенко Алексей и Ходак Екатерина
							</span>
						</div>
					</div>
				</div>
			</Slider>
		</div>
	)
}

export default BanerSlider;
