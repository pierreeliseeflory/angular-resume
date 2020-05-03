export interface IHeaderLangSet{
    home:string,
    portfolio:string,
    work:string,
    contact:string,
    external:string,
    resume:string,
    linkedin:string,
    github:string,
}

export interface IResumeLangSet{
    title:string,
}

export interface IFooterLangSet{
    text:string,
}

export interface IContactLangSet{
    title:string,
    subtitle:string,
    firstname:string,
    firstnameExample:string,
    lastname:string,
    lastnameExample:string,
    mail:string,
    mailExample:string,
    reason:string,
    reasonSelect:string,
    reasonChoice1:string,
    reasonChoice2:string,
    reasonChoice3:string,
    reasonChoice4:string,
    info:string,
    message:string,
    submit:string,
    alertMail:string;
    alertMessage:string;
    alertForm:string;
    thanks:string;
}

export interface IPortfolioLangSet{
    title:string,
    creation:string,
    myProjects:Array<any>,


}

export interface IWorkLangSet{
    title:string,
    subtitle:string,
    partners:string,
    partner1:string,
    partner1Descr:string,
    partner2:string,
    partner2Descr:string,
    partner3:string,
    partner3Descr:string,
    date:string,
    message:string,
}

export interface IHomeLangSet{
    intro:string,
    introLink:string,
    animation:string,
    studies:string,
    studiesTitle1:string,
    studiesDescr1:string,
    studiesTitle2:string,
    studiesDescr2:string,
    studiesTitle3:string,
    studiesDescr3:string,
    studiesTitle4:string,
    studiesDescr4:string,
    about:string,
    aboutTitle:string,
    aboutDescr:string,
    aboutLink:string,
    experience:string,
    experienceTitle1:string,
    experienceDescr1:string,
    experienceTitle2:string,
    experienceDescr2:string,
    skills:string,
    language:string,
    myLanguages:Array<any>,
    tools:string,
    codeLanguage:string,
    webTechno:string,
    serviceTitle:string,
    serviceTitle1:string,
    serviceDescr1:string,
    serviceTitle2:string,
    serviceDescr2:string,
    serviceTitle3:string,
    serviceDescr3:string,
}

export interface ILangSet{
    "header":IHeaderLangSet,
    "resume":IResumeLangSet,
    "footer":IFooterLangSet,
    "contact":IContactLangSet;
    "work":IWorkLangSet;
    "portfolio":IPortfolioLangSet;
    "home":IHomeLangSet;
}

export interface ILang{
    "en":ILangSet,
    "fr":ILangSet
}

export type AllowedLangs = 'en' | 'fr';

