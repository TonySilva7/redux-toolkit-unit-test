import { MenuItem, Radio, Select, SelectChangeEvent } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPatients, selectPatients } from '../../features/patients/patientSlice';
import { LabelNat, MyForm, Wrapper } from './styles';

interface FilterProps {
	isVisible: boolean;
}

export default function FilterBar({ isVisible }: FilterProps) {
	const [valueCountry, setValueCountry] = useState<string>('');
	const [valueGender, setValueGender] = useState<string>('');

	const dispatch = useAppDispatch();
	const patients = useAppSelector(selectPatients);

	const [natList, setNatList] = useState<string[]>([]);

	useEffect(() => {
		const arr = patients.map((p) => p.nat);
		const nat = arr.filter((n, i) => arr.indexOf(n) === i);
		setNatList(nat);
	}, [patients]);

	function handleChangeCheck(event: BaseSyntheticEvent) {
		const isChecked = event.target.checked;
		const value = event.target.value;
		isChecked && setValueGender(() => value);

		dispatch(getPatients(2));
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
						control={<Radio />}
						label='Female'
						onChange={handleChangeCheck}
					/>
					<FormControlLabel
						value='male'
						control={<Radio />}
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
					{natList.map((nat) => (
						<MenuItem key={nat} value={nat}>
							{nat}
						</MenuItem>
					))}
				</Select>
			</MyForm>
			{/* </StyledEngineProvider> */}
		</Wrapper>
	);
}
