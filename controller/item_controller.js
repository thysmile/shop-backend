const Item = require("../model/item");

exports.postItem = async (req, res, next) => {
  // const paths = req.files;
  // const user = req.user;
  // let imagePaths = [];
  // paths.forEach((path) => {
  //   imagePaths.push(path.location);
  // });

  try {
    //extistingAmount
    const { itemName, itemPrice, itemDescription, itemType } = req.body;
    const newItem = new Item({
      itemName: itemName,
      itemPrice: itemPrice,
      itemDescription: itemDescription,
      itemType: itemType,
      // itemImages: imagePaths,
    });
    if (!newItem) {
      return res.status(500).json({ message: "You not success post item" });
    }
    await newItem.save();
    return res
      .status(200)
      .json({ message: "You success post new Item", item: newItem });
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong" });
  }
};

exports.getItem = async (req, res, next) => {
  const responseData = await Item.find();
  try {
    if (!responseData) {
      return res.status(500).json({ message: "You can't get data" });
    }
    return res
      .status(200)
      .json({ message: "You find item success", items: responseData });
  } catch (error) {
    return res.status(404).json({ message: "something went wrong" });
  }
};
