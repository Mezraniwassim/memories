import postMessage from "../models/postMessage.js";

export const getPosts =  async (req, res) =>{
 try {
    const postMessage = await postMessage.find(); 
    res.status(200).json(postMessage); 


    
 } catch (error) {
    res.status(404).json({msg:'not find '});

    
 }
}
export const createPost = async (req,res)=>{
   const post =req.body; 
   const newPost = new postMessage(post);
   try {
      await newPost.save(); 
      res.status(201).json(newPost);

   } catch (error) {
      res.status(409).json({Message:error.Message})

      
   }

}

