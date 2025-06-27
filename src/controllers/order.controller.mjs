import orderModel from '..//schemas/order.schema.mjs';

const createOrder = async (req, res) => {
    try {
        const { items } = req.body;
        let { total } = req.body;
        total= items.quantity*items.priceAtPurchase
        const order = new orderModel({ user: req.body.user, items, total });
        await order.save();
        res.json(order);
    } catch (error) {
        console.error(error)
        res.json({msg:"*** ERROR AL INGRENSAR LA ORDEN, VERIFIQUE NUEVAMENETE... ***"})
    }
};

const getUserOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({  })
        res.json(orders);
    } catch (error) {
        console.error(error)
        res.json({msg:"*** ERROR AL OBTENER LA ORDEN, INTENTE NUEVAMENETE... ***"})
    }
};

const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await orderModel.findOne({ _id: id })
        if (!order) return res.json({msg:"*** NO SE ENCONTRO LA ORDEN... ***"});
        res.json(order);
    } catch (error) {
        console.error(error)
        res.json({msg:"*** ERROR AL OBTENER EL DATO, INTENTE NUEVAMENETE... ***"})
    }
};
export {
    createOrder,
    getUserOrders,
    getOrderById
}