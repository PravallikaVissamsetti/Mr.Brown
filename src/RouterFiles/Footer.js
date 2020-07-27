import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer class="">
                <nav class="navbar navbar-expand-lg py-2 nav-styles1 ">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="ml-auto" href="/">
                                <img alt="Mr.Brown" src="https://www.mrbrownbakery.com/media/wysiwyg/milano/default/png_brown_logo.png" width="110" height="32" />
                            </Link>
                        </li>
                        <li>
                            <Link class="ml-5 mr-2 text-white" href="#">About us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="mx-2 text-white " href="#">Feed back</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="mx-2 text-white " href="#">Online help</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="mx-2 text-white " href="#">Corporate queries</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="mx-2 text-white " href="#">QR</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="mx-2 text-white" href="#">Blog</Link>
                        </li>
                        <li>
                            <Link class="mx-2 text-white" href="#">Site Map</Link>
                        </li>
                        <li>
                            <Link class="mx-2 text-white" href="#">Search terms</Link>
                        </li>
                        <li>
                            <Link class="mx-2 text-white" href="#">Advanced research</Link>
                        </li>
                    </ul>
                    <div class=" ml-auto ">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                
                            </li>
                            <li class="nav-item ">
                                <Link class="ml-1" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/facebook.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="ml-1" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/linkedin.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="ml-1" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/twitter.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="ml-1" href="#"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/youtube.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" /></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
