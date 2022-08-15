import useForm from '../lib/useForm'

export default function CreateProduct() {
    const { inputs, handleChange } = useForm({
        name: 'Nice Shoes',
        price: 5562,
        description: 'Good shoes mate.'
    });
    return (
        <form>
            <label htmlFor="name">
                Name
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={inputs.name} 
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="price">
                Name
                <input
                    type="number"
                    id="Price"
                    name="price"
                    placeholder="price"
                    value={inputs.price} 
                    onChange={handleChange}
                />
            </label>
        </form>
    )
}