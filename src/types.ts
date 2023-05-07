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
	studyStructure: boolean | null
	studyModeration: boolean | null
	projectGuides: boolean | null
	needTranscripts: boolean | null
	studyReport: boolean | null
}

export type InputType = {
	label: string
	placeholder: string
	description: string
	modelKey: string
	dropdown?: DropdownType[]
}