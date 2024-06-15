import React, { useState } from 'react';

interface TransferProps {
    fromAccount: string;
    toAccount: string;
    amount: number;
}

const Transfer: React.FC<TransferProps> = ({ fromAccount, toAccount, amount }) => {
    const [isTransferSuccessful, setIsTransferSuccessful] = useState(false);

    const handleTransfer = () => {
        // Perform the transfer logic here
        // You can make an API call or update the state directly

        // Assuming the transfer is successful, set the state to true
        setIsTransferSuccessful(true);
    };

    return (
        <div>
            <h2>Transfer Details</h2>
            <p>From Account: {fromAccount}</p>
            <p>To Account: {toAccount}</p>
            <p>Amount: {amount}</p>

            {isTransferSuccessful ? (
                <p>Transfer Successful!</p>
            ) : (
                <button onClick={handleTransfer}>Transfer</button>
            )}
        </div>
    );
};

export default Transfer;