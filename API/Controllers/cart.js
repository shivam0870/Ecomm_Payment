import { Cart } from '../Models/Cart.js';


//add to cart
export const addToCart = async (req, res) => {
    try {
        const { productId, title, price, qty, imgSrc } = req.body;
        const userId = "66ebfba190560a9e2e01c93d";
        //getting cart by the user id because it is user specific 
        let cart = await Cart.findOne({ userId })
        //if cart is not there then we will create a cart else we will increase or decrease the quantitiy of cart item
        if (!cart) {
            cart = new Cart({ userId, items: [] })
        }
        const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId) //returns -1 if no item is being found 
        const quantity = parseInt(qty); // Ensure qty is treated as a number
        const pricePerItem = parseFloat(price); // Ensure price is a number
        if (itemIndex > -1) {
            cart.items[itemIndex].qty += quantity;
            cart.items[itemIndex].price += pricePerItem * quantity;
        }
        else {
            cart.items.push({ productId, qty, title, price, imgSrc })
        }

        cart.items.push({ productId, title, price, qty, imgSrc });
        await cart.save();
        res.json({
            message: "Item added to Cart",
            cart
        })
    } catch (error) {
        res.json(error.message)
    }

}

//Get user cart

export const userCart = async (req, res) => {
    const userId = "66ebfba190560a9e2e01c93d";
    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.json({
                message: "Cart Not Found"
            })
        }
        res.json({
            message: "User cart",
            cart
        })
    } catch (error) {
        res.json(error.message);
    }
}

//Remove product from cart

export const removeProductFromCart = async (req, res) => {
    const productId = req.params.productId;
    const userId = "66ebfba190560a9e2e01c93d";
    try {
        let cart = await Cart.findOne({ userId })
        if (!cart) {
            return res.json({
                message: "Cart not found"
            })
        }
        cart.items = cart.items.filter((item) => item.productId.toString() !== productId);
        await cart.save();
        res.json({
            message: "Product removed from cart",
            cart
        })

    } catch (error) {
        res.json(error.message);
    }
}


// Clear cart

export const clearCart = async(req,res) => {
    const userId = "66ebfba190560a9e2e01c93d";
    let cart = await Cart.findOne({userId});
    if(!cart){
        cart = new Cart({items : []})
    }
    else{
        cart.items = [];
    }
    await cart.save();
    res.json({
        message : "Cart cleared"
    })
}



//Decrease qty from cart

export const decreaseProductQty = async (req, res) => {
    try {
        const { productId,qty,  } = req.body;
        const userId = "66ebfba190560a9e2e01c93d";
        //getting cart by the user id because it is user specific 
        let cart = await Cart.findOne({ userId })
        //if cart is not there then we will create a cart else we will increase or decrease the quantitiy of cart item
        if (!cart) {
            cart = new Cart({ userId, items: [] })
        }
        const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId) //returns -1 if no item is being found 
        const quantity = parseInt(qty); // Ensure qty is treated as a number
        const pricePerItem = parseFloat(price); // Ensure price is a number
        if (itemIndex > -1) {
            const item = cart.items[itemIndex];
            if(item.qty > qty){
               const pricePerUnit = item.price/item.qty 
            }
            cart.items[itemIndex].qty += quantity;
            cart.items[itemIndex].price += pricePerItem * quantity;
        }
        else {
            cart.items.push({ productId, qty, title, price, imgSrc })
        }

        cart.items.push({ productId, title, price, qty, imgSrc });
        await cart.save();
        res.json({
            message: "Item added to Cart",
            cart
        })
    } catch (error) {
        res.json(error.message)
    }

}