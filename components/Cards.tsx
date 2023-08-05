import React from 'react'
import { Card} from 'antd';
import Image from "next/image";

export default function Cards({
    title,
    description,
    image,
    author,
    large,
    onClick,
    onCardClick,
}: {
    title: string;
    description: string;
    image: string;
    author: string;
    large?: boolean
    onClick: () => void
    onCardClick?: () => void
}) {
    return (
        <>
            <div
                className={`relative col-span-1  ${large ? "md:col-span-2" : ""
                    }`}
            >

                <Card
                    // onClick={onCardClick}
                    hoverable
                    style={{ minWidth: 100, maxWidth: 850, minHeight: 400 }}
                    cover={<Image src={image}
                        alt={title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: '240px', }}
                        priority />}
                >
                    <div className='flex flex-col gap-4'>
                        <button onClick={onClick}>
                            <h2 style={{
                                height: '3rem',
                                lineHeight: '1.5rem',
                                overflow: 'hidden',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                            }}
                                className="text-black text-lg font-bold md:text-xl md:font-normal underline hover:text-blue-300">
                                {title}
                            </h2>
                        </button>


                        <p style={{
                            height: '3rem',
                            lineHeight: '1.5rem',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                        }}>
                            {description}
                        </p>
                    </div>
                    <p className='z-20 mt-5 flex justify-end'>{author}</p>
                </Card >
            </div >
        </>
    )
}