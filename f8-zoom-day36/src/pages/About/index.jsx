
import styles from './About.module.scss'
function About() {
    return <div className={styles.wrapper}>
        <h1 className={styles.title}>About</h1>
        <div className="banner">
            <img src="https://media.istockphoto.com/id/453963935/photo/fruits-and-vegetables-at-city-market-in-riga.webp?a=1&b=1&s=612x612&w=0&k=20&c=_7Ows4GmrOgzrA_VDPLCSmPfNIDaXgC0LjqAJ1u_q2s=" alt="" />
        </div>
        <div className={styles.content}>
            <h1>We create over 120+ delicious meal abd recipes that are all fresh and healthy plant-based</h1>
            <div className={styles.itemAbout}>
                <div>01</div>
                <div>Healthy Food</div>
                <div>Dishes made from fresh vegetables with good processing</div>
            </div>
        </div>
    </div>
}

export default About


setTimeout(() => {
    instance.emit('handleGame')
}, 500);