import { useEmailForm } from '../hooks/useEmailForm';

const ContactForm = () => {
    const { formRef, status, handleSubmit } = useEmailForm();

    return (
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form__item">
                <label className="form__item--label" htmlFor="contact-name">
                    Name
                </label>
                <input className="input" id="contact-name" name="user_name" type="text" required  />
            </div>
            
            <div className="form__item">
                <label className="form__item--label" htmlFor="contact-email">
                    Email
                </label>
                <input className="input" id="contact-email" name="user_email" type="text" required  />
            </div>

            <div className="form__item">
                <label className="form__item--label" htmlFor="contact-message">
                    message
                </label>
                <textarea className="input" id="contact-message" name="message" required  />
            </div>

            <button className="form__submit" id="contact__submit" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send it my way"}
            </button>

            <div className={`modal__overlay modal__overlay-success ${status === "success" ? "modal__overlay--visible" : ""}`}>
                Thanks for messageing me! I look forward to speaking with you soon.
            </div>
        </form>
    );
};

export default ContactForm;