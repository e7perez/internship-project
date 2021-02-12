import Image from "next/image";
import Link from "next/link";

const Latest = () => {
    return (
        <section className="latest">
            <div className="latest__container">
                <div className="latest__container__bar">
                    <h6>Latest Projects</h6>
                </div>
                <div className="projects__list__container">
                    <ul className="projects__list">
                        <li><Image className="projects__img" src="/img/latest_project_1.png" height="400px" width="550px" objectFit="cover" /></li>
                        <li><Image className="projects__img" src="/img/latest_project_2.png" height="400px" width="550px" objectFit="cover"/></li>
                        <li><Image className="projects__img" src="/img/latest_project_3.png" height="400px" width="550px" objectFit="cover"/></li>
                    </ul>
                </div>
                <div className="latest__links__container">
                    <Link href="/Get Started">
                        <a className="landing__purp__btn">View Themes</a>
                    </Link>
                    <Link href="/Get Started">
                        <a className="landing__purp__btn">View Apps</a>
                    </Link>
                </div>
            </div>
            
        </section>
    )
}
export default Latest;