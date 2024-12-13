'use client';
import { SignIn, useUser } from '@clerk/nextjs'

export default function Page() {
    const styles = {
        mainDiv: {
            width: '100%',
            height: '100vh',
            justifyContent: 'center',
            display: 'flex',
            backgroundColor: 'white',
            alignItems: 'center',
        },
        inputText: {
            padding: "10px",
            color: "red",
        },
    };

    // const { user } = useUser()
    // if (!user) {
    //     return (
    //         <div style={styles.mainDiv}>
    //             <SignIn />
    //         </div>
    //     )
    // }

    return <SignIn />
}