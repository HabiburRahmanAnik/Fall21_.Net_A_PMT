import classes from './Home.module.css'

const Home = () => {
    return (
       <section className={classes.main}>
            <p className={classes['welcome-mgs']}>Welcome <span>{localStorage.getItem('token')}</span></p>
       </section>
    )
}

export default Home
