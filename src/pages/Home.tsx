
import { useState } from "react"

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % 3)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + 3) % 3)
    }

    return (
        <div className="bg-black min-h-screen">
            {/* Hero Carousel Section */}
            <section className="relative h-screen overflow-hidden">
                <div className="relative w-full h-full">
                    {/* Slide 1 */}
                    <div
                        className={
                            currentSlide === 0
                                ? "absolute inset-0 transition-transform duration-700 ease-in-out translate-x-0"
                                : currentSlide > 0
                                    ? "absolute inset-0 transition-transform duration-700 ease-in-out -translate-x-full"
                                    : "absolute inset-0 transition-transform duration-700 ease-in-out translate-x-full"
                        }
                    >
                        <div className="relative w-full h-full bg-gradient-to-r from-black via-gray-900 to-black">
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
                            <img
                                src="https://images.unsplash.com/photo-1544838447-e08c8c6006ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
                                alt="Premium Audio Collection"
                                className="absolute right-0 top-0 w-3/5 h-full object-cover opacity-80"
                            />

                            <div className="relative z-10 flex items-center h-full">
                                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="max-w-2xl">
                                        <div className="mb-4">
                                            <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                                Up to 40% Off
                                            </span>
                                        </div>
                                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                                            FF Ultra Soft Long Johns Thermal Innerwear Set
                                        </h1>
                                        <h2 className="text-xl sm:text-2xl lg:text-3xl text-orange-400 mb-6 font-medium">

                                            FREE delivery Thursday, 31 July. 
                                        </h2>
                                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                            FF Ultra Soft Long Johns Thermal Innerwear Set


                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
                                                Only 5 left in stock.

                                            </button>
                                            <button className="border-2 border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-orange-500/10">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div
                        className={
                            currentSlide === 1
                                ? "absolute inset-0 transition-transform duration-700 ease-in-out translate-x-0"
                                : currentSlide > 1
                                    ? "absolute inset-0 transition-transform duration-700 ease-in-out -translate-x-full"
                                    : "absolute inset-0 transition-transform duration-700 ease-in-out translate-x-full"
                        }
                    >
                        <div className="relative w-full h-full bg-gradient-to-r from-black via-gray-900 to-black">
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
                            <img
                                src="https://images.unsplash.com/photo-1619686042132-847f7fd5cef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
                                alt="Smart Tech Essentials"
                                className="absolute right-0 top-0 w-3/5 h-full object-cover opacity-80"
                            />

                            <div className="relative z-10 flex items-center h-full">
                                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="max-w-2xl">
                                        <div className="mb-4">
                                            <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                                New Arrivals
                                            </span>
                                        </div>
                                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                                            Women's Kanjivaram Art Silk Saree Soft Banarasi Style Sari
                                        </h1>
                                        <h2 className="text-xl sm:text-2xl lg:text-3xl text-orange-400 mb-6 font-medium">
                                            Sari With Blouse Piece
                                        </h2>
                                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                            C J Enterprise Women's Kanjivaram Art Silk Saree Soft Banarasi Style Sari
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
                                                #1 Best Seller
                                            </button>
                                            <button className="border-2 border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-orange-500/10">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div
                        className={
                            currentSlide === 2
                                ? "absolute inset-0 transition-transform duration-700 ease-in-out translate-x-0"
                                : currentSlide > 2
                                    ? "absolute inset-0 transition-transform duration-700 ease-in-out -translate-x-full"
                                    : "absolute inset-0 transition-transform duration-700 ease-in-out translate-x-full"
                        }
                    >
                        <div className="relative w-full h-full bg-gradient-to-r from-black via-gray-900 to-black">
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
                            <img
                                src="https://media.istockphoto.com/id/1836816245/photo/seductive-young-woman-in-bed.webp?a=1&s=612x612&w=0&k=20&c=gQlm0MWJ1KeTNR3-lPmo5IqKZ7W7JFXbj83za31QCls="
                                alt="Gaming Gear Pro"
                                className="absolute right-0 top-0 w-3/5 h-full object-cover opacity-80"
                            />

                            <div className="relative z-10 flex items-center h-full">
                                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="max-w-2xl">
                                        <div className="mb-4">
                                            <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                                In stock
                                            </span>
                                        </div>
                                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                                            Visit the London Hills Store
                                        </h1>
                                        <h2 className="text-xl sm:text-2xl lg:text-3xl text-orange-400 mb-6 font-medium">
                                            Oversized Tshirt
                                        </h2>
                                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                            London Hills Women's Cotton Blend Oversized Fit
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
                                                Ends in 01:25:51
                                            </button>
                                            <button className="border-2 border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-orange-500/10">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-orange-500/80 text-white p-3 rounded-full transition-all duration-300 z-20"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-orange-500/80 text-white p-3 rounded-full transition-all duration-300 z-20"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                    <button
                        onClick={() => setCurrentSlide(0)}
                        className={
                            currentSlide === 0
                                ? "w-8 h-3 rounded-full transition-all duration-300 bg-orange-500"
                                : "w-3 h-3 rounded-full transition-all duration-300 bg-gray-500 hover:bg-gray-400"
                        }
                    />
                    <button
                        onClick={() => setCurrentSlide(1)}
                        className={
                            currentSlide === 1
                                ? "w-8 h-3 rounded-full transition-all duration-300 bg-orange-500"
                                : "w-3 h-3 rounded-full transition-all duration-300 bg-gray-500 hover:bg-gray-400"
                        }
                    />
                    <button
                        onClick={() => setCurrentSlide(2)}
                        className={
                            currentSlide === 2
                                ? "w-8 h-3 rounded-full transition-all duration-300 bg-orange-500"
                                : "w-3 h-3 rounded-full transition-all duration-300 bg-gray-500 hover:bg-gray-400"
                        }
                    />
                </div>
            </section>

        </div>
    )
}

