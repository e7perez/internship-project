import Image from "next/image";
const MeetTheTeam = () => {
    return (
        <section className="meet__the__team">
            <div className="mtt__container">
                <h1>Meet The Team</h1>
                <div className="mtt__usr__img">
                    <Image
                        className="img"
                        src="/img/usr_img_1.jpg"
                        alt="Background image"
                        layout="fill"
                        priority={true}
                        quality={100}
                    />
                </div>
                <div className="mtt__usr__img2">
                    <Image
                        className="img"
                        src="/img/usr_img_2.jpg"
                        alt="Background image"
                        layout="fill"
                        priority={true}
                        quality={100}
                    />
                </div>
                <div className="mtt__usr__img3">
                    <Image
                        className="img"
                        src="/img/usr_img_3.jpg"
                        alt="Background image"
                        layout="fill"
                        priority={true}
                        quality={100}
                    />
                </div>
                <div className="mtt__usr__img4">
                    <Image
                        className="img"
                        src="/img/usr_img_4.jpg"
                        alt="Background image"
                        layout="fill"
                        priority={true}
                        quality={100}
                    />
                </div>
                <div className="mtt__usr__img5">
                    <Image
                        className="img"
                        src="/img/usr_img_5.jpg"
                        alt="Background image"
                        layout="fill"
                        priority={true}
                        quality={100}
                    />
                </div>
            </div>
        </section>
    )
}
export default MeetTheTeam;