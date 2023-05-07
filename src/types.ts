export type DropdownType = {
	id: string
	label: string
	value: string | boolean
}

export type formDataType = {
	selectedPlan: string
	selectedCountries: string[]
	participant: string
	additionalParticipants: string
	studyDuration: string
	studyStructure: string
	studyModeration: string
	projectGuides: string
	needTranscripts: string
	studyReport: string
}

export type InputType = {
	label: string
	placeholder: string
	description: string
	modelKey: string
	dropdown?: DropdownType[]
}