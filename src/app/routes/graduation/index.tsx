import { Link } from '@/components/ui/link';
import { paths } from '@/config/paths';

interface Graduation {
    name: string;
    year: string;
    link: string;
    image: string;
    color: string;
    icon: string;
    border: string;
    bg: string;
    text: string;
    yearText: string;
    borderCard: string;
}

const recentGraduations: Graduation[] = [
    // Example for future use:
    // {
    //     name: 'Example Vtuber',
    //     year: '2026',
    //     link: '/graduation/example',
    //     image: 'https://example.com/image.png',
    //     color: 'blue',
    //     icon: '⭐',
    //     border: 'border-blue-200',
    //     bg: 'bg-blue-50 hover:bg-blue-100',
    //     text: 'text-blue-700',
    //     yearText: 'text-blue-500',
    //     borderCard: 'border-blue-100',
    // },
];

const pastGraduations: Graduation[] = [
    {
        name: 'Ceres Fauna',
        year: '2025',
        link: paths.YEAR_2025.graduation.fauna.root.getHref(),
        image: 'https://m1r.ai/O1Iy.png',
        color: 'green',
        icon: '🌿',
        border: 'border-green-200',
        bg: 'bg-green-50 hover:bg-green-100',
        text: 'text-green-700',
        yearText: 'text-green-500',
        borderCard: 'border-green-100',
    },
    {
        name: 'Chloe Sakamata',
        year: '2025',
        link: paths.YEAR_2025.graduation.chloe.root.getHref(),
        image: 'https://m1r.ai/mb83.png',
        color: 'pink',
        icon: '🦈',
        border: 'border-pink-200',
        bg: 'bg-pink-50 hover:bg-pink-100',
        text: 'text-pink-700',
        yearText: 'text-pink-500',
        borderCard: 'border-pink-100',
    },
];

const GraduationIndex = () => {
    return (
        <div className="min-h-screen flex flex-col items-center font-semibold bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50 py-6 px-2 sm:py-12 sm:px-0">
            <div className="flex flex-col items-center mb-4 sm:mb-6">
                <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f31f.png" alt="Sparkle" className="w-12 h-12 sm:w-16 sm:h-16 mb-2 animate-bounce" />
                <h1 className="text-2xl sm:text-4xl mb-2 font-extrabold text-pink-400 drop-shadow-sm tracking-tight text-center">Graduation Index</h1>
                <div className="text-base sm:text-lg text-gray-500 font-normal flex items-center gap-2 text-center">
                    <span>✨ A place to remember our beloved vtubers ✨</span>
                </div>
            </div>
            <div className="w-full max-w-2xl mb-8 sm:mb-12">
                <h2 className="text-lg sm:text-2xl mb-3 sm:mb-4 text-blue-400 font-bold flex items-center gap-2">
                    <span>Recent Graduations</span>
                </h2>
                {recentGraduations.length === 0 ? (
                    <div className="p-4 sm:p-8 rounded-2xl bg-white/70 text-gray-400 text-center shadow-md border border-pink-100">
                        No recent graduations.
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 sm:gap-6">
                        {recentGraduations.map((g) => (
                            <Link to={g.link} className={`transition group`} key={g.name}>
                                <div className={`flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl ${g.bg} shadow-lg border ${g.borderCard} group-hover:scale-105 group-hover:shadow-2xl transition-transform`}>
                                    <img src={g.image} alt={g.name} className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 ${g.border} shadow`} />
                                    <div className="flex flex-col items-center sm:items-start">
                                        <span className={`text-lg sm:text-xl font-bold ${g.text} flex items-center gap-1`}>{g.name}</span>
                                        <span className={`text-xs sm:text-sm ${g.yearText}`}>{g.year}</span>
                                    </div>
                                    <span className="ml-0 sm:ml-auto text-xl sm:text-2xl animate-pulse">{g.icon}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <div className="w-full max-w-2xl">
                <h2 className="text-lg sm:text-2xl mb-3 sm:mb-4 text-pink-400 font-bold flex items-center gap-2">
                    <span>Past Graduations</span>
                </h2>
                {pastGraduations.length === 0 ? (
                    <div className="p-4 sm:p-8 rounded-2xl bg-white/70 text-gray-400 text-center shadow-md border border-pink-100">
                        No past graduations.
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 sm:gap-6">
                        {pastGraduations.map((g) => (
                            <Link to={g.link} className={`transition group`} key={g.name}>
                                <div className={`flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl ${g.bg} shadow-lg border ${g.borderCard} group-hover:scale-105 group-hover:shadow-2xl transition-transform`}>
                                    <img src={g.image} alt={g.name} className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 ${g.border} shadow`} />
                                    <div className="flex flex-col items-center sm:items-start">
                                        <span className={`text-lg sm:text-xl font-bold ${g.text} flex items-center gap-1`}>{g.name}</span>
                                        <span className={`text-xs sm:text-sm ${g.yearText}`}>{g.year}</span>
                                    </div>
                                    <span className="ml-0 sm:ml-auto text-xl sm:text-2xl animate-pulse">{g.icon}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GraduationIndex;