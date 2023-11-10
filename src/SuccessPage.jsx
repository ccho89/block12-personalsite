import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SuccessPage() {
    const navigate = useNavigate();
    return (
    <div className='success'>
        <h3>You've successfully submitted your form!</h3>

        <button style={{width: '200px'}} onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}