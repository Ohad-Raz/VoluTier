import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { getObjHandleForm } from '../../utils/general';
import { UserContext } from '../../context/UserContext';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Login() {
    const { LoginFunc, UserID, Token } = useContext(UserContext);
    const tokenExpired = Token && (!UserID);
    const [ErrorMsg, setErrorMsg] = useState(tokenExpired ? "login session expired" : "");

    async function sendFormObj(e) {
        const newFormObj = getObjHandleForm(e);
        console.log({ ...newFormObj, role: SelectOpt.value });
        setErrorMsg('Logging In...');
        setErrorMsg(await LoginFunc(newFormObj));
    }

    const selectOptions = [
        { value: 'employee', label: 'Employee' },
        { value: 'company', label: 'Company' },
        { value: 'business', label: 'Business' },
        // { value: 'Volunteer', label: 'Volunteer Place' },
    ];
    const [SelectOpt, SetSelectOpt] = useState(selectOptions[0]);
    const handleSelectChange = (selectOptions) => {
        SetSelectOpt(selectOptions);
    };



    return (
     
        <ThemeProvider theme={createTheme()}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={sendFormObj} noValidate sx={{ mt: 1 }}>
                   
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        
                       
                             <Select
                            value={SelectOpt}
                            name='select'
                            onChange={handleSelectChange}
                            options={selectOptions}
                            placeholder="Select an option"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={ErrorMsg === 'Logging In...'}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
