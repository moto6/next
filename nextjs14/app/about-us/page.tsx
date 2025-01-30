import React from "react";
import {Metadata} from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us",
}

export default function AboutUsPage() {
    const images = [
        "/img/desc1.webp",
        "/img/desc2.webp",
        "/img/desc3.webp",
    ];

    const imgSize = {width: 400, height: 400};
    return (
        <div className="container">
            <div
                id="carouselIndicators"
                className="carousel slide"
                data-bs-ride="carousel"  // 자동 회전
                data-bs-interval="3000"   // 3초 간격으로 회전
            >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src="/img/desc1.webp"
                               width={imgSize.width}
                               height={imgSize.height}
                               className="d-block w-100"
                               alt="..."
                               style={{ width: "auto", height: "auto" }}
                               unoptimized
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src="/img/desc2.webp"
                               width={imgSize.width}
                               height={imgSize.height}
                               className="d-block w-100"
                               alt="..."
                               style={{ width: "auto", height: "auto" }}
                               unoptimized
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src="/img/desc3.webp"
                               width={imgSize.width}
                               height={imgSize.height}
                               className="d-block w-100"
                               alt="..."
                               style={{ width: "auto", height: "auto" }}
                               unoptimized
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>

                {/* Carousel Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossOrigin="anonymous"></script>
        </div>
    );
}
