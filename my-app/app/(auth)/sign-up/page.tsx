import AuthForm from '@/components/AuthForm';
import React, { useState } from 'react';

const SignUp = () => {
    return (
        <section className='flex-center size-full max-sm:px-6'>
            <AuthForm type="sign-up" />
        </section>
    );
};

export default SignUp;