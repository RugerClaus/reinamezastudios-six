import { styles } from "./../functionalityAndStyling/styles"

const Footer = () => {
    
    const today = new Date()

    return (
    <footer style={styles.footer}>
        <p>Copyright &copy; Reina Meza Studios {today.getFullYear()}</p>
    </footer>
    )
}

export default Footer