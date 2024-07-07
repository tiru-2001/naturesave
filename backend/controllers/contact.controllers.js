import contactModel from "../database/contactschema/contact.shema.js";
const contactController = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).send({
        message: "Please fill all the fields",
        success: false,
      });
    }
    const checkemailExist = await contactModel.findOne({ email });
    if (checkemailExist) {
      return res.status(400).send({
        message: "We got your form we will get back to you soon",
        success: false,
      });
    }

    const contactdata = await new contactModel({
      name,
      email,
      phone,
      message,
    }).save();
    return res.status(200).send({
      message: "Your form has been saved successfully",
      success: true,
      contactdata,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "An internal error occurred",
      success: false,
    });
  }
};

export default contactController;
