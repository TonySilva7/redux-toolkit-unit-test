import { Checkbox, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPatients, ParamsUrl, selectPatients } from '../../features/patients/patientSlice';
import { LabelNat, MyForm, Wrapper } from './styles';

interface FilterProps {
	isVisible: boolean;
}

export default function FilterBar({ isVisible }: FilterProps) {
	const dispatch = useAppDispatch();
	const patients = useAppSelector(selectPatients);

	const [valueCountry, setValueCountry] = useState<string>('');
	const [isCheckMale, setIsCheckMale] = useState<boolean>(false);
	const [isCheckFemale, setIsCheckFemale] = useState<boolean>(false);
	const [natList, setNatList] = useState<string[]>([]);
	const [paramsUrl, setParamsUrl] = useState<ParamsUrl>({ page: 1, gender: '', nat: '' });

	useEffect(() => {
		const arr = patients.map((p) => p.nat);
		const nat = arr.filter((n, i) => arr.indexOf(n) === i);
		setNatList(nat);
	}, [patients]);

	function handleGender(event: BaseSyntheticEvent) {
		const isChecked = event.target.checked;
		const gender = isChecked ? event.target.value : '';
		const obj = { ...paramsUrl, gender: gender };

		setParamsUrl(obj);

		gender === 'male' ? setIsCheckFemale(true) : setIsCheckFemale(false);
		gender === 'female' ? setIsCheckMale(true) : setIsCheckMale(false);
		dispatch(getPatients(obj));
	}

	function handleNationality(event: SelectChangeEvent) {
		const nat = event.target.value;
		setValueCountry(nat);

		dispatch(getPatients({ ...paramsUrl, nat: nat }));
		setNatList(patients.map((p) => p.nat));
	}

	return (
		<Wrapper display={isVisible ? 'flex' : 'none'}>
			{/* <StyledEngineProvider injectFirst> */}
			<MyForm component='fieldset'>
				<RadioGroup aria-label='gender' name='radio-buttons-group'>
					<FormControlLabel
						value='female'
						control={<Checkbox />}
						label='Female'
						onChange={handleGender}
						disabled={isCheckFemale}
					/>
					<FormControlLabel
						value='male'
						control={<Checkbox />}
						label='Male'
						disabled={isCheckMale}
						onChange={handleGender}
					/>
				</RadioGroup>

				<LabelNat id='country'>Country</LabelNat>
				<Select
					id='country'
					labelId='country'
					value={valueCountry}
					onChange={handleNationality}
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
