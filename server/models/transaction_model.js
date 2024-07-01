import mongoose from "mongoose";

const transactionSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    description:{
        type:String,
        required:true
    },
    paymentType:{
        type:String,
        enum:["CREDIT_CARD","DEBIT_CARD","CASH","UPI","WALLET"],
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        enum:["saving","investment","expense"],
        required:true
    },
    date:{
        type:String,
        required:true
    },
    location:{
        type:String
    }

    
},{timeseries:true})

const Transaction=mongoose.model("Transaction",transactionSchema);
export default Transaction;