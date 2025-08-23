import {useRouter} from 'next/router';

export default function userID(){
    const router = useRouter();
    const {id} = router.query;

    return(
        <>
            <h1>Dynamic Routing </h1>
            <p>Done by : {id}</p>
        </>
    );
}