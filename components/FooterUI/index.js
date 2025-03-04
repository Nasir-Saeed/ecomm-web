"use client"
import Link from "next/link";
import { Container, Form, InputGroup } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import classes from './FooterUI.module.css';

export default function FooterUI() {
    return (
        <div className={classes.footer_container}>
            <Container>
                <div className={classes.footer_box}>
                    <div md={4} className="mb-4 mb-md-0">
                        <div className={classes.footer_logo}>
                            <h1 className="fw-bold">Demos</h1>
                        </div>
                        <p className={classes.footer_text}>
                            Enjoy fast delivery, secure payments, and premium quality, guaranteed. Elevate your shopping experience with NeoCart today!
                        </p>
                        <div className={classes.social_icons}>
                            <Link href="/"><FaTwitter className="mx-2" color="#66fcf1" size={20} /></Link>
                            <Link href="/"><FaFacebookF className="mx-2" color="#66fcf1" size={20} /></Link>
                            <Link href="/"><FaPinterestP className="mx-2" color="#66fcf1" size={20} /></Link>
                            <Link href="/"><FaInstagram className="mx-2" color="#66fcf1" size={20} /></Link>
                        </div>
                    </div>


                    <div className="mb-4 mb-md-0">
                        <h5 className={classes.footer_title}>Explore</h5>
                        <ul className={classes.footer_links}>
                            <li><Link href="/">About Company</Link></li>
                            <li><Link href="/">Meet The Team</Link></li>
                            <li><Link href="/">News & Media</Link></li>
                            <li><Link href="/">Our Projects</Link></li>
                            <li><Link href="/">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="mb-4 mb-md-0">
                        <h5 className={classes.footer_title}>Contact</h5>
                        <p><FaEnvelope className="me-2" color="#66fcf1" size={20} />info@demos.com</p>
                        <p><FaPhone className="me-2" color="#66fcf1" size={20} />+92 312 888 0000</p>
                        {/* <p className={classes.map_icon}><FaMapMarkerAlt className="me-2" color="#66fcf1" size={20} /><p className="m-0">abc Road Main Street, 1600 Paris, USA</p> </p> */}
                    </div>


                    <div>
                        <h5 className={classes.footer_title}>Newsletter</h5>
                        <InputGroup className="animated-input">
                            <Form.Control type="email" placeholder="Email Address" className="rounded-start" />
                            <InputGroup.Text className="bg-primary text-white rounded-end">📩</InputGroup.Text>
                        </InputGroup>
                        <Form.Check className="mt-3" label="I agree to all your terms and policies" />
                    </div>

                </div>
                <div className={`${classes.footer_bottom} mt-4 text-center py-3 border-top`}>
                    &copy; All Copyright 2025 by Demos
                </div>
            </Container>


        </div>
    );
}
