import React, { useState } from "react";

function ProductForm() {
    let [pName, updateName] = useState("");
    let [pPrice, updatePrice] = useState("");
    let [pDescription, updateDescription] = useState("");
    let [pAvailable, updateAvailable] = useState(false);
    let [pImageUrl, updateUImageUrl] = useState("");

    // let [userInput, updateUserInput] = useState({
    //     pName: "",
    //     pPrice: "",
    //     pDescription: "",
    //     pAvailability: "",
    //     pImage: "",
    // });

    function nameInputHandler(event) {
        updateName(event.target.value);
        // updateUserInput({
        //     ...userInput,
        //     pName: event.target.value,
        // });
        // updateUserInput((prevState) => {
        //     return { ...prevState, pName: event.target.value };
        // });
    }
    function priceInputHandler(event) {
        updatePrice(event.target.value);
        // updateUserInput({
        //     ...userInput,
        //     pPrice: event.target.value,
        // });
    }
    function descriptionInputHandler(event) {
        updateDescription(event.target.value);
        // updateUserInput({
        //     ...userInput,
        //     pDescription: event.target.value,
        // });
    }
    function availabilityInputHandler(event) {
        updateAvailable(event.target.checked);
        // updateUserInput({
        //     ...userInput,
        //     pAvailability: event.target.value,
        // });
    }
    function imageInputHandler(event) {
        updateUImageUrl(event.target.value);
        // updateUserInput({
        //     ...userInput,
        //     pImage: event.target.value,
        // });
    }

    function createProductEventHandler(event) {
        event.preventDefault();
        let product = {
            pID: 1,
            pName: pName,
            desc: pDescription,
            isAvailable: Boolean(pAvailable),
            image: pImageUrl,
            price: Number(pPrice),
        };
        updateName("");
        updatePrice("");
        updateDescription("");
        updateAvailable(false);
        updateUImageUrl("");

        console.log(product);
    }

    return (
        <form className="row g-3" onSubmit={createProductEventHandler}>
            <div className="col-md-6">
                <label htmlFor="name">Product Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Product Name"
                    value={pName}
                    onChange={nameInputHandler}
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="price">Product Price</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    className="form-control"
                    id="price"
                    placeholder="Product Price"
                    value={pPrice}
                    onChange={priceInputHandler}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Product Description"
                    value={pDescription}
                    onChange={descriptionInputHandler}
                />
            </div>

            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="isAvailable"
                    checked={pAvailable}
                    onChange={availabilityInputHandler}
                />
                <label className="form-check-label" htmlFor="isAvailable">
                    Is product available in stock?
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="select-image">Select product image</label>
                <input
                    type="file"
                    className="form-control"
                    id="select-image"
                    value={pImageUrl}
                    onChange={imageInputHandler}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Add Product
            </button>
        </form>
    );
}

export default ProductForm;
