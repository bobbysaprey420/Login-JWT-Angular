export interface DirectOrder {
    order_id: Number,
    user_id: String,
    imagefile_refernce: String,
    address_id: Number,
    amount: Number,
    bill_pdf: String,
    delivery_date: String,
    description: String,
    status_code: Number,
    status_message: String,
    status_description: String,
    tracking_id: String
}
