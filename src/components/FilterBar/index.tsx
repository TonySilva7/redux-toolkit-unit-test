import { Checkbox, StyledEngineProvider } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import { BaseSyntheticEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPatients, ParamsUrl, selectInfo } from '../../features/patients/patientSlice';
import { MyForm, Wrapper } from './styles';

interface FilterProps {
	isVisible: boolean;
	url: ParamsUrl;
	setUrl: (obl: ParamsUrl) => void;
}

export default function FilterBar({ isVisible, url, setUrl }: FilterProps) {
	const dispatch = useAppDispatch();
	const page = useAppSelector(selectInfo);

	const [isCheckMale, setIsCheckMale] = useState<boolean>(false);
	const [isCheckFemale, setIsCheckFemale] = useState<boolean>(false);

	function handleGender(event: BaseSyntheticEvent) {
		const isChecked = event.target.checked;
		const gender = isChecked ? event.target.value : '';
		const obj = { ...url, page: page, gender: gender };

		setUrl(obj);

		gender === 'male' ? setIsCheckFemale(true) : setIsCheckFemale(false);
		gender === 'female' ? setIsCheckMale(true) : setIsCheckMale(false);
		dispatch(getPatients(obj));
	}

	return (
		<Wrapper display={isVisible ? 'flex' : 'none'}>
			<StyledEngineProvider injectFirst>
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
				</MyForm>
			</StyledEngineProvider>
		</Wrapper>
	);
}
