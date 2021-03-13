import React from "react";
import { Grid } from "@material-ui/core";
import logo from "./logo.gif";

function App() {
	return (
		<>
			<Grid
				container
				justify='center'
				alignItems='center'
				style={{
					textAlign: "center",
					margin: 0,
					position: "absolute",
					top: "50%",
					transform: "translateY(-50%)",
				}}
			>
				<Grid item>
					<img src={logo} style={{ height: "40vmin" }} alt='logo' />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<Grid container justify='center' alignItems='center' spacing={5}>
						<Grid item>
							<a
								href='https://material-ui.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Material-UI
							</a>
						</Grid>
						<Grid item>
							<a
								href='https://styled-components.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Styled Components
							</a>
						</Grid>
						<Grid item>
							<a
								href='https://reactrouter.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								React Router DOM
							</a>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}

export default App;
