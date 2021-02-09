import Image from "next/image";
import Link from "next/link";

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__container">
                <div className="info__container">
                    <h1>We Give Your Business an Edge<br></br>
                    Over Your Competitors!
                    </h1>
                    <p>Everything you need for your business: Themes, Apps, Assets<br></br> and More...</p>
                    <input type="email" placeholder="Enter your email address"></input>
                    <Link href="/Get Started">
                        <a className="landing__purp__btn">Get Started</a>
                    </Link>
                </div>
                <div className="content__container">
                    <div className="bg__shapes__container">
                        <div className="content__circle__green"></div>
                        <div className="content__circle__blue"></div>
                        <div className="content__tri__blue">
                            <svg width="707" height="704" viewBox="0 0 707 704" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                    <path d="M492.284 30.5453L664.537 649.482L42.3954 489.189L492.284 30.5453Z" fill="url(#paint0_linear)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d" x="0.395447" y="0.545288" width="740" height="740" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                        <feOffset dy="12" />
                                        <feGaussianBlur stdDeviation="21" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear" x1="526.616" y1="170.958" x2="11.9088" y2="405.291" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#7D52FC" />
                                        <stop offset="1" stop-color="#4ACAF9" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <Link href="/Video">
                            <a className="container__rectangle__vid">
                                <div className="filter"></div>
                                <Image
                                    className="img"
                                    src="/img/landing_vid_thumb.jpg"
                                    alt="Background image"
                                    layout="fill"
                                    priority={true}
                                    quality={100}
                                />
                                <div className="container__play__vid">
                                    <div className="container__play__btn"></div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    
                </div>
                <div className="platforms__container">
                    <h6>Platforms</h6>
                    <div className="platforms__container__list">
                        <ul>
                            <li><Image className="platforms__img" src="/img/shopify.png" height="72px" width="173px"/></li>
                            <li><Image className="platforms__img" src="/img/wordpress.png" height="72px" width="173px" /></li>
                            <li><Image className="platforms__img" src="/img/bigcommerce.png" height="72px" width="173px" /></li>
                            <li><Image className="platforms__img" src="/img/wix.png" height="72px" width="173px" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Landing;