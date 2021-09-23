import { MenuItem, Select, StyledEngineProvider } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import * as React from 'react';
import { useState } from 'react';
import { MyForm, Wrapper } from './styles';

const names = ['BR', 'EN', 'JP', 'LGH', 'CH', 'PT', 'NG', 'UK'];

export default function FilterBar() {
	const [value, setValue] = useState<string>('');

	console.log(value);

	return (
		<Wrapper>
			<StyledEngineProvider injectFirst>
				<MyForm component='fieldset'>
					<RadioGroup aria-label='gender' name='radio-buttons-group'>
						<FormControlLabel value='female' control={<Radio />} label='Female' />
						<FormControlLabel value='male' control={<Radio />} label='Male' />
					</RadioGroup>

					<Select
						labelId='nationality'
						id='nationality'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					>
						{names.map((name) => (
							<MenuItem key={name} value={name}>
								{name}
							</MenuItem>
						))}
					</Select>
				</MyForm>
			</StyledEngineProvider>
		</Wrapper>
	);
}
