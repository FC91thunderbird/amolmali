import astro from "../assets/projects/astrochacha.png";
import Beera from "../assets/projects/beera.png";
import bitbitcap from "../assets/projects/bitbitcap.png";
import coinCraft from "../assets/projects/coin-craft.png";
import safeDeal from "../assets/projects/safedealindia.png";
import smartDigital from "../assets/projects/smartdigital-life.png";

export const ProjectList = [
    {
        id: 1,
        name: "AstroChacha.com",
        description:"A collaborative platform crafted with React.js, enables users to share insights globally. Featuring Google Authentication via NextAuth. Powered by MongoDB for efficient data storage, ByteBrainHub allows users to create, share insights with tags for easy discovery. With a user-friendly interface, it offers a seamless and enjoyable browsing experience, fostering a community-driven exchange of diverse ideas.",
        img: astro,
        tech: ["React.js", "react-Bootstrap", "Mongo DB", "Node.js"],
        source: "",
        demo: "",
    },
    {
        id: 2,
        name: "Beera Online",
        description:
            "Our Flipkart Clone, built with MERN stack, revolutionizes online shopping. It provides secure user authentication, extensive product catalog, efficient cart management, and Stripe-powered payments. Users easily access order history, while admins have a dedicated dashboard. Responsive design, Bcrypt-secured passwords, and Cloudinary image storage ensure a seamless and secure shopping experience.",
        img: Beera,
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS"
        ],
        source: "Commerce",
        demo: "",
    },
    {
        id: 3,
        name: "bitbitcap",
        description: "Discover the Notion UI Clone repository, coded with React and Tailwind CSS. With responsive design and dynamic React components, it mirrors the original Notion homepage's look and feel for a seamless experience.",
        img: bitbitcap,
        tech: ["React.js", "Tailwind CSS"],
        source: "",
        demo: "",
    },
    {
        id: 4,
        name: "coinCraft.com",
        description:
            "Discord UI Clone is a web application meticulously crafted with React and Tailwind CSS to mirror the essence and functionality of the original Discord UI. It encompasses a faithful reproduction of Discord's home page, Nitro page, and Safety page. The application boasts full responsiveness and furthermore, every link seamlessly connects to the official Discord site.",
        img: coinCraft,
        tech: ["React.js", "Tailwind CSS", "Material UI"],
        source: "",
        demo: "",
    },
    {
        id: 5,
        name: "safeDealIndia.com",
        description:
            "The Whisper Wave built with Node.js, Express.js, and Passport.js, provides a user-friendly platform for secure registration, secret sharing, and anonymous content viewing. It incorporates Google OAuth 2.0 for seamless login. With a focus on ease of use, it showcases modern web development in a straightforward manner, offering a safe and engaging online experience.",
        img: safeDeal,
        tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Passport.js"],
        source: "",
        demo: null,
    },
    {
        id: 6,
        name: "smartDigital-life.com",
        description:
            "Inspired by Google Keep, Keeper is a note-taking website developed with React and adorned with Tailwind CSS and Material UI. It offers a user-friendly experience, allowing you to effortlessly create and manage notes. The responsive design ensures a seamless experience across all devices, making note-taking a breeze.",
        img: smartDigital,
        tech: ["React.js", "Tailwind CSS", "Material UI"],
        source: "",
        demo: "",
    },
];
