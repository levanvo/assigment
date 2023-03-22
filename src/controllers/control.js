import SchemaMongoose from "../models/model"
import joi from "joi"


const SchemaJoi = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    desc: joi.string(),
    status:joi.boolean(),
    quantity: joi.number() 
});
export const getAll = async (req, res) => {
    try{
        const data = await SchemaMongoose.find();
        return res.json({ message: "Toan bo du lieu ===>>> ", data });
    }catch(error){return res.status(400).json({message: "Error Catch...."})};
};

export const getOne = async (req, res) => {
    try{
        const data = await SchemaMongoose.findById(req.params.id);
        return res.json({ message: "Lay 1 du lieu ===>>> ", data });
    }catch(error){return res.status(400).json({message: "Error Catch...."})};
};
  
export const Create = async (req, res) => {
    try {
        const { error } = SchemaJoi.validate(req.body);
        if (error) {
            const errors = error.details[0].message;
            return res.status(400).json({ message: "Error Schema Joi", errors });
        }
        
        const data = await SchemaMongoose.create(req.body)
        if (!data) {
            return res.status(404).json({ message: "Chua co du lieu them ???" });
        }
        return res.json({ message: "Them thanh cong du lieu ====>>>> ", data });
    }catch(error){return res.status(400).json({message: "Error Catch...."})};
};
  
export const Update = async (req, res) => {
    try {
        const { error } = SchemaJoi.validate(req.body);
        if (error) {
            const errors = error.details[0].message;
            return res.status(400).json({ message: "Error Schema Joi", errors });
        }
        
        const data = await SchemaMongoose.findByIdAndUpdate(req.params.id, req.body,{new:true})
        return res.json({ message: "Cap nhat thanh cong du lieu ====>>>> ", data });
    }catch(error){return res.status(400).json({message: "Error Catch...."})};
};
  
export const Remove = async (req, res) => {
    try{
        const data = await SchemaMongoose.findByIdAndDelete(req.params.id);
        return res.json({ message: "Xoa xong 1 du lieu ===>>> ", data });
    }catch(error){return res.status(400).json({message: "Error Catch...."})};
};