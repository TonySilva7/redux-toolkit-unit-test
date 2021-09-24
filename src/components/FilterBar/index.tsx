import { Checkbox, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import { BaseSyntheticEvent } from 'hoist-non-react-statics/node_modules/@types/react';
import * as React from 'react';
import { useState } from 'react';
import { LabelNat, MyForm, Wrapper } from './styles';

const names = ['BR', 'EN', 'JP', 'LGH', 'CH', 'PT', 'NG', 'UK'];

interface FilterProps {
	isVisible: boolean;
}

export default function FilterBar({ isVisible }: FilterProps) {
	const [valueCountry, setValueCountry] = useState<string>('');
	const [valueGender, setValueGender] = useState<string[]>([]);

	function handleChangeCheck(event: BaseSyntheticEvent) {
		const isChecked = event.target.checked;
		const value = event.target.value;
		isChecked
			? setValueGender([...valueGender, value])
			: setValueGender((prev) => prev.filter((e) => e !== value));
	}

	function handleChangeSelect(event: SelectChangeEvent) {
		setValueCountry(event.target.value);
	}

	console.log(valueGender, valueCountry);

	return (
		<Wrapper display={isVisible ? 'flex' : 'none'}>
			{/* <StyledEngineProvider injectFirst> */}
			<MyForm component='fieldset'>
				<RadioGroup aria-label='gender' name='radio-buttons-group'>
					<FormControlLabel
						value='female'
						control={<Checkbox />}
						label='Female'
						onChange={handleChangeCheck}
					/>
					<FormControlLabel
						value='male'
						control={<Checkbox />}
						label='Male'
						onChange={handleChangeCheck}
					/>
				</RadioGroup>

				<LabelNat id='country'>Country</LabelNat>
				<Select
					id='country'
					labelId='country'
					value={valueCountry}
					onChange={handleChangeSelect}
					input={<OutlinedInput label='Country' />}
				>
					{names.map((name) => (
						<MenuItem key={name} value={name}>
							{name}
						</MenuItem>
					))}
				</Select>
			</MyForm>
			{/* </StyledEngineProvider> */}
		</Wrapper>
	);
}
