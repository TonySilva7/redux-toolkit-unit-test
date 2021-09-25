import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { StyledEngineProvider } from '@mui/styled-engine';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	handleModal,
	selectOnlyPatient,
	selectPatients,
	selectShowModal,
} from '../../features/patients/patientSlice';
import { Footer, Header, MyIconButton, Wrapper } from './styles';

export default function ModalUser() {
	const showModal = useAppSelector(selectShowModal);
	const idPatient = useAppSelector(selectOnlyPatient);
	const patients = useAppSelector(selectPatients);
	const dispatch = useAppDispatch();

	const urlImage = patients[idPatient].picture.large;
	const altDesc = patients[idPatient].name.last;
	const clientName = patients[idPatient].name.first.concat(' ', patients[idPatient].name.last);

	return (
		<Wrapper display={showModal ? 'flex' : 'none'}>
			<div>
				<Header>
					<div>
						<img src={urlImage} alt={altDesc} />
						<h1>{clientName}</h1>
					</div>
					<StyledEngineProvider injectFirst>
						<MyIconButton
							color='secondary'
							aria-label='close window'
							onClick={() => dispatch(handleModal(idPatient))}
						>
							<CancelRoundedIcon />
						</MyIconButton>
					</StyledEngineProvider>
				</Header>

				<Footer>
					<p>
						<strong>Email:</strong> {patients[idPatient].email}
					</p>
					<p>
						<strong>Gender:</strong> {patients[idPatient].gender}
					</p>
					<p>
						<strong>Birth Date:</strong> {patients[idPatient].dob.date.substr(0, 10)}
					</p>
					<p>
						<strong>Phone:</strong> {patients[idPatient].phone}
					</p>
					<p>
						<strong>Nationality:</strong> {patients[idPatient].nat}
					</p>

					<p>
						<strong>Address:</strong> {patients[idPatient].location.street.name},{' '}
						{patients[idPatient].location.street.number} - {patients[idPatient].location.city}
					</p>
					<p>
						<strong>Id:</strong>{' '}
						{patients[idPatient].id.name.length === 0
							? 'Patient without id'
							: patients[idPatient].id.name}
					</p>
				</Footer>
			</div>
		</Wrapper>
	);
}
