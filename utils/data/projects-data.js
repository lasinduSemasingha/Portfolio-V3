import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Stationary Management System',
        description: "Me and my team building a stationary management system for AMF Company. we are now on requirment analysis stage of Software Development Life Cycle.",
        tools: ['.NET Framework', 'ASP.NET MVC', 'Microsoft SQL Server', 'Bootstrap'],
        role: 'Software Engineer Intern',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Fertilizer management System',
        description: 'Me and my team developed Fertilizer management System for a client from Hayleys Agriculture Company. I created the UI for Order management and Payment using React, MUI, CSS. Backend solutions using Node.JS, Express.JS and MongoDB.',
        tools: ['React', 'Material-UI', 'Node.JS', 'Express.JS', 'MongoDB'],
        role: 'Full Stack Developer (MERN)',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Blood Bank Management System',
        description: 'I built a Blood Bank Management System. I used HTML, CSS, JavaScript to develop UIs and used PHP and MySQL to implement Backend Solutions. Implemented role based logins.Search, user management, Blood Donation Campaign management',
        tools: ['PHP', 'MYSQL', 'HTML', 'CSS', 'JavaScript'],
        code: '',
        role: 'Full Stack Developer (PHP)',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Task Management Application',
        description: "I built a task management web application. Developed application using .NET Framework, ASP.NET MVC.",
        tools: ['.NET Framework', 'ASP.NET', ],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },