import styled from "styled-components";
import PostTweetForm from "../components/post-tweet-form";

const Wrapper=styled.div``;



export default function Home(){
    console.log("home");
    return (
        <Wrapper>
            <PostTweetForm/>
        </Wrapper>
    );
}

