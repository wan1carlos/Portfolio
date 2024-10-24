const expertise = [
    {
        id: 0,
        title: 'Web Development',
        desc: 'Proficient in HTML, CSS, JavaScript, React, PHP, and PHPmyAdmin',
    },
    {
        id: 1,
        title: 'UI/UX Design',
        desc: "Designing user-friendly interfaces and delivering smooth, effortless experiences on digital platforms.",
    },
    {
        id: 2,
        title: 'Software Development',
        desc: 'Crafting bespoke software solutions that align with unique business goals, delivering top-tier performance and limitless scalability.',
    },
    {
        id: 3,
        title: 'Mobile App Development',
        desc: "Creating intuitive mobile apps for Android, leveraging cutting-edge frameworks for a seamless user experience.",
    }
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
