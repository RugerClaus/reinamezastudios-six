


export const styles = {
    footer: {
        display: "grid",
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        bottom: 0,
        backgroundColor: 'gray',
        width: "100vw",
        height: "5vh"
    },
    header: {
        display: "grid",
        gridTemplateColumns: "repeat(8,1fr)",
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        top: 0,
        maxWidth: "100vw",
        title: {
            gridColumn: "span 4",
            display: "flex",
            backgroundImage: "url('./../Assets/headerImages/Top-Banner.webp')",
            backgroundSize: "100px 100px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        },
        facebook: {
            display: "block",
            gridColumn: "5"
        }
    },
    App: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95vw",
        height: "95vh",
        backgroundColor: "white",
        content: {

        }
    }
}