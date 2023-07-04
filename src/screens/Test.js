import {ActivityIndicator, Text, View, StyleSheet, Button} from 'react-native';
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import { getPosts, getPost, getPostsJson, createPost } from "../services";
import {useDispatch, useSelector} from "react-redux";
import {fetchContent, postContent} from "../../features/contentSlice";
import CustomToast from "../../components/shared/CustomToast";
import {DoneSuccessIcon} from "../../Icons";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";

export default function Test() {
    const getContent = () => {
        return <ActivityIndicator size="large"/>;
    }

    // redux toolkit verileri useSelector ile alıyoruz
    // useDispatch ile de actionları çalıştırıyoruz
    const dispatch = useDispatch();
     const content = useSelector((state) => state.content);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const [showToast, setShowToast] = useState(true);

    const toggleToast = () => {
        setShowToast(!showToast);
    };





    const [users , setUsers] = useState([])

    useEffect(()=>{
        dispatch(fetchContent())
       // dispatch(postContent({title: 'test'}))
     /*   getPosts().then((response)=>{
                setUsers(response)
            })
        getPost(2).then((response)=>{
            console.log('sassas',response)
        })

        createPost({title: 'test'}).then((response)=>{
            console.log('create',response)
        })

        getPostsJson({title: 'test'}).then((response)=>{
            console.log('postJson',response)
        });*/
    },[]);




    const sheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

    // callbacks
    const handleSheetChange = useCallback((index) => {
        console.log("handleSheetChange", index);
    }, []);
    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);

    return (
             <View style={styles.container}>
                <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
                <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
                <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
                <Button title="Close" onPress={() => handleClosePress()} />
                <BottomSheet
                    ref={sheetRef}
                    snapPoints={snapPoints}
                    onChange={handleSheetChange}
                    enablePanDownToClose={true}
                >
                    <BottomSheetView>
                        <Text>Awesome 🔥</Text>
                    </BottomSheetView>
                </BottomSheet>
    <View style={styles.overlay} />


          {/*  <View>
                */}
                {/*         <Text>{loading && getContent()} {error}</Text>
               <Text>{JSON.stringify(content)}</Text>

                {users?.map((user)=>{
                    return(
                        <Text key={user.id}>{user.title}</Text>
                    )
                })}*/}

                {/*


           {showToast && <CustomToast message="Tebrikler giriş işleminiz başarılı oldu" svg={<DoneSuccessIcon />} interval={3000} onDismiss={()=>toggleToast()}/>}

*/}



        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});


