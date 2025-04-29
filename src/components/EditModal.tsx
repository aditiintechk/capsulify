import { useEffect, useRef, useState } from 'react'
import { FaTimes, FaUndo } from 'react-icons/fa'

interface EditModalProps {
	isOpen: boolean
	onClose: () => void
	item: {
		id: number
		name: string
		image: string
	}
}

function EditModal({ isOpen, onClose, item }: EditModalProps) {
	const modalRef = useRef<HTMLDivElement>(null)
	const [neckline, setNeckline] = useState('')
	const [sleeveLength, setSleeveLength] = useState('')
	const [sleeveStyle, setSleeveStyle] = useState('')

	const handleReset = () => {
		setNeckline('')
		setSleeveLength('')
		setSleeveStyle('')
	}

	const necklineOptions = [
		'V-neck',
		'Scoop neck',
		'U-neck',
		'Sweetheart',
		'Wrap neckline',
		'Cowl-neck',
		'Asymmetrical / one shoulder',
		'Narrow halter neck',
	]

	const sleeveLengthOptions = ['Sleeveless', 'Normal', 'Elbow', '3/4', 'Long']

	const sleeveStyleOptions = [
		'Cap',
		'Set-in',
		'Raglan',
		'Sleeves with Deep Armholes',
		'3/4 sleeves',
		'Long-slim',
		'Dolman / Batwing',
		'Fitted',
		'Kimono',
		'Bell sleeves',
		'Flutter sleeves',
		'Tapered long sleeves',
	]

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.body.style.overflow = 'unset'
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div className='modal-overlay'>
			<div className='modal-content' ref={modalRef}>
				<button className='modal-close' onClick={onClose}>
					<FaTimes />
				</button>
				<div className='modal-body'>
					<div className='modal-image-container'>
						<img
							src={item.image}
							alt={item.name}
							className='modal-image'
						/>
					</div>
					<p className='modal-item-name'>{item.name}</p>
					<button className='reset-button' onClick={handleReset}>
						<FaUndo />
						<span>Reset to Default</span>
					</button>
					<div className='modal-details'>
						<div className='radio-group'>
							<h3>Neckline</h3>
							<div className='radio-options'>
								{necklineOptions.map((option) => (
									<label key={option} className='radio-label'>
										<input
											type='radio'
											name='neckline'
											value={option}
											checked={neckline === option}
											onChange={(e) =>
												setNeckline(e.target.value)
											}
										/>
										<span>{option}</span>
									</label>
								))}
							</div>
						</div>

						<div className='radio-group'>
							<h3>Sleeve Length</h3>
							<div className='radio-options'>
								{sleeveLengthOptions.map((option) => (
									<label key={option} className='radio-label'>
										<input
											type='radio'
											name='sleeveLength'
											value={option}
											checked={sleeveLength === option}
											onChange={(e) =>
												setSleeveLength(e.target.value)
											}
										/>
										<span>{option}</span>
									</label>
								))}
							</div>
						</div>

						<div className='radio-group sleeve-style'>
							<h3>Sleeve Style</h3>
							<div className='radio-options'>
								{sleeveStyleOptions.map((option) => (
									<label key={option} className='radio-label'>
										<input
											type='radio'
											name='sleeveStyle'
											value={option}
											checked={sleeveStyle === option}
											onChange={(e) =>
												setSleeveStyle(e.target.value)
											}
										/>
										<span>{option}</span>
									</label>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditModal
