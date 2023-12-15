import Link from 'next/link';

export default function Home() {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-6xl font-bold text-primary">
                            Globetrotter
                        </h1>
                        <p className="py-6 text-lg leading-loose">
                            Globetrotter is a travel app for the modern age.
                        </p>
                        <Link href="/chat" className="btn btn-secondary">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
