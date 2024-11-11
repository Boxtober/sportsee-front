import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import "./cardslink.scss";

export const Links = () => {
    const links = [
        {
            alt: "icon 1",
            href: "#",
            target: "blank",
            imgUrl: icon1,
        },
        {
            alt: "icon 2",
            href: "#",
            target: "blank",
            imgUrl: icon2,
        },
        {
            alt: "icon 3",
            href: "#",
            target: "blank",
            imgUrl: icon3,
        },
        {
            alt: "icon 4",
            href: "#",
            target: "blank",
            imgUrl: icon4,
        },
    ];

    return (
        <div className="cards-link-container">
            {links.map((link, index) => {
                return <CardsLink key={index} {...link} />;
            })}
        </div>
    );
};

export const CardsLink = ({ target, imgUrl, href, alt }) => {
    return (
        <a className="cardslinks" href={href} target={target}>
            <img src={imgUrl} alt={alt} />
        </a>
    );
};
