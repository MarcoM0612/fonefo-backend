const createCategorie = ( req,res) => {
    const inputData = req.body

    console.log(inputData)

    res.send(inputData)
}

export{
    createCategorie
}