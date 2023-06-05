'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { ColorRing, Oval, ThreeDots } from 'react-loader-spinner';


interface Props {
    title: string,
    imgSrc: string
}

export default function Card({ title, imgSrc }: Props) {

    const fetchData = async () => {
        const data = await fetch("/api/nekaj",
                                    { 
                                        method: "POST", 
                                        body: JSON.stringify({ title: title.toLowerCase() }),
                                        headers: { "Content-Type": "application/json" }
                                    })
        return await data.json()
    }
    
    const setData = async (score: any) => {
        await fetch("/api", 
                    { 
                        method: "POST", 
                        body: JSON.stringify({ key: title.toLowerCase(), val: score }),
                        headers: { "Content-Type": "application/json" }
                    })
    }

    const [score, setScore] = useState(0);
    const [isLoading, setIsloading] = useState(true);

    useEffect(()=> {
        fetchData().then((data)=>{
            setScore(data)
            setIsloading(false)
        }
        );
    }, [])

    const Add = () => {
        setData(score+1)
        setScore(score+1)
    }

    const Subtract = () => {
        setData(score-1)
        setScore(score-1)
    }

    return (
        <div style={{textAlign: "center"}}>
            <article>
                <h3>{title}</h3>
                <Image src={imgSrc} alt='' style={{borderRadius: "50%"}} width={200} height={500}/>
                <h1>
                    {isLoading ? <ThreeDots 
                                    height="80" 
                                    width="80" 
                                    radius="9"
                                    color="#4fa94d" 
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    visible={true}
                                    />
                    : score}
                </h1>
                <button onClick={Add}>+</button>
                <button onClick={Subtract}>-</button>
            </article>
        </div>
)
}