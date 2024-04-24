import { LoaderContainer, LoaderDiv } from "./Loader.style";

// Loader component function
export default function Loader() {
    return (
        <LoaderContainer>
            <LoaderDiv></LoaderDiv>
            <p>Loading questions...</p>
        </LoaderContainer>
    );
}
