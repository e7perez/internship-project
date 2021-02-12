import Image from "next/image";
const CustomSolutions = () => {
    return (
        <section className="custom__solutions">
            <div className="solutions__container">
                <h1>Need A Custom Solution?</h1>
                <div className="solutions__selector">
                    <ul>
                        <li active><span>01 </span>Install Theme</li>
                        <li><span>02 </span>Landing Page</li>
                        <li><span>03 </span>Build Online Store</li>
                        <li><span>04 </span>Custom Theme</li>
                        <li><span>05 </span>Custom Web Site</li>
                        <li><span>06 </span>Custom App</li>
                        <li><span>07 </span>Marketing Assets</li>
                    </ul>
                    <div className="selector__container">
                        <div className="sel__info__container">
                            <h3>Install Theme</h3>
                            <p>Having trouble with installing any of our themes? Well we can help you by installing the theme for you!</p>
                        </div>
                        <div className="img__container">
                            <Image className="projects__img" src="/img/solutions_img.png" height="450px" width="auto"/>
                            <Image className="projects__img" src="/img/solutions_img2.png" height="450px" width="auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CustomSolutions;