export const LANGS:ILang = {
    "en":{
        "header":{
            home:"Home",
            portfolio:"Portfolio",
            work:"My Work",
            contact:"Contact Me",
            external:"External Ressources",
            resume:"My Resume",
            linkedin:"My LinkedIn",
            github:"My Github page",
        },
        "resume": {
            title: "My Resume",
        },
        "footer": {
            text: "Website developed by Me",
        },
        "contact": {
            title:"Contact me right now !",
            subtitle:"You can contact me for any reason through this form ! I'm always glad to hear from you and try to respond as quick as I can so don't hesitate sending a message.",
            firstname:"First name",
            firstnameExample:"John",
            lastname:"Last name",
            lastnameExample:"Doe",
            mail:"Your mail address",
            mailExample:"john.doe@domain.com",
            reason:"Reason for contact",
            reasonSelect:"Select a reason",
            reasonChoice1:"You just want more info",
            reasonChoice2:"You want to talk about a project",
            reasonChoice3:"You want to hire me",
            reasonChoice4:"You don't have any special reason ;)",
            info:"This is only required to identify you in further discussions, we will not share your personnal information nor will we use it for any commercial intent.",
            message:"Your message",
            submit:"Send message",
            alertMail:"Please provide a correct mail address",
            alertMessage:"Please write a message of at least 10 characters",
            alertForm:"All fields are mandatory in order to send a message.",
            thanks:"Thanks for your message, I'll answer asap !",
        },
        "work": {
            title:"Let's work together now !",
            subtitle:"I am available right now to create and deploy your website, help you develop your scientific project by bringing high-end computing solutions. I can also help you secure you IT infrastructure.",
            partners:"People I've worked with in the past",
            partner1:"Someone",
            partner1Descr:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
            partner2:"Someone else",
            partner2Descr:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
            partner3:"Quentin Biharé",
            partner3Descr:"I loved working with Pierre-Élisée, he's really efficient and helped me a lot building my project.",
            date: "Just now!",
            message: "Hi! If you are interested to work with me, don't hesitate sending me a message.",
        },
        "portfolio": {
            title:"My past projects",
            creation:"Creating new project...",
            myProjects: [
                {
                    title:"A project I did",
                    date:"2 weeks ago",
                    description:"The explanation of what the project was about, what I brought to the client and what it taught me.",
                    site: "site1",
                },
                {
                    title:"A project I did",
                    date:"1 month ago",
                    description:"The explanation of what the project was about, what I brought to the client and what it taught me.",
                    site: "site2",
                },
                {
                    title:"A project I did",
                    date:"4 months ago",
                    description:"The explanation of what the project was about, what I brought to the client and what it taught me.",
                    site: "site3",
                },
                {
                    title:"A project I did",
                    date:"6 months ago",
                    description:"The explanation of what the project was about, what I brought to the client and what it taught me.",
                    site: "site4",
                },
                {
                    title:"A project I did",
                    date:"1 year ago",
                    description:"The explanation of what the project was about, what I brought to the client and what it taught me.",
                    site: "site5",
                },
            ]
        },
        "home": {
            intro:"This is my personnal website, presenting my background and showcasing my work! Feel free to navigate to the different sections and discover who I am! I would be glad to hear from you so ",
            introLink:"let's have a chat !",
            animation:"I'm a web developer ;)",
            studies:"My Studies ",
            studiesTitle1:"2020-2021 - Master",
            studiesDescr1:"Computer Science Master 2 in Cybersecurity at Institut Polytechnique de Paris. This course provides me both theoretical foundations and knowledge of the tools used in the field. This Master revolves also around current trends in cybersecurity such as blockchains and machine learning.",
            studiesTitle2:"2018-2021 - Engineering Degree",
            studiesDescr2:"Engineering degree at ENSTA Paris in Information and Communication Sciences and Technologies.",
            studiesTitle3:"2016-2018 - Preparatory Class",
            studiesDescr3:"Preparatoy Class in Physics and Chemistry at Lycée Pierre de Fermat in order to prepare a national competitive exam.",
            studiesTitle4:"2013-2016 - High School",
            studiesDescr4:"Scientific courses in High School at Lycée Théophile Gautier and acquirement of the Baccalauréat with honors.",
            about:"More About Me",
            aboutTitle:"My name is Pierre-Elisée Flory",
            aboutDescr:"I am a 21 years old French Web developer working in freelance. I'm located in Palaiseau in the area of Paris. If you're interested by my services or if you want more details about what I do, don't hesitate ",
            aboutLink:"contacting me !",
            experience:"My Experiences ",
            experienceTitle1:"Junior Enterprise",
            experienceDescr1:"2019-2020 : I worked for the Junior Enterprise at ENSTA Paris, doing mostly full-stack web developement.",
            experienceTitle2:"Industrial Placement",
            experienceDescr2:"August 2019 : I worked on the Final Assembly Line of the TBM 900, the fastest business mono-propeller in the world, at DAHER SOCATA in Tarbes, France.",
            skills:"My Skills ",
            language:"Languages Spoken ",
            myLanguages: [
                {
                    name: "French",
                    level: "Mother tongue",
                },
                {
                    name: "English",
                    level: "Proficient user",
                    code: "C1",
                },
                {
                    name: "German",
                    level: "Basic skills",
                    code: "A2-B1",
                },
            ],
            tools:"Tools ",
            codeLanguage:"Programming Languages ",
            webTechno:"Web Technologies ",
            serviceTitle:"Services I can provide ",
            serviceTitle1:"Full stack web development ",
            serviceDescr1:"I am an enthusiastic web developper and love helping people give a beautiful and intuitive shape to their ideas. Taking part in awesome projects that make a real difference is what drives my motivation and I am always fully involved in those that are genuinely bringing something new and positive.",
            serviceTitle2:"Cybersecurity audit and consulting ",
            serviceDescr2:"I have an extended formation in cybersecurity and love following the security world actuality in order to foresee and undermine threats. I can help you improve the security of your organisation and the safety of your services and websites.",
            serviceTitle3:"Scientific programming solutions and High Performance Computing ",
            serviceDescr3:"I have experience in scientific programming and scaling algorithms on accelerators to achieve high performance solutions.",
        }
    },
    "fr":{
        "header":{
            home:"Accueil",
            portfolio:"Portfolio",
            work:"Mon Travail",
            contact:"Prendre contact",
            external:"Ressources externes",
            resume:"Mon CV",
            linkedin:"Ma page LinkedIn",
            github:"Ma page Github",
        },
        "resume": {
            title: "Mon CV",
        },
        "footer": {
            text: "Site web développé par moi-même",
        },
        "contact": {
            title:"Contactez moi dès maintenant !",
            subtitle:"Vous pouvez m'envoyer un message via ce formualaire pour n'importe qu'elle raison ! Je suis toujours ravi de recevoir des messages et essaie de répondre le plus vite possible donc n'hésitez surtout pas !",
            firstname:"Prénom",
            firstnameExample:"John",
            lastname:"Nom de famille",
            lastnameExample:"Doe",
            mail:"Adresse mail",
            mailExample:"john.doe@domain.com",
            reason:"Raison du message",
            reasonSelect:"Selectionnez une raison",
            reasonChoice1:"Vous voulez plus d'informations",
            reasonChoice2:"Vous voulez parler d'un projet",
            reasonChoice3:"Vous voulez m'engager",
            reasonChoice4:"Vous n'avez pas de raison particulière ;)",
            info:"Il s'agit uniquement d'un moyen de vous identifier dans nos communications futures, cette information ne sera pas partagée et nous ne l'utiliserons pas à des fins commerciales",
            message:"Votre message",
            submit:"Envoyez votre message",
            alertMail:"Veuillez utiliser une adresse mail correcte",
            alertMessage:"Veuillez entrer un message de plus de 10 caractères",
            alertForm:"Tous les champs sont obligatoires afin d'envoyer un message",
            thanks:"Merci pour votre message, je vous répondrais le plus vite possible !",

        },
        "work": {
            title:"Travaillons ensemble !",
            subtitle:"Je suis disponible dès aujourd'hui pour créer et déployer votre site web, vous aider à développer vos projets scientifiques en apportant des solutions informatiques avançées. Je peux également vous aider à sécuriser votre infrastructure informatique.",
            partners:"Mes anciens partenaires",
            partner1:"Quelqu'un",
            partner1Descr:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
            partner2:"Quelqu'un d'autre",
            partner2Descr:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
            partner3:"Quentin Biharé",
            partner3Descr:"J'ai adoré travailler avec Pierre-Élisée, il est très efficace et professionnel et m'a aidé grandement à monter mon projet.",
            date: "A l'instant!",
            message: "Hey! Si vous êtes intéréssé par travailler avec moi, n'hésitez pas à me contacter.",
        },
        "portfolio": {
            title:"Mes projets passés",
            creation:"Création de nouveaux projets...",
            myProjects: [
                {
                    title:"Un projet passé",
                    date:"il y a 2 semaines",
                    description:"Une description du projet et de ce que j'ai apporté au client.",
                    site: "site1",
                },
                {
                    title:"Un projet passé",
                    date:"il y a 1 mois",
                    description:"Une description du projet et de ce que j'ai apporté au client.",
                    site: "site2",
                },
                {
                    title:"Un projet passé",
                    date:"il y a 4 mois",
                    description:"Une description du projet et de ce que j'ai apporté au client.",
                    site: "site3",
                },
                {
                    title:"Un projet passé",
                    date:"il y a 6 mois",
                    description:"Une description du projet et de ce que j'ai apporté au client.",
                    site: "site4",
                },
                {
                    title:"Un projet passé",
                    date:"il y a 1 an",
                    description:"Une description du projet et de ce que j'ai apporté au client.",
                    site: "site5",
                },
            ]
        },
        "home": {
            intro:"Ceci est mon site personnel présentant mon profil ainsi que mes projets passés! Naviguez sur ce site autant que vous voulez pour découvrir qui je suis! J'adorerais entendre votre avis donc ",
            introLink:"contactez moi !",
            animation:"Je suis un développeur web ;)",
            studies:"Mes Études ",
            studiesTitle1:"2020-2021 - Master",
            studiesDescr1:"Master en Cybersécurité de l'Institut Polytechnique de Paris. Cette formation m'a apporté à la fois des compétences théoriques et pratiques ne cybersécurité. Ce cours abborde également des sujets modernes autour de la cybersécurité tels que les blockchains et le machine learning.",
            studiesTitle2:"2018-2021 - Diplôme d'ingénieur",
            studiesDescr2:"Diplôme d'ingénieur en Sciences et Techniques de l'Information et de la communication.",
            studiesTitle3:"2016-2018 - Classe préparatoire",
            studiesDescr3:"Classe préparatoire en Physique Chimie au lycée Perre de Fermat à Toulouse.",
            studiesTitle4:"2013-2016 - Lycée",
            studiesDescr4:"Terminal scientifique au lycée Théophile Gautier de Tarbes et obtention du BAC S  mention très bien",
            about:"A propos de moi",
            aboutTitle:"Je m'appelle Pierre-Elisée Flory",
            aboutDescr:"J'ai 21 ans et je travail en tant que dev web en freelance. Je vis à Palaiseau, près de Paris. Si vous êtes intéréssé par mes services ou si vous voulez des informaations supplémentaires, n'hésitez pas ",
            aboutLink:"à me contacter !",
            experience:"Mes experiences professionnelles",
            experienceTitle1:"Junior Entreprise",
            experienceDescr1:"2019-2020 : J'ai réalisé du développement web full-stack pour la junior entreprise de l'ENST Paris.",
            experienceTitle2:"Stage ouvrier",
            experienceDescr2:"Août 2019 : J'ai travaillé sur la chaîne d'assemblage finale du TBM 900, le monopropulseur de business le plus rapide du monde, chez DAHER SOCATA à Tarbes.",
            skills:"Mes compétences ",
            language:"Langues ",
            myLanguages: [
                {
                    name: "Francais",
                    level: "Langue maternelle",
                },
                {
                    name: "Anglais",
                    level: "Maîtrise professionnelle",
                    code: "C1",
                },
                {
                    name: "Allemand",
                    level: "Notions de base",
                    code: "A2-B1",
                },
            ],
            tools:"Outils ",
            codeLanguage:"Langages de programmation ",
            webTechno:"Technologies Web ",
            serviceTitle:"Services que je fournis ",
            serviceTitle1:"Développement web full-stack",
            serviceDescr1:"Je suis un développeur web enthousiasme et j'adore aider les gens à donner forme de manière ergonomique à leurs idées. Prendre part à des projets passionnants qui font une véritable différence est ce qui me motive et me permet de m'impliquer à foncdans des projets qui changent les choses.",
            serviceTitle2:"Audit et consulting en cybersécurité ",
            serviceDescr2:"J'ai une formation avancée en cybersécurité et je suis activement l'actualité du domaine afin de prévoire et parer les attaques. Je peux vous aider à améliorer la sécurité de votre infrastructure, de vos services et de vos sites web.",
            serviceTitle3:"Solutions de programmation scientifique et calcul haute performance ",
            serviceDescr3:"J'ai de l'expérience en programmation scientifique et le passage d'algorithmes sur des accélérateurs afin d'attendre des solutions de hautes performances.",
        }
    }
}