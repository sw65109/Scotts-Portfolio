import ContactForm from './ContactForm';
import type { ModalContent } from '../types/modal';
import { useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: ModalContent;
}

function Modal({ isOpen, onClose, content }: ModalProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        if (!isOpen || !modalRef.current) return;

        modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        modalRef.current.focus({ preventScroll: true });
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal modal--visible">
            <div className="modal__half modal__about">
                <h3 className="modal__title modal__title--about">{content.about.title}</h3>
                <h4 className="modal__sub-title modal__subtitle--about">{content.about.subtitle}</h4>
                <p className="modal__para">{content.about.body}</p>
                <div className="modal__languages">
                    {content.about.skills.map((skill) => (
                        <figure className="modal__language" key={skill.label}>
                            <img className="modal__language--img" src={skill.icon} alt={skill.label} loading="lazy" />
                            <span className="language__name">{skill.label}</span>
                        </figure>
                    ))}
                </div>
            </div>

            <div className="modal__half modal__contact">
                <button type="button" className="modal__exit click"  onClick={onClose} aria-label="Close contact form">
                    <i className='fas fa-times' />
                </button>
                <h3 className="modal__title modal__title--contact">{content.about.contactTitle}</h3>
                <h3 className="modal__sub-title modal__sub-title--contact">{content.about.contactSubtitle}</h3>
                <ContactForm />
            </div>
        </div>
    );
}

export default Modal;