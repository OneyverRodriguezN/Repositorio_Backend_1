
const cliente = require('../models/cliente');

//Funcion Para buscar Clientes que esten en la base de datos
exports.buscarClientes = async(req, res) => {

try {
    const Clientes = await cliente.find()
    res.send(Clientes)

} catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al buscar los cliente')
}
}


// Funcion Agregar Clientes
exports.agregarClientes = async(req, res) =>{
    try{
        let Clientes;
        Clientes = new cliente(req.body)
        await Clientes.save()
        res.send(Clientes)

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al agregar un cliente')
    }
}

// Funcion para mostrar un solo cliente
exports.buscarCliente = async(req,res) =>{
    try {
        let Clientes = await cliente.findById(req.params.id);
        if(!Clientes){
            res.status(404).send({msg:"Cliente no encontrado con ese Id"})
            return
        }

        res.send(Clientes);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al buscar un cliente')
    }
}

// Funcion para Eliminar un cliente
exports.eliminarCliente = async(req,res) => {
    try {
        let Clientes = await cliente.findById(req.params.id);
        if(!Clientes){
            res.status(404).send({msg:"El cliente no Existe en la BD"});
            return
        }
        
        await cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg:"El cliente ha sido Eliminado"});
        return

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al Eliminar un cliente')
    }
}

// Funcion para actualizar un cliente

exports.actualizarCliente = async(req,res) => {
    try {
        const {nombres, apellidos, documento, correo, telefono, direccion} = req.body
        let Clientes = await cliente.findById(req.params.id);
        if(!Clientes){
            res.status(404).send({msg:"El cliente no Existe"});
        }else{

            Clientes.nombres = nombres;
            Clientes.apellidos = apellidos;
            Clientes.documento = documento;
            Clientes.correo = correo;
            Clientes.telefono = telefono;
            Clientes.direccion = direccion;

            Clientes = await cliente.findOneAndUpdate({_id: req.params.id},Clientes,{new:true})
            res.send(Clientes);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al Actualizar un cliente')
    }
}