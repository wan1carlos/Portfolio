const portfolio = [
    {
        id: 0,
        projectName: "IntelliWatch: Advanced Fall Detection and Analysis System with Pose Estimation for Realtime Alerts",
        url: "https://github.com/earlescario/intelliwatch",
        image: "projects/intelliwatch.jpg",
        projectDetail: "IntelliWatch leverages advanced computer vision and machine learning to accurately detect falls by analyzing real-time video feeds and distinguishing between genuine falls and routine movements. It ensures rapid response by immediately alerting caregivers via SMS and email, providing a reliable solution for enhancing safety and independence for older adults.",
        technologiesUsed: [
            {
                tech: "Python"
            },
        ]
    },
    {
        id: 0,
        projectName: "Elixir: A Personalized Color Palette Analyzer using Image Processing",
        url: "https://github.com/ShahaniV/HUI-Elixir/tree/main",
        image: "projects/elixir.png",
        projectDetail: "Elixir is a personalized color palette analyzer that uses advanced image processing, including the Viola-Jones algorithm for face detection and the Face Parsing Network for facial segmentation, to match users' skin tones with Seasonal Color Tones. Designed to provide tailored style recommendations for makeup, clothing, and hair, Elixir offers a user-friendly and accurate tool for fashion enthusiasts seeking a cohesive, personalized look.",
        technologiesUsed: [
            {
                tech: "Python"
            },
            {
                tech: "Java"
            },
            {
                tech: "Android"
            },
        ]
    },
    
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
