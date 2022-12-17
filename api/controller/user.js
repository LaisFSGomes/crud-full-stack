import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";
    db.query(q, (err, data) => {
        if (err) return res.json("error");
        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q = "INSERT INTO usuarios (´nome´, ´email´, ´fone´, ´data_nascimento´) VALUES (?)";
    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento
    ];

    bd.query(q, [values], (err)=> {
        if (err) return res.json(err);
        return res.status(200).json("usuario adicionado com sucesso");
    });
};

export const updateUser = (req, res) => {
    const q = "UPDATE usuarios SET nome = ?, email = ?, fone = ?, data_nascimento = ? WHERE id = ?";
    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    bd.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);
        return res.status(200).json("usuario atualizado com sucesso");
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE id = ?";
    
    bd.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);
        return res.status(200).json("usuario deletado com sucesso");
    });
};