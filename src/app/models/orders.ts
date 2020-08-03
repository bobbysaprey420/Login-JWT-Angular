export interface Orders {
    order_id: Number,
    user_id: String,
    address_id: Number,
    imagefile_refernce: String,
    amount: Number,
    bill_pdf: String,
    delivery_date: String,
    description: String,
    status_code: Number,
    status_message: String,
    status_description: String,
    tracking_id: String
}
