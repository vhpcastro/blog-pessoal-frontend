import React, { useState, useEffect, ChangeEvent } from 'react';

import { Grid, TextField, Typography, Button, } from '@material-ui/core';
import { Box } from '@mui/material';

import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';

import './SignIn.css';

function SignIn() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState("");
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        foto: "",
        usuario: "",
        senha: "",
        token: "",
    });

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        if (token != "") {
            dispatch(addToken(token))
            navigate("/home");
        }
    }, [token]);

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken);

            alert("Usuário logado com sucesso!");
        } catch (error) {
            alert("Dados do usuário inconsistentes. Erro ao logar!");
        }
    }

    return (
        <>
            <Grid container>

                <Box className="container">

                    <Box className="signin-box">

                        <Box className="signin">

                            <Box className="signin-container">

                                <form className="form" onSubmit={onSubmit}>
                                    <Typography className="title" variant="h3"> Welcome</Typography>

                                    <Box className="input-container">
                                        <TextField
                                            value={userLogin.usuario}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                            className="input"
                                            id="username"
                                            name="usuario"
                                            label="Username"
                                            type="email"
                                            variant="filled"
                                        />

                                        <TextField
                                            value={userLogin.senha}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                            className="input"
                                            id="password"
                                            name="senha"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            variant="filled"
                                        />
                                    </Box>


                                    <Box className="links-container">
                                        <Link to='' className="links">I forgot my password</Link>
                                        <Link to='/register' className="links">I don't have an account</Link>
                                    </Box>

                                        <Button className="button" type="submit">LOGIN</Button>
                                    
                                </form>

                            </Box>

                        </Box>

                        <Box className="box-image">

                            <img className="img" src="https://cdn.discordapp.com/attachments/710276943592816720/1014292458202484756/signup-img.png" alt="login-image" />

                        </Box>

                    </Box>

                </Box>

            </Grid>
        </>
    )
}

export default SignIn;