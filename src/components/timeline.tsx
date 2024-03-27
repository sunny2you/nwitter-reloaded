import { collection, getDocs, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Tweet from "./tweet";
import { Unsubscribe } from "firebase/database";

export interface ITweet{
    id:string;
    photo?:string;
    tweet:string;
    userId:string;
    username:string;
    createdAt:number;
}

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
`;


export default function Timeline(){
    const [tweets,setTweet]=useState<ITweet[]>([]); //tweets will be an array of itweet
   
    useEffect(()=>{
        let unsubscribe : Unsubscribe | null =null;
        const fetchTweets=async()=>{
            const tweetsQuery=query(
                collection(db,"tweets"),
                orderBy("createdAt","desc"),
                limit(25)

            );
            // const snapshot =await getDocs(tweetsQuery);
            // const tweets= snapshot.docs.map((doc)=>{
            //     const {tweet,createdAt,userId,username,photo}=doc.data();
            //     return{
            //         tweet,
            //         createdAt,
            //         userId,
            //         username,
            //         photo,
            //         id:doc.id,
            //     };
            // });
            unsubscribe= await onSnapshot(tweetsQuery,(snapshot)=>{ //adding a listener to query. deleted, editted, created listener.
                const tweets= snapshot.docs.map((doc)=>{
                        const {tweet,createdAt,userId,username,photo}=doc.data();
                        return{
                            tweet,
                            createdAt,
                            userId,
                            username,
                            photo,
                            id:doc.id,
                        };
                    });
                    setTweet(tweets);
            }); 
        };
        fetchTweets();
        return()=>{
            unsubscribe && unsubscribe(); //teardown, cleanup. useeffect return this when user is not seeing this component
        }
    },[])
    return <Wrapper>
        {tweets.map(tweet=><Tweet key={tweet.id}{...tweet}/>)}
    </Wrapper>
}