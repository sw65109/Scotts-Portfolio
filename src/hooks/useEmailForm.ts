import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

type Status = 'idle' | 'loading' | 'success' | 'error';

const resetDelay = 4000;

export function useEmailForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<Status>('idle');

    useEffect(() => {
        emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formRef.current) return;

        setStatus('loading');
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current
            );
            formRef.current.reset();
            setStatus('success');
            setTimeout(() => setStatus('idle'), resetDelay);
        } catch (error) {
            console.error('EmailJs error', error);
            alert('The email service is temporarily unavailabe. Please contanct me directly at sjweller65109@gmail.com.');
            setStatus('error');
            setTimeout(() => setStatus('idle'), 1000);
        }
    };

    return { formRef, status, handleSubmit }
}