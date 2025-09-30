
import styles from './Home.module.scss'

const cardList = [
    {
        image:"https://images.unsplash.com/photo-1653193245257-2548509f562f?q=80&w=1249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Fresh and Health Salad",
        calories: 60,
        persons: 4,
        price: 2.65,
        ccyid:'$'
    },
    {
        image:"https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Fresh and Health Salad",
        calories: 60,
        persons: 4,
        price: 2.65,
        ccyid:'$'
    },
    {
        image:"https://plus.unsplash.com/premium_photo-1687874107190-ddbef6fdb612?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Fresh and Health Salad",
        calories: 60,
        persons: 4,
        price: 2.65,
        ccyid:'$'
    },
    {
        image:"https://images.unsplash.com/photo-1546471364-f820fd19c9a3?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Fresh and Health Salad",
        calories: 60,
        persons: 4,
        price: 2.65,
        ccyid:'$'
    }
]

function Home() {
    return <div className={styles.wrapper}>
        <div className={styles.wrapperTitle}>
            <h1 className={styles.title}>
                Wake Up Early, <br />
                Eat Fresh & Health
            </h1>
            <h2 className={styles.subTitle}>
                Aside from ther natural good taste and great crunchy <br />
                texture alongside wonderfull color and fragrancé <br />
                eating a large serving of fresh
            </h2>
        </div>
        <div className={styles.cardList}>
            {cardList.map((card, index) =>
                <div key={index} className={styles.cardItem}>
                    <div className={styles.cardImage}>
                        <img src={card.image} alt="" />
                    </div>
                    <div className={styles.cardName}>
                        {card.name}
                    </div>
                    <div className={styles.cardInfo}>
                        <span>{card.calories} calories</span>
                        <span>{card.persons} persons</span>
                    </div>
                    <div className={styles.cardBottom}>
                        <div className={styles.price}>{card.ccyid}{card .price}</div>
                        <div className={styles.buttonAdd}>Add</div>
                    </div>
                </div>)
            }
        </div>
    </div>
}

export default Home