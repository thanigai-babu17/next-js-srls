import Image from "next/image";
import BackgroundHero from "../public/images/hero-bg.png";
import startsWithBG from "../public/images/process-bg.jpg";
import processBg from "../public/images/process-bg.jpg";

export default function Home() {
	const clientImages = [
		"/images/client-logo1.png",
		"/images/client-logo2.png",
		"/images/client-logo3.png",
		"/images/client-logo4.png",
		"/images/client-logo5.png",
		"/images/client-logo6.png",
		"/images/client-logo7.png",
		"/images/client-logo8.png",
		"/images/client-logo9.png",
		"/images/client-logo10.png",
	];

	return (
		<main>
			<header className="header">
				<nav className="nav-bar flex flex-ai-c flex-jc-sb">
					<div className="brand-logo">
						<svg width="259" height="61" viewBox="0 0 259 61" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0)">
								<path
									d="M39.1775 20.2732C35.7019 18.2666 34.4566 13.751 36.4873 10.2335C38.494 6.75797 43.0096 5.51263 46.527 7.54342C50.0025 9.55003 51.2479 14.0656 49.2171 17.5831C47.1863 21.1005 42.6949 22.304 39.1775 20.2732Z"
									fill="white"
								/>
								<path
									d="M94.2671 32.6094C100.094 22.5177 96.5893 9.43974 86.4976 3.6133C76.3641 -2.23731 63.328 1.29109 57.5016 11.3828L41.9805 38.266C41.9805 38.266 81.1153 55.3889 94.2671 32.6094Z"
									fill="white"
								/>
								<path
									d="M7.39788 30.1124C3.3363 37.1473 5.73677 46.2381 12.7716 50.2996C19.8065 54.3612 28.8554 51.9366 32.917 44.9017L43.7237 26.1839C43.7656 26.2081 16.5364 14.284 7.39788 30.1124ZM18.2113 40.8779C16.3688 39.8142 15.7317 37.4364 16.7954 35.5939C17.8592 33.7514 20.237 33.1143 22.0794 34.1781C23.9219 35.2418 24.559 37.6196 23.4953 39.4621C22.4734 41.3287 20.0956 41.9659 18.2113 40.8779Z"
									fill="white"
								/>
								<path
									d="M113.773 36.7147C112.304 35.8887 111.111 34.7872 110.285 33.3186C109.459 31.8501 109 30.2897 109 28.454C109 26.6183 109.459 25.0579 110.285 23.5893C111.111 22.1207 112.304 21.0193 113.773 20.1932C115.241 19.3671 116.894 19 118.821 19C120.29 19 121.666 19.2754 122.951 19.8261C124.237 20.3768 125.246 21.1111 126.072 22.1207L123.869 24.2318C122.584 22.7632 120.932 22.1207 119.005 22.1207C117.72 22.1207 116.618 22.3961 115.609 22.9468C114.599 23.4975 113.865 24.2318 113.314 25.2415C112.763 26.2511 112.488 27.3525 112.488 28.5458C112.488 29.739 112.763 30.9322 113.314 31.8501C113.865 32.8597 114.691 33.594 115.609 34.1447C116.618 34.6954 117.72 34.9708 119.005 34.9708C120.932 34.9708 122.584 34.2365 123.869 32.7679L126.072 34.879C125.246 35.8887 124.145 36.6229 122.951 37.1737C121.666 37.7244 120.29 37.9997 118.821 37.9997C116.985 37.9997 115.241 37.5408 113.773 36.7147Z"
									fill="white"
								/>
								<path
									d="M132.497 36.7147C131.029 35.8887 129.835 34.7872 128.917 33.3186C128.091 31.8501 127.632 30.2897 127.632 28.454C127.632 26.71 128.091 25.0579 128.917 23.5893C129.744 22.1207 130.937 21.0193 132.497 20.1932C133.966 19.3671 135.71 19 137.545 19C139.381 19 141.125 19.3671 142.594 20.1932C144.062 21.0193 145.255 22.1207 146.173 23.5893C146.999 25.0579 147.458 26.6183 147.458 28.454C147.458 30.2897 146.999 31.8501 146.173 33.3186C145.347 34.7872 144.154 35.8887 142.594 36.7147C141.125 37.5408 139.381 37.9079 137.545 37.9079C135.618 37.9997 133.966 37.5408 132.497 36.7147ZM140.85 34.1447C141.859 33.594 142.594 32.8597 143.144 31.8501C143.695 30.8404 143.97 29.739 143.97 28.5458C143.97 27.3525 143.695 26.2511 143.144 25.2415C142.594 24.2318 141.859 23.4975 140.85 22.9468C139.84 22.3961 138.739 22.1207 137.545 22.1207C136.352 22.1207 135.251 22.3961 134.241 22.9468C133.231 23.4975 132.497 24.2318 131.946 25.2415C131.396 26.2511 131.12 27.3525 131.12 28.5458C131.12 29.739 131.396 30.8404 131.946 31.8501C132.497 32.8597 133.231 33.594 134.241 34.1447C135.251 34.6954 136.352 34.9708 137.545 34.9708C138.739 34.9708 139.84 34.6954 140.85 34.1447Z"
									fill="white"
								/>
								<path
									d="M167.834 37.7254V25.6096L161.777 35.7061H160.216L154.158 25.7932V37.8172H150.946V19.46H153.791L161.042 31.5757L168.202 19.46H171.047V37.8172H167.834V37.7254Z"
									fill="white"
								/>
								<path
									d="M187.752 20.1943C188.945 20.745 189.863 21.4793 190.506 22.4889C191.148 23.4986 191.423 24.6 191.423 25.9768C191.423 27.2618 191.148 28.455 190.506 29.4647C189.863 30.4743 188.945 31.2086 187.752 31.7593C186.559 32.31 185.182 32.5854 183.622 32.5854H179.491V37.909H176.095V19.5518H183.622C185.182 19.3682 186.559 19.6435 187.752 20.1943ZM186.742 28.6386C187.477 27.9961 187.936 27.0782 187.936 25.9768C187.936 24.7836 187.568 23.8657 186.742 23.315C186.008 22.6725 184.815 22.3971 183.346 22.3971H179.4V29.6482H183.346C184.907 29.5564 186.008 29.1893 186.742 28.6386Z"
									fill="white"
								/>
								<path
									d="M205.743 33.5042H196.564L194.729 37.7264H191.241L199.501 19.3691H202.898L211.158 37.7264H207.579L205.743 33.5042ZM204.642 30.8424L201.154 22.857L197.758 30.8424H204.642Z"
									fill="white"
								/>
								<path
									d="M229.79 19.3691V37.7264H226.944L216.848 25.3352V37.7264H213.452V19.3691H216.297L226.394 31.7603V19.3691H229.79Z"
									fill="white"
								/>
								<path
									d="M242.641 31.2086V37.6336H239.245V31.2086L232.085 19.2764H235.757L241.08 28.1796L246.496 19.2764H249.892L242.641 31.2086Z"
									fill="white"
								/>
							</g>
							<defs>
								<clipPath id="clip0">
									<rect width="259" height="61" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<div className="header__links hide-for-pad">
						<a href="">Home</a>
						<a href="">Our process</a>
						<a href="">Our works</a>
						<a href="">Testimonials</a>
					</div>
					<a href="" className="cta-btn hide-for-pad">
						Get started
					</a>
				</nav>
			</header>
			<section className="hero" style={{ backgroundImage: `url(${BackgroundHero.src})` }}>
				<div className="container container--pt container--px">
					<div className="hero__text container--pt">
						<h1>A Digital Product Design Agency</h1>
						<p>We are Creative and Professional Digital Agency</p>
						<a href="" className="cta-btn">
							Get started
						</a>
					</div>
				</div>
				<div className="hero__image container--pb container--px">
					<div>
						<Image src="/images/hero-img.png" width={1187} height={900} priority />
					</div>
				</div>
			</section>
			<section className="features">
				<div className="container container--pb container--px">
					<div className="section-tag">features</div>
					<div className="features__text">
						<h2>We are here to help you with</h2>
					</div>
					<div className="feature-grid">
						<div className="feature-item">
							<div className="feature-item__icon">
								<Image src="/images/features-icon1.svg" width={50} height={50} />
							</div>
							<div className="feature-item__title">Grow your business</div>
							<div className="feature-item__descrp">
								The magic wand for success is in figuring out how to bring in the profits and ensure the capacity needed
								to sustain that growth for posterity.
							</div>
						</div>
						<div className="feature-item">
							<div className="feature-item__icon">
								<Image src="/images/features-icon2.svg" width={50} height={50} />
							</div>
							<div className="feature-item__title">Drive more sales</div>
							<div className="feature-item__descrp">
								A potential customer, once lost, is hard to retain back. But keeping some critical factors in mind, we
								can, for sure, use these loyalty programs as customer retention tools.
							</div>
						</div>
						<div className="feature-item">
							<div className="feature-item__icon">
								<Image src="/images/features-icon3.svg" width={50} height={50} />
							</div>
							<div className="feature-item__title">Handle by Expert</div>
							<div className="feature-item__descrp">
								We know how we candevelop deep, trust-based relationships with our clients, and work together more
								collaboratively
							</div>
						</div>
						<div className="feature-item">
							<div className="feature-item__icon">
								<Image src="/images/features-icon4.svg" width={50} height={50} />
							</div>
							<div className="feature-item__title">UX Research</div>
							<div className="feature-item__descrp">
								UX research is the systematic study of target users and their requirements, to add realistic contexts
								and insights to design processes.
							</div>
						</div>
						<div className="feature-item">
							<div className="feature-item__icon">
								<Image src="/images/features-icon4.svg" width={50} height={50} />
							</div>
							<div className="feature-item__title">Business Audit</div>
							<div className="feature-item__descrp">
								An audit examines your business's financial records to verify they are accurate. This is done through a
								systematic review of your transactions.
							</div>
						</div>
						<div className="feature-item">
							<div className="feature-item__icon">
								<Image src="/images/features-icon6.svg" width={50} height={50} />
							</div>
							<div className="feature-item__title">Data tracking</div>
							<div className="feature-item__descrp">
								The hardware and software, which when used together allows you to know where something is at any point
								in time
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="process" style={{ backgroundImage: `url(${processBg.src})` }}>
				<div className="container container--py container--px">
					<div className="process__text">
						<div className="section-tag">how it works</div>
						<h2>Our Process</h2>
						<p>
							We know the best solution for all of your business ideas and we can help you solve all business problems
						</p>
					</div>
					<div className="process-item">
						<div className="process-item__image">
							<div>
								<Image src="/images/process-img1.png" width={480} height={270} layout="responsive" />
							</div>
						</div>
						<div className="process-item__content">
							<div className="process-item__content__icon">
								<Image src="/images/process-icon1.svg" width={50} height={50} />
							</div>
							<div className="process-item__content__title">Business Audit</div>
							<div className="process-item__content__descrp">
								An audit examines your business's financial records to verify they are accurate. This is done through a
								systematic review of your transactions.
							</div>
						</div>
					</div>
					<div className="process-item">
						<div className="process-item__image">
							<div>
								<Image src="/images/process-img2.png" width={480} height={270} layout="responsive" />
							</div>
						</div>
						<div className="process-item__content">
							<div className="process-item__content__icon">
								<Image src="/images/process-icon2.svg" width={50} height={50} />
							</div>
							<div className="process-item__content__title">Data tracking</div>
							<div className="process-item__content__descrp">
								The hardware and software, which when used together allows you to know where something is at any point
								in time
							</div>
						</div>
					</div>
					<div className="process-item">
						<div className="process-item__image">
							<div>
								<Image src="/images/process-img3.png" width={480} height={270} layout="responsive" />
							</div>
						</div>
						<div className="process-item__content">
							<div className="process-item__content__icon">
								<Image src="/images/process-icon3.svg" width={50} height={50} />
							</div>
							<div className="process-item__content__title">Results</div>
							<div className="process-item__content__descrp">
								An audit examines your business's financial records to verify they are accurate. This is done through a
								systematic review of your transactions.
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="clients">
				<div className="container container--px container--py">
					<div className="clients__text">
						<div className="section-tag">BRANDS</div>
						<h2>We work with thousands of the world’s leading brands</h2>
					</div>
					<div className="clients__logo">
						{clientImages.map((client, index) => {
							return (
								<div className="clients__logo__item" id={"client_logo" + index}>
									<Image src={client} width={143} height={90} />
								</div>
							);
						})}
					</div>
					<div className="clients__footer">
						<p>You're going to be in good company. We work with world's leading brands.</p>
					</div>
				</div>
			</section>
			<section className="start-with" style={{ backgroundImage: `url(${startsWithBG.src})` }}>
				<div className="container container--px container--py">
					<div className="start-with__row">
						<div className="start-with__text">
							<div className="section-tag">how it works</div>
							<h2>Start working faster today</h2>
							<p>
								We know the best solution for all of your business ideas and we can help you solve all business problems
							</p>
							<a href="" className="cta-btn">
								Get started
							</a>
						</div>
						<div className="start-with__img">
							<Image src="/images/start-img.png" width={624} height={523} layout="responsive" />
						</div>
					</div>
				</div>
			</section>
			<footer className="footer">
				<div className="container container--px">
					<div className="footer__top">
						<div className="logo">
							<svg width="259" height="61" viewBox="0 0 259 61" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0)">
									<path
										d="M39.1775 20.2732C35.7019 18.2666 34.4566 13.751 36.4873 10.2335C38.494 6.75797 43.0096 5.51263 46.527 7.54342C50.0025 9.55003 51.2479 14.0656 49.2171 17.5831C47.1863 21.1005 42.6949 22.304 39.1775 20.2732Z"
										fill="white"
									/>
									<path
										d="M94.2671 32.6094C100.094 22.5177 96.5893 9.43974 86.4976 3.6133C76.3641 -2.23731 63.328 1.29109 57.5016 11.3828L41.9805 38.266C41.9805 38.266 81.1153 55.3889 94.2671 32.6094Z"
										fill="white"
									/>
									<path
										d="M7.39788 30.1124C3.3363 37.1473 5.73677 46.2381 12.7716 50.2996C19.8065 54.3612 28.8554 51.9366 32.917 44.9017L43.7237 26.1839C43.7656 26.2081 16.5364 14.284 7.39788 30.1124ZM18.2113 40.8779C16.3688 39.8142 15.7317 37.4364 16.7954 35.5939C17.8592 33.7514 20.237 33.1143 22.0794 34.1781C23.9219 35.2418 24.559 37.6196 23.4953 39.4621C22.4734 41.3287 20.0956 41.9659 18.2113 40.8779Z"
										fill="white"
									/>
									<path
										d="M113.773 36.7147C112.304 35.8887 111.111 34.7872 110.285 33.3186C109.459 31.8501 109 30.2897 109 28.454C109 26.6183 109.459 25.0579 110.285 23.5893C111.111 22.1207 112.304 21.0193 113.773 20.1932C115.241 19.3671 116.894 19 118.821 19C120.29 19 121.666 19.2754 122.951 19.8261C124.237 20.3768 125.246 21.1111 126.072 22.1207L123.869 24.2318C122.584 22.7632 120.932 22.1207 119.005 22.1207C117.72 22.1207 116.618 22.3961 115.609 22.9468C114.599 23.4975 113.865 24.2318 113.314 25.2415C112.763 26.2511 112.488 27.3525 112.488 28.5458C112.488 29.739 112.763 30.9322 113.314 31.8501C113.865 32.8597 114.691 33.594 115.609 34.1447C116.618 34.6954 117.72 34.9708 119.005 34.9708C120.932 34.9708 122.584 34.2365 123.869 32.7679L126.072 34.879C125.246 35.8887 124.145 36.6229 122.951 37.1737C121.666 37.7244 120.29 37.9997 118.821 37.9997C116.985 37.9997 115.241 37.5408 113.773 36.7147Z"
										fill="white"
									/>
									<path
										d="M132.497 36.7147C131.029 35.8887 129.835 34.7872 128.917 33.3186C128.091 31.8501 127.632 30.2897 127.632 28.454C127.632 26.71 128.091 25.0579 128.917 23.5893C129.744 22.1207 130.937 21.0193 132.497 20.1932C133.966 19.3671 135.71 19 137.545 19C139.381 19 141.125 19.3671 142.594 20.1932C144.062 21.0193 145.255 22.1207 146.173 23.5893C146.999 25.0579 147.458 26.6183 147.458 28.454C147.458 30.2897 146.999 31.8501 146.173 33.3186C145.347 34.7872 144.154 35.8887 142.594 36.7147C141.125 37.5408 139.381 37.9079 137.545 37.9079C135.618 37.9997 133.966 37.5408 132.497 36.7147ZM140.85 34.1447C141.859 33.594 142.594 32.8597 143.144 31.8501C143.695 30.8404 143.97 29.739 143.97 28.5458C143.97 27.3525 143.695 26.2511 143.144 25.2415C142.594 24.2318 141.859 23.4975 140.85 22.9468C139.84 22.3961 138.739 22.1207 137.545 22.1207C136.352 22.1207 135.251 22.3961 134.241 22.9468C133.231 23.4975 132.497 24.2318 131.946 25.2415C131.396 26.2511 131.12 27.3525 131.12 28.5458C131.12 29.739 131.396 30.8404 131.946 31.8501C132.497 32.8597 133.231 33.594 134.241 34.1447C135.251 34.6954 136.352 34.9708 137.545 34.9708C138.739 34.9708 139.84 34.6954 140.85 34.1447Z"
										fill="white"
									/>
									<path
										d="M167.834 37.7254V25.6096L161.777 35.7061H160.216L154.158 25.7932V37.8172H150.946V19.46H153.791L161.042 31.5757L168.202 19.46H171.047V37.8172H167.834V37.7254Z"
										fill="white"
									/>
									<path
										d="M187.752 20.1943C188.945 20.745 189.863 21.4793 190.506 22.4889C191.148 23.4986 191.423 24.6 191.423 25.9768C191.423 27.2618 191.148 28.455 190.506 29.4647C189.863 30.4743 188.945 31.2086 187.752 31.7593C186.559 32.31 185.182 32.5854 183.622 32.5854H179.491V37.909H176.095V19.5518H183.622C185.182 19.3682 186.559 19.6435 187.752 20.1943ZM186.742 28.6386C187.477 27.9961 187.936 27.0782 187.936 25.9768C187.936 24.7836 187.568 23.8657 186.742 23.315C186.008 22.6725 184.815 22.3971 183.346 22.3971H179.4V29.6482H183.346C184.907 29.5564 186.008 29.1893 186.742 28.6386Z"
										fill="white"
									/>
									<path
										d="M205.743 33.5042H196.564L194.729 37.7264H191.241L199.501 19.3691H202.898L211.158 37.7264H207.579L205.743 33.5042ZM204.642 30.8424L201.154 22.857L197.758 30.8424H204.642Z"
										fill="white"
									/>
									<path
										d="M229.79 19.3691V37.7264H226.944L216.848 25.3352V37.7264H213.452V19.3691H216.297L226.394 31.7603V19.3691H229.79Z"
										fill="white"
									/>
									<path
										d="M242.641 31.2086V37.6336H239.245V31.2086L232.085 19.2764H235.757L241.08 28.1796L246.496 19.2764H249.892L242.641 31.2086Z"
										fill="white"
									/>
								</g>
								<defs>
									<clipPath id="clip0">
										<rect width="259" height="61" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</div>
						<div className="nav-links">
							<a href="#">Home</a>
							<a href="#">Your benefits</a>
							<a href="#">Our process</a>
							<a href="#">Our works</a>
						</div>
						<div className="social">
							<a href="#">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M18 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H10V12.4706H7V9.64706H10V8.13082C10 5.26024 11.4897 4 13.925 4C15.0684 4 15.6836 4.08142 15.9825 4.12097L16 4.12329V6.82353H14.339C13.3053 6.82353 13 7.35812 13 8.44047V9.64706H15.9741L15.5629 12.4706H13V20H18C19.1046 20 20 19.1046 20 18V2C20 0.89543 19.1046 0 18 0Z"
										fill="white"
										fill-opacity="0.8"
									/>
								</svg>
							</a>
							<a href="#">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M6 0H14C17.3137 0 20 2.68629 20 6V14C20 17.3137 17.3137 20 14 20H6C2.68629 20 0 17.3137 0 14V6C0 2.68629 2.68629 0 6 0ZM16 3C16.5 3 17 3.5 17 4C17 4.5 16.5 5 16 5C15.5 5 15 4.5 15 4C15 3.5 15.5 3 16 3ZM15 10C15 7.2425 12.7575 5 10 5C7.2425 5 5 7.2425 5 10C5 12.7575 7.2425 15 10 15C12.7575 15 15 12.7575 15 10ZM10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7Z"
										fill="white"
										fill-opacity="0.8"
									/>
								</svg>
							</a>
							<a href="#">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M18 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H18C19.1046 20 20 19.1046 20 18V2C20 0.89543 19.1046 0 18 0ZM15.3502 6.23936C15.9312 6.1722 16.4847 6.02331 17 5.80205C16.615 6.35858 16.1277 6.84744 15.5661 7.23946C15.5715 7.35868 15.5742 7.47842 15.5742 7.59868C15.5742 11.2685 12.686 15.5 7.40283 15.5C5.78051 15.5 4.27126 15.0403 3 14.2526C3.22507 14.2786 3.45391 14.2917 3.68544 14.2917C5.03154 14.2917 6.26995 13.8476 7.25261 13.1026C5.99588 13.0802 4.93516 12.2769 4.56956 11.1737C4.74455 11.2055 4.92493 11.2232 5.10961 11.2232C5.37183 11.2232 5.62598 11.1893 5.86666 11.1258C4.55232 10.8712 3.56267 9.74881 3.56267 8.40302V8.36814C3.94981 8.57587 4.39295 8.70081 4.86354 8.71539C4.09303 8.21769 3.58636 7.36753 3.58636 6.4044C3.58636 5.89472 3.72797 5.41784 3.97458 5.0076C5.39175 6.68813 7.50783 7.79391 9.89474 7.90948C9.84628 7.70697 9.82043 7.49456 9.82043 7.27694C9.82043 5.74374 11.1062 4.5 12.6925 4.5C13.5184 4.5 14.2647 4.83736 14.7886 5.37723C15.4434 5.25228 16.0583 5.02113 16.6129 4.70304C16.3986 5.35172 15.9436 5.89576 15.3502 6.23936Z"
										fill="white"
										fill-opacity="0.8"
									/>
								</svg>
							</a>
						</div>
					</div>
					<hr />
					<div className="footer__bottom">
						<div className="copy-rights">© {new Date().getFullYear()} Company</div>
						<div className="nav-links">
							<a href="#">Privacy policy</a>
							<a href="#">Term of service</a>
						</div>
					</div>
				</div>
			</footer>
		</main>
	);
}
