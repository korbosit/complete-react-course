import Button from "./Button";

function ProductDetails(props) {
    let badgeClass = "badge-margin-left-240 badge";
    badgeClass += props.isAvailable ? " bg-success " : " bg-danger";

    let productCount = 0;

    function displayFormattedProductCount() {
        return productCount > 0 ? productCount : "Zero";
    }

    let incrementProductCount = function () {
        productCount++;
        console.log(productCount);
    };
    let decrementProductCount = function () {
        productCount--;
        console.log(productCount);
    };
    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{ marginRight: 30 }}>
                ${props.price}
            </h6>
            <Button eventHandler={decrementProductCount}>-</Button>
            <span style={{ padding: "8px 14px", fontSize: 13 }}>
                {displayFormattedProductCount()}
            </span>
            <Button eventHandler={incrementProductCount}>+</Button>
            <span className={badgeClass}>
                {props.isAvailable ? "Available" : "Unavailable"}
            </span>
        </div>
    );
}

export default ProductDetails;
