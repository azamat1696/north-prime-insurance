import {ActivityIndicator, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import { getPosts, getPost, getPostsJson, createPost } from "../services";
import {useDispatch, useSelector} from "react-redux";
import {fetchContent, postContent} from "../../features/contentSlice";

export default function Test() {
    const getContent = () => {
        return <ActivityIndicator size="large"/>;
    }
    const dispatch = useDispatch();
    const content = useSelector((state) => state.content);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

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

    return (
       <View>
              <Text>{loading && 'Loading...'} {error}</Text>
               <Text>{JSON.stringify(content)}</Text>

                {users?.map((user)=>{
                    return(
                        <Text key={user.id}>{user.title}</Text>
                    )
                })}
       </View>
    );
}

