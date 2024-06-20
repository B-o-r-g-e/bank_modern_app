import styles from './style.js'

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                Navbar
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}}`}>
            <div className={`${styles.boxWidth}`}>
                Hero
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}} ${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
                Stats
                Business
                Billing
                Card deal
                Testimonial
                Client
                CTA
                Footer
            </div>
        </div>

    </div>
)

export default App;