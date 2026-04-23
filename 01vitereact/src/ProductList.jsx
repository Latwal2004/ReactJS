export const ProductList = () => {

    const products = [{
        id: 1,
        name: "Laptop",
        price: 999,
    },
    {
        id: 2,
        name: "Phone",
        price: 699,
    }, {
        id: 3,
        name: "Pc",
        price: 499,
    }];

     {/* optimized solution  rendering the items of products array*/}
    // const productElements = products.map((product) => {
    //     return (
    //         <div>
    //             <h3>{product.name}</h3>
    //             <p>Price: Rs. {product.price}</p>
    //         </div>
    //     )
    // })

{/*now filtering the list before using map   // map() will then render only filtered products*/}

    const productElements = products.filter((product) =>{
        return product.price > 500
    }).map((product) => {
        return (
            <div key = {product.id}>
                <h3>{product.name}</h3>
                <p>Price: Rs. {product.price}</p>
            </div>
        )
    })
    return (

        <div>
            <h2>Our Products</h2>
            {/*  Hard coding is not a good practice
               Imagine writing 100+ product divs manually
            <div>
                <h3>Laptop</h3>
                <p>Price: Rs.999</p>
            </div>
            <div>
                <h3>Phone</h3>
                <p>Price: Rs.450</p>
            </div>
            <div>
                <h3>Fridge</h3>
                <p>Price: Rs.1200</p>
            </div> */}

            {/* Optimized solution using filter() + map() */}
            {productElements}

        </div>
    );
};

export default ProductList