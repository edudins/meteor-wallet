export const ContactForm = () => (
    <form>
        <div>
            <label htmlFor="name">
                Name:
            </label>
            <input id="name" type="text"/>
        </div>
        <div>
            <label htmlFor="email">
                Email:
            </label>
            <input id="name" type="email"/>
        </div>
        <div>
            <label htmlFor="imageURL">
                ImageURL:
            </label>
            <input id="imageURL" type="text"/>
        </div>
        <div>
            <button>Save Contact</button>
        </div>
    </form>
)