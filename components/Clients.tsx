import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials } from '@/data'

const Clients = () => {
    return (
        <div id="projects" className="py-20">
            <h1 className="heading">
                Algumas palavras de alguns {' '}
                <span className="text-purple">clientes satifeitos</span>
            </h1>
            <div className="flex flex-wrap items-center">
                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'
                />
            </div>
        </div>
    )
}

export default Clients