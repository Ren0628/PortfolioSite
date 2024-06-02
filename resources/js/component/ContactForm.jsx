import { useForm } from "@inertiajs/react";

function ContactForm() {
    const { data, setData, post, reset } = useForm({
        name: "",
        email: "",
        comment: "",
    });

    const submit = (e) =>  {
        e.preventDefault()
        
        post(route('contact.store'));

        reset();
    }

    return (
        <div className="contact_form mt-10 mx-auto">
            <form onSubmit={submit}>
                <div className="flex mb-4">
                    <div className="w-1/2">
                        <label className="block" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            autoComplete="name"
                            className="w-full"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            autoComplete="email"
                            className="w-full"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block" htmlFor="comment">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        className="w-full h-36"
                        value={data.comment}
                        onChange={(e) => setData("comment", e.target.value)}
                        required
                    />
                </div>
                <div className="mt-4 flex justify-center"><button type="submit">SEND</button></div>
            </form>
        </div>
    );
}

export default ContactForm;
