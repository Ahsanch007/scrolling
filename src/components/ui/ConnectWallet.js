import React, { useEffect, useState } from 'react';

const ctx = [
    {
        id: 1,
        name: 'SOL',
        img: '/assets/sol.svg'
    },
    {
        id: 2,
        name: 'CARD',
        img: '/assets/ion_card.svg'
    },
    {
        id: 3,
        name: 'USDT',
        img: '/assets/usdt.svg'
    },
    {
        id: 4,
        name: 'USDC',
        img: '/assets/usdc.svg'
    },
];

export const ConnectWallet = () => {
    const targetDate = new Date("2024-12-31T23:59:59"); // Replace with your target date
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [selectedPayment, setSelectedPayment] = useState(ctx[0]); // Default to the first item in ctx

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const handlePaymentChange = (item) => {
        setSelectedPayment(item); // Update selected payment method
    };

    return (
        <div className="max-w-[500px] h-[570px] 2xl:max-w-[600px] 2xl:h-[700px] flex justify-center bgImg ml-auto items-center w-full relative">
            <div className="relative">
                <div className="flex gap-2 max-w-[289px] mx-auto w-full justify-center">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bangers text-[22px] gradient-text">{String(timeLeft.days).padStart(2, '0')}</h1>
                        <h1 className="font-bangers text-[22px] gradient-text">DAYS</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="font-bangers text-[22px] gradient-text">{String(timeLeft.hours).padStart(2, '0')}</h1>
                        <h1 className="font-bangers text-[22px] gradient-text">HOURS</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="font-bangers text-[22px] gradient-text">{String(timeLeft.minutes).padStart(2, '0')}</h1>
                        <h1 className="font-bangers text-[22px] gradient-text">MINUTES</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="font-bangers text-[22px] gradient-text">{String(timeLeft.seconds).padStart(2, '0')}</h1>
                        <h1 className="font-bangers text-[22px] gradient-text">SECONDS</h1>
                    </div>
                </div>
                <h1 className="max-w-[191px] mx-auto text-white text-center lg:text-[24px] font-normal Bangers">
                    $ROBOCAT presale Phase 1
                </h1>
                <h1 className="font-bangers lg:text-[56px] gradient-text leading-[56px] text-center">
                    $2,000,000
                </h1>
                <p className="text-[#FFFFFFB2] text-center text-[14px] font-normal">Raised</p>
                <div className="relative flex justify-center items-center gap-3">
                    <div className="h-[0.5px] w-[66px] bg-white bg-opacity-[52%]"></div>
                    <p className="text-[12px] font-semibold">1 $ROBOCAT = $0.12345</p>
                    <div className="h-[0.5px] w-[66px] bg-white opacity-[52%]"></div>
                </div>
                <div className="py-4 max-w-[289px] mx-auto w-full grid grid-cols-2 gap-3">
                    {ctx.map((item) => (
                        <div
                            key={item.id}
                            className="border bg-[#2c3056] border-[#FFFFFF1A] text-[14px] cursor-pointer text-[#FFFFFFCC] font-semibold py-[9px] pl-[14px] w-full flex gap-2.5"
                            onClick={() => handlePaymentChange(item)}
                        >
                            <img src={item.img} className="w-[22px] h-auto" alt={item.name} />
                            {item.name}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 pb-12 max-w-[289px] mx-auto w-full gap-3">
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between">
                            <span className="text-[#FFFFFF80] text-[14px] font-normal">
                                Pay with {selectedPayment.name}
                            </span>
                            <span className="text-[#FFFFFF80] text-[14px] font-normal">Max</span>
                        </div>
                        <div className="relative">
                            <input
                                type="number"
                                placeholder="0"
                                style={{ boxSizing: 'border-box' }}
                                className="py-[9px] outline-none px-4 border border-[#FFFFFF1A] font-semibold text-white placeholder:text-white w-full bg-[#2c3056]"
                            />
                            <img
                                src={selectedPayment.img}
                                className="w-[22px] h-auto absolute right-[10px] top-[15px]"
                                alt={selectedPayment.name}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between">
                            <span className="text-[#FFFFFF80] text-[14px] font-normal">Receive ROBOCAT</span>
                        </div>
                        <div className="relative">
                            <input
                                type="number"
                                placeholder="0"
                                style={{ boxSizing: 'border-box' }}
                                className="py-[9px] outline-none px-4 border border-[#FFFFFF1A] font-semibold text-white placeholder:text-white w-full bg-[#2c3056]"
                            />
                        </div>
                    </div>
                </div>
                <div className="max-w-[289px] w-full mx-auto relative">
                    <button className="w-full py-4 flex justify-center bottom-[-30px] absolute bg-custom-gradient font-[800] text-[14px]">
                        CONNECT WALLET
                    </button>
                </div>
            </div>
        </div>
    );
};
