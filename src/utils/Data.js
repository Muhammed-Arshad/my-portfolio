import {FaReact ,FaNode, FaCss3Alt} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si'

import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'

export const Skills = [
    {
        id: 0,
        tech: 'React JS',
        icon: <FaReact/>
    },
    {
        id: 1,
        tech: 'Node JS',
        icon: <FaNode/>
    },
    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt/>
    },
    {
        id: 3,
        tech: 'Javascript',
        icon: <SiJavascript/>
    },
];

export const projectDetails = [
    {
        id: 0,
        project_name: "Restaurent App",
        project_desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        tech_stack: ['React JS', 'Tailwind','Firebase'],
        project_img: Project1,
        project_url: 'https://',
        reverse:false
    },
    {
        id: 1,
        project_name: "Mangement App",
        project_desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        tech_stack: ['React JS', 'Tailwind','Firebase'],
        project_img: Project2,
        project_url: 'https://',
        reverse:false
    },

]