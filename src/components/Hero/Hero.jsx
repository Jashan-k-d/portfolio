import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Jashanjot Kaur Dhillon</h1>
                <p className={styles.description}>
                    I'm Web and Software developer Student, specialize in creating responsive, dynamic websites and applications.Feel free to explore my work, and reach out if you'd like to learn more!
                </p>
                <div className="btn"><a href="mailto:jashanjot-kaur.dhillon@mohawkcollege.ca" className={styles.contactBtn}>
                    Contact Me
                </a>
                    <a
                        href="/cv.pdf"
                        className={styles.contactBtn}
                        download="Jashanjot-Dhillon-CV.pdf">
                        Download CV
                    </a></div>

            </div>
            <img
                src={getImageUrl("hero/heroImage1.jpeg")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
