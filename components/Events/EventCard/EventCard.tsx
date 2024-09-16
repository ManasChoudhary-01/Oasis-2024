import React from "react";
import styles from "./eventcard.module.scss";

import { StaticImageData } from "next/image";
import Image from "next/image";

interface EventCardProps {
    name: string,
    desc: string,
    img: StaticImageData,
}

export default function EventCard({ name, desc, img }: EventCardProps) {

    return (
        <>
            <div className={styles.card}>
                <div className={styles.eventName}>
                    <h2>{name}</h2>
                </div>
                <div className={styles.eventInfo}>
                    <Image
                        src={img}
                        alt={name}
                        className={styles.eventImg}
                        draggable={false}
                    />
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}