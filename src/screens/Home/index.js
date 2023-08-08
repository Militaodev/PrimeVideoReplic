import { FlatList, Image , ScrollView, StyleSheet, Text , TouchableOpacity, View  } from "react-native";

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieTheWheel from "../../assets/movies/the_wheel_of_time.png";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MoviesCard } from "../../components/MoviesCard";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";

export const Home = () => {
    return (
<ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeVideoLogo}/>
                <Image style={styles.amazonLogoImg} source={AmazonLogo}/>
            </View>

            

            <View style={styles.category}>

                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.categoryText}>Tv Shows</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>

            </View>

                
                <TouchableOpacity style={styles.movieImageThumbnail}>
                    <Image source={MovieTheWheel} style={styles.movieImage}/>
                </TouchableOpacity>
                
                <Text style={styles.movieText}>Continue Assistindo</Text>
                <FlatList
                data={MOVIESWATCHING}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard movieURL = {item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
                />
                <Text style={styles.movieText}>Filmes de Crime</Text>
                <FlatList
                data={MOVIESCRIME}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard movieURL = {item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
                />
                <Text style={styles.movieText}>Assista na sua linguagem</Text>
                <FlatList
                data={MOVIESWATCH}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard movieURL = {item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
                />
        </View>
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },

    header: {
        width : "100%",
        paddingTop: 90,
        alignItems : "center",
        justifyContent : "center",
    },

    amazonLogoImg : {
        marginTop : -32,
        marginLeft : 30,

    },
    category : {
        width: "100%",
        flexDirection : "row",
        justifyContent: "space-evenly",
        marginTop : 30,
        marginBottom : 15,
    },

    categoryText: {
        fontSize: 20,
        fontWeight : 700,
        color : "#FFF"
    },
    movieText:{
        color: "#FFF",
        fontSize:18, 
        fontWeight : "bold",
        padding : 15,
    },

    movieImageThumbnail :{
        width : "100%",
        alignItems:"center",
    },

    movieImage : {
        width: "100%",
    },
    contentList:{
        paddingLeft : 18,
        paddingRight: 30,
    },
    contentMovies:{
        backgroundColor: "#232F3E"
    }
});