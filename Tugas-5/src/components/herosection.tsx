"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "Poster Anime",
            subtitle: "Poster ukuran A3 dan A4 dengan kertas tebal dan warna yang tajam.",
            imageUrl: "/images/banner_01.jpg",
        },
        {
            title: "Wallpaper Digital",
            subtitle: "Wallpaper resolusi tinggi untuk HP dan laptop.",
            imageUrl: "/images/banner_02.jpg",
        },
        {
            title: "Terima Custom",
            subtitle: "Bisa request desain sesuai karakter favorit kamu.",
            imageUrl: "/images/banner_03.jpg",
        }
    ]

    return (
        <Carousel id="beranda" fade interval={ 4000 }>
            { slides.map((slide, index) => (
                <Carousel.Item key={ index }>
                    <div
                        className="banner"
                        style={{
                            backgroundImage:`url(${ slide.imageUrl })`,
                            backgroundSize:"cover",
                            backgroundPosition:"center",
                        }}>
                    </div>
                    <Carousel.Caption>
                        <h1 className="fw-bold">{ slide.title }</h1>
                        <p>{ slide.subtitle }</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
            )}
        </Carousel>
    )
}

export default HeroSection;
