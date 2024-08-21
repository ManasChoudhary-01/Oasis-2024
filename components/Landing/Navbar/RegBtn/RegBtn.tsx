import styles from './regbtn.module.scss'

import Link from 'next/link'

export default function RegBtn() {
    return (
        <Link href="/Registration">
            <div className={styles.btnwrapper}>
                <div className={styles.btnborder}>
                    <div className={`${styles.circlewrapper} ${styles.top}`}>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                    </div>
                    <div className={`${styles.circlewrapper} ${styles.bottom}`}>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                    </div>
                    <div className={`${styles.circlewrapper} ${styles.curve}`}>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                    </div>
                    <div
                        className={`${styles.circlewrapper} ${styles.curve} ${styles.left}`}
                    >
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                        <div className={`${styles.circle} bulb`}></div>
                    </div>
                    <div className={styles.register}>register</div>
                </div>
            </div>
        </Link>
    )
}