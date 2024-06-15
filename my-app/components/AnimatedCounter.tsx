'use client'
import React from 'react';
import CountUp from 'react-countup/build/CountUp';

interface AnimatedCounterProps {
    amount: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ amount }) => {
    return (
        <div className='w-full'>
            <CountUp
                end={amount}
                decimal=','
                decimals={2}
                duration={2.75}
                prefix='$'
            />
        </div>
    );
};

export default AnimatedCounter;