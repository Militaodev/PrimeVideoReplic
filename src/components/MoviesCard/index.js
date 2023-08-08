import { StyleSheet ,Image, TouchableOpacity } from "react-native"

export const MoviesCard = (props) => {
    return (
        <TouchableOpacity>
            <Image style={styles.img } source={props.movieURL} alt="imagem nao carregada"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img:{
        marginRight : 20,
    }
})