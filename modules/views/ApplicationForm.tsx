import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Snackbar from "../components/Snackbar";
import { phone, required } from "../form/validation";
import { Field, Form, FormSpy } from "react-final-form";
import RFTextField from "../form/RFTextField";
import FormButton from "../form/FormButton";
import FormFeedback from "../form/FormFeedback";

const ApplicationForm: React.FC = () => {

	const handleSubmit = (values: { [index: string]: string }): void => {
		if (values.phone && values.phone.length > 0) {
			console.log(values.phone);
		}
	}

	const validate = (values: { [index: string]: string }) => {
		const errors = required(["phone"], values)
		if (!errors.phone) {
			const phoneError = phone(values.phone);
			if (phoneError) {
				errors.phone = phoneError;
			}
		}
		return errors;
	};

	return (
		<Container component='section' sx={{ mt: 15, display: "flex" }}>
			<Grid container>
				<Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							bgcolor: "warning.main",
							py: 8,
							px: 3,
						}}>
						<Box sx={{ maxWidth: 400 }}>
							<Typography variant='h2' component='h3' gutterBottom>
								Оставить заявку
							</Typography>
							<Typography variant='subtitle1' component='span'>
								Мы свяжимся с вами в течение 3 минут
							</Typography>
							<Form
								onSubmit={handleSubmit}
								subscription={{ submitting: true }}
								validate={validate}
							>
								{() => (
									<Box
										component='form'
										noValidate
										sx={{ 
											mt: 2, 
											borderRadius: 2 
											}}
									>
										<Field
											noBorder
											variant='standard'
											sx={{
												[`& input`]: {
													borderRadius: 2,
												},
												width: "100%",
												mt: 3,
												mb: 2,
											}}
											component={RFTextField}
											autoComplete='Phone'
											placeholder='Телефон'
											name='phone'
											required
										/>
										<FormButton
											id='application-button'
											type='submit'
											color='primary'
											variant='contained'
											sx={{ 
												width: "100%",
												borderRadius: 2
											 }}
											fullWidth>
												Отправить
										</FormButton>
									</Box>
								)}
							</Form>
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						display: { md: "block", xs: "none" },
						position: "relative",
					}}>
					<Box
						sx={{
							position: "absolute",
							top: -67,
							left: -67,
							right: 0,
							bottom: 0,
							width: "100%",
							background: "url(/images/applicationImageDots.webp)",
						}}
					/>
					<Box
						component='img'
						src='/images/aplication-img.webp'
						alt='aplication-img'
						sx={{
							position: "absolute",
							top: -28,
							left: -28,
							right: 0,
							bottom: 0,
							width: "100%",
							maxWidth: 600,
						}}
					/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default ApplicationForm;
