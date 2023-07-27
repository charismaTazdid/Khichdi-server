import Order from "../models/orders.js";

// POST
// path: http://localhost:5000/order/create
export const createOrder = async (req, res) => {
    try {
        const { customerName, phoneNumber, email, address, orderList, deliveryFee, totalPrice, orderDate, orderTime, orderStatus } = req.body;
        const newOrder = new Order({ customerName, phoneNumber, email, address, orderList, deliveryFee, totalPrice, orderDate, orderTime, orderStatus });

        await newOrder.save();
        res.status(201).json({ message: 'Order Placed successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating order' });
    }
};

// READ all Order
// path: http://localhost:5000/order/getAll
export const getAllOrder = async (req, res) => {
    try {
        const orders = Order.find({});
        res.status(200).json(orders)
    } catch (error) {
        res.json({ message: error.message })
    }
};

// GET Order By Date
// path: http://localhost:5000/order/getByDate
export const getOrderByDate = async (req, res) => {
    try {
        const { date } = req.query; // Assuming the date is provided as a query parameter
        // Convert the provided date string to a JavaScript Date object
        const targetDate = new Date(date);
        const startDate = new Date(targetDate.setHours(0, 0, 0, 0));
        const endDate = new Date(targetDate.setHours(23, 59, 59, 999));

        // Find orders within the specified date range
        const orders = await Order.find({
            orderDate: { $gte: startDate, $lte: endDate }
        });
        res.status(200).json(orders)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving orders by date' });
    }
};


// GET Order By Date Range
// path: http://localhost:5000/order/getByDateRange
export const getOrderByDaterange = async (req, res) => {
    try {
        const { startDate, endDate } = req.query; // Assuming the start date and end date are provided as query parameters

        const start = new Date(startDate);
        const end = new Date(endDate);

        // Set the time range for the start and end dates
        const startRange = new Date(start.setHours(0, 0, 0, 0));
        const endRange = new Date(end.setHours(23, 59, 59, 999));

        // Find orders within the specified date range
        const orders = await Order.find({
            orderDate: {
                $gte: startRange,
                $lte: endRange
            }
        });

        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving orders by date range' });
    }
};

// UPDATE a Order
// path: http://localhost:5000/order/updateOrder/{orderId}
export const updateOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        // Find the order by its ID and update the status field
        const updatedOrder = await Order.findByIdAndUpdate(orderId, { $set: { status } }, { new: true })

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(updatedOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating order status' });
    }
};

// DELETE a ORDER
// path: http://localhost:5000/order/deleteOrder/{orderId}
export const deleteOrder = (req, res) => {
    res.send("Let's Delete Bad Order")
};