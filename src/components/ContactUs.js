const ContactUs = () => {
    return (
        <>
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <form>
                <input
                    type="text"
                    className="p-2 m-3 border border-spacing-4"
                    placeholder="name"
                />
                <input
                    type="text"
                    className="p-2 m-3 border"
                    placeholder="message"
                />
                <button className="p-2 m-2 bg-slate-200">Submit</button>
            </form>
        </>
    );
};

export default ContactUs;
