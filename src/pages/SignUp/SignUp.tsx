import React from 'react';
import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Typography, Button, } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import User from "../../models/User";
import { cadastraUsuario } from "../../services/Service";
import { toast } from 'react-toastify';

import './SignUp.css';

function SignUp() {

    let navigate = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("");
    const [user, setUser] = useState<User>({
        id: 0,
        nome: "",
        foto: "",
        usuario: "",
        senha: "",

    });

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: "",
        foto: "",
        usuario: "",
        senha: "",

    });

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login");
        }
    }, [userResult]);

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value);
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            try {
                await cadastraUsuario(`/usuarios/cadastrar`, user, setUserResult);
                toast.success('Usuário cadastrado com sucesso.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

            } catch (error) {
                
                toast.error('Usuário já existente.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    
            }
        } else {
            toast.warn('Insira uma senha de no mínimo 8 caracteres.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                

            setUser({ ...user, senha: "" });
            setConfirmarSenha("");
        }
    }

    return (
        <>
            <Grid container>

                <Box className="container">

                    <Box className="signup-box">

                        <Box className="box-image">

                            <img className="img" src="https://cdn.discordapp.com/attachments/710276943592816720/1014999749453172838/video-conferencing-concept-landing-page_52683-20174.png" alt="register-image" />

                        </Box>

                        <Box className="signup">

                            <Box className="signup-container">

                                <form className="form" onSubmit={onSubmit}>
                                    <Box className="title-box">
                                        <Typography className="title" variant="h3"> Join Us</Typography>
                                    </Box>

                                    <Box className="input-container">

                                        <Box className="input-box">
                                            <TextField
                                                value={user.nome}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                                className="input"
                                                id="nome"
                                                name="nome"
                                                label="Name"
                                                variant="filled"
                                            />
                                        </Box>

                                        <Box className="input-box">
                                            <TextField
                                                value={user.usuario}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                                className="input"
                                                id="usuario"
                                                name="usuario"
                                                label="Username"
                                                type="email"
                                                variant="filled"
                                            />
                                        </Box>

                                        <Box className="input-box">
                                            <TextField
                                                value={user.senha}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                                className="input"
                                                id="senha"
                                                name="senha"
                                                label="Password"
                                                type="password"
                                                variant="filled"
                                            />
                                        </Box>

                                        <Box className="input-box" id="confirmpass-box">
                                            <TextField
                                                value={confirmarSenha}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                    confirmarSenhaHandle(e)
                                                }
                                                className="input"
                                                id="confirmarSenha"
                                                name="confirmarSenha"
                                                label="Confirm Password"
                                                type="password"
                                                variant="filled"
                                            />
                                        </Box>

                                    </Box>

                                    <Box className="links-container">
                                        <Link to='/login' className="links">I already have an account</Link>
                                    </Box>

                                        <Button type="submit" className="button">REGISTER</Button>
                                    
                                </form>

                            </Box>

                        </Box>

                    </Box>

                </Box>

            </Grid>
        </>
    )
}

export default SignUp;