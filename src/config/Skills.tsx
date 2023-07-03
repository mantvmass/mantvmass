
interface SkillProps {
    [key: string]: {
        name: string;
        skill: string;
        cover: string;
    }[];
  }

const Skills: SkillProps = {
    "programming-language": [
        {
            "name": "C++ (Cmake Project)",
            "skill": "Basic",
            "cover": "https://camo.githubusercontent.com/04a68d28c34b095402af3f66b15a65b9802c0d7ffdfa813635f65a9dbb18c16e/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f632d706c75732d706c75732d6c6f676f2e706e67"
        },
        {
            "name": "Python",
            "skill": "Advance",
            "cover": "https://camo.githubusercontent.com/e17f27ccb104b1ee595bb3c320eaf9ab8d0b1767969bc204fb7813db450ebd8f/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f707974686f6e2d2d76322e706e67"
        },
        {
            "name": "JavaScript",
            "skill": "Advance",
            "cover": "https://camo.githubusercontent.com/a30d7492025ac65a67d91e4d6a4757ac1c193d8342829a8ddca216ba6788b14d/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6a6176617363726970742d2d76322e706e67"
        },
        {
            "name": "TypeScript",
            "skill": "Basic",
            "cover": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
        },
        {
            "name": "PHP",
            "skill": "Advance",
            "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
        },
        {
            "name": "GoLang",
            "skill": "Basic",
            "cover": "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
        },
    ],
    "framework-and-library": [
        {
            "name": "Flask",
            "skill": "Advance",
            "cover": "https://www.vhv.rs/dpng/d/35-351319_flask-logo-png-transparent-png.png"
        },
        {
            "name": "NextJS",
            "skill": "Basic",
            "cover": "https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png"
        },
        {
            "name": "React",
            "skill": "Basic",
            "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        },
        {
            "name": "React Native",
            "skill": "Basic",
            "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        },
        {
            "name": "Gin",
            "skill": "Basic",
            "cover": "data:image/png;base64,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"
        },
    ],
    "server-and-database": [
        {
            "name": "MySql",
            "skill": "Advance",
            "cover": "https://www.elearningworld.org/wp-content/uploads/2019/04/MySQL.svg.png"
        },
        {
            "name": "MongoDB",
            "skill": "Advance",
            "cover": "https://www.elearningworld.org/wp-content/uploads/2019/04/MySQL.svg.png"
        },
        {
            "name": "Redis",
            "skill": "Advance",
            "cover": "https://www.elearningworld.org/wp-content/uploads/2019/04/MySQL.svg.png"
        },
        {
            "name": "Apache",
            "skill": "Advance",
            "cover": "https://www.elearningworld.org/wp-content/uploads/2019/04/MySQL.svg.png"
        },
        {
            "name": "Nginx",
            "skill": "Advance",
            "cover": "https://www.elearningworld.org/wp-content/uploads/2019/04/MySQL.svg.png"
        },
        {
            "name": "Ubuntu 19+ (OS)",
            "skill": "Advance",
            "cover": "https://www.elearningworld.org/wp-content/uploads/2019/04/MySQL.svg.png"
        },
        {
            "name": "Windows Server 2012 (OS)",
            "skill": "Advance",
            "cover": "https://www.elearningworld.org/wp-content/uploads/2019/04/MySQL.svg.png"
        }
    ]
}

export default Skills