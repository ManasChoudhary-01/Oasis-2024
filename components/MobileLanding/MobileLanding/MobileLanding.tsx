"use client";

import styles from "./mobileLanding.module.scss";
import Image from "next/image";

import MobileRegBtn from "@/components/MobileLanding/RegBtn/RegBtn";
import MobileHeading from "@/components/MobileLanding/AboutUsHeading/MobileHeading";
import VideoCarousel from "@/components/MobileLanding/VideoCarousel/VideoCarousel";
import Artist from "@/components/MobileLanding/Artist/Artist";
import ContactUsMobile from "@/components/MobileLanding/ContactUs/ContactUs";

import slotMachine2D from "@/assets/Landing/slotMachine2D2.png";

import profShowsBackground from "@/assets/MobileLanding/ProfShowsMobile/profShowsBackgroundMobile.png";
import grungeBackground from "@/assets/MobileLanding/ProfShowsMobile/GrungeMobile.png";
import vishal from "@/assets/MobileLanding/ProfShowsMobile/VishalMishra.png";
import seedheMaut from "@/assets/MobileLanding/ProfShowsMobile/SeedheMaut.png";
import yellowDiary from "@/assets/MobileLanding/ProfShowsMobile/YellowDiary.png";

export default function MobileLanding() {
  return (
    <main className={styles.mobileLandingWrapper}>
      <div className={styles.landing}>
        <Image
          src={slotMachine2D}
          alt="2d slot machine"
          className={styles.slotMachine}
        />
        <MobileRegBtn />
        <div className={styles.fade}></div>
      </div>
      <div className={styles.aboutUs}>
        <MobileHeading
          text="About Us"
          showArrows={true}
          style={{}}
          textStyles={{}}
        />
        <p className={styles.aboutUsText}>
          Oasis, the annual cultural extravaganza of Birla Institute of
          Technology and Science, Pilani, has been a vibrant part of
          India&apos;s cultural tapestry since 1971. Managed entirely by
          students, it&apos;s a dazzling showcase of talent in Dance, Drama,
          Literature, Comedy, Fashion, and Music. It&apos;s where dreams come
          alive, laughter fills the air, and creativity knows no bounds. Step
          into the world of Oasis, where youth&apos;s boundless potential
          shines.
        </p>
        <VideoCarousel
          videoArray={["7MHVWCrJppk", "ZCrClSBM1ns", "krsrGOqnAN0"]}
        />
        {/*0BYgHIMnz50*/}
        {/*<AllEventsBtn/>*/}
      </div>
      <div style={{ position: "relative" }}>
        <MobileHeading
          text="Prof Shows"
          showArrows={false}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            pointerEvents: "auto",
          }}
          textStyles={{
            fontFamily: "'Lostar', sans-serif",
            fontWeight: "normal",
            textShadow: "0px 0px 5px rgba(255, 193, 114, 0.30)",
            background:
              "linear-gradient(180deg, #876D24 -18.6%, #F3D57B 18.4%, #B69637 68.61%, #DCBF69 113.54%)",
            backgroundClip: "text",
            fontSize: 44,
          }}
        />
      </div>
      <div className={styles.profShows}>
        <div className={styles.artistContainer}>
          <Artist
            image={vishal}
            reverse={false}
            name="Vishal Mishra"
            date={26}
          />
          <Artist
            image={seedheMaut}
            reverse={true}
            name="Seedhe Maut"
            date={25}
          />
          <Artist
            image={yellowDiary}
            reverse={false}
            name="The Yellow Diary"
            date={24}
          />
        </div>
        <Image
          src={profShowsBackground}
          alt="Background image for prof shows page"
          className={styles.profShowsBackground}
        />
        <Image
          src={grungeBackground}
          alt="grunge texture"
          className={styles.profShowsBackground}
        />
      </div>
      <div className={styles.contactUs}>
        <ContactUsMobile />
      </div>
    </main>
  );
}
