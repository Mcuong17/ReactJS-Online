import Button from "../../components/Button"
import clsx from "clsx"
import styles from "./ButtonStyle.module.scss"
function ButtonStyle() {
    return <div className={styles.wrapper}>
         <h1 className={styles.title}>Style Button Large</h1>
            <div class={styles.wrapperButton}>
                <Button primary size="large"> Primary Button</Button> 
                <Button secondary size="large"> Secondary Button</Button> 
            </div>

          <h1 className={styles.title}>Style Button Medium</h1>
            <div class={styles.wrapperButton}>
                <Button primary size="medium"> Medium Button</Button> 
                <Button secondary size="medium"> Medium Button</Button> 
            </div>

             <h1 className={styles.title}>Style Button Small</h1>
            <div class={styles.wrapperButton}>
                <Button primary size="small"> Medium Button</Button> 
                <Button secondary size="small"> Medium Button</Button> 
            </div>

            <h1 className={styles.title}>Other Style Button</h1>
             <div class={styles.wrapperButton}>
                <Button disabeld size="large"> Disabeld</Button>
                 <Button primary loading size="large"> Loading</Button>  
                 <Button primary Onclick={() => alert('Click me!!!')} size="large"> Click me!</Button>  
                 <Button primary disabeld Onclick={() => alert('Click me disabled!!!')} size="large"> Click me!</Button>  
                 <Button primary loading Onclick={() => alert('Click me disabled!!!')} size="large"> Click me!</Button>  
            </div>

             <h1 className={styles.title}>Custom Style Button</h1>
             <div class={styles.wrapperButton}>
                <Button primary size="large" className={clsx(styles.buttonLage, styles.primary)}> Success</Button>
                <Button primary size="large" className={clsx(styles.buttonLage, styles.secondary)}>  Error</Button>
            </div>

        </div>
}

export default ButtonStyle