const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'FEU Institute of Technology',
                degree: 'BS Computer Science with Specialization in Software Engineering',
                detail: "Bachelor's Degree in Computer Science",
                year: '2021-'
            },
            {
                id: 1,
                title: 'Notre Dame of Greater Manila',
                degree: 'STEM',
                detail: "Completed Secondary Education and Senior Highschool",
                year: '2015-2021'
            },
        ]
    },
    
    {
        expCards: [
            {
                id: 1,
                title: 'IT Specialist - Python',
                role: 'Certiport',
                url: 'https://www.credly.com/badges/a3affd74-72f5-40e3-82e0-a447b6d85b17/public_url',
                desc: '',
                year: 'June 25, 2023',
                location: ''
            },
            {
                id: 2,
                title: 'IT Specialist - Java',
                role: 'Certiport',
                url: 'https://www.credly.com/badges/fe272ffe-a474-405e-8f5a-5fcb7eddb4e5/public_url',
                desc: '',
                year: 'November 24, 2022',
                location: ''
            },
            {
                id: 3,
                title: 'CCNA: Introduction to Networks',
                role: 'Cisco',
                url: 'https://www.credly.com/badges/0a070234-d210-4560-a489-9bc59d760041/public_url',
                desc: '',
                year: 'July 29, 2023',
                location: ''
            },
            {
                id: 2,
                title: 'DevNet Associate',
                role: 'Cisco',
                url: 'https://www.credly.com/badges/db90f0b2-5c75-44b0-b1ca-d6d8ba3bb30e/public_url',
                desc: '',
                year: 'December 05, 2023',
                location: ''
            },


        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
