import useForm from '../lib/useForm'
import Form from './styles/Form'

export default function CreateProduct() {
    const { inputs, handleChange, clearForm, resetForm } = useForm({
        image: '',
        name: 'Nice Shoes',
        price: 5562,
        description: 'Good shoes mate.'
    });
    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            console.log(inputs);
        }}>
            <fieldset>
                <label htmlFor="image">
                        Image
                        <input
                            required
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleChange}
                        />
                    </label>
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
                <label htmlFor="description">
                    Description
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={inputs.description} 
                        onChange={handleChange}
                    ></textarea>
                </label>
                <button type="submit">+ Add Product</button>
            </fieldset>
        </Form>
    )
